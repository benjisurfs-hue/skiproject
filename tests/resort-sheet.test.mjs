import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeResortSheet, sheetColumns } from '../lib/resort-sheet.ts';
import { killington } from '../data/resorts/killington.ts';

const csv = (rows, headers = sheetColumns) => [headers, ...rows.map(r => headers.map(h => r[h] ?? ''))]
  .map(row => row.map(v => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\r\n');
const row = {
  id: 'killington', slug: 'killington', name: 'Edited resort', state: 'Vermont', region: 'Central Vermont',
  passes: '["Ikon","Indy"]', liftAccessScore: '3', affordabilityScore: '4',
  terrainParks: '{"status":"seasonal","min":5,"max":7}', nycDriveTime: '~3.5 hours',
  website: 'https://killington.com', description: 'A comma, a "quote"\nand a second line.',
};

test('sheet fields update without losing media or editorial content; blanks stay missing', () => {
  const before = structuredClone(killington);
  const [r] = mergeResortSheet(csv([row]), [killington]);
  assert.equal(r.name, row.name);
  assert.equal(r.description, row.description);
  assert.equal(r.annualSnowfallIn, null);
  assert.equal(r.coordinates, null);
  assert.equal(r.terrain, null);
  assert.equal(r.season.projectedOpening, null);
  assert.equal(r.nycTransportation.driveTimeHours, 3.5);
  assert.deepEqual(r.passes, ['Ikon', 'Indy']);
  assert.deepEqual(r.terrainParks, {status:'seasonal',min:5,max:7});
  for (const key of ['media','highlights','pros','cons','sources']) assert.deepEqual(r[key], before[key]);
  assert.deepEqual(killington, before);
});

test('blank and TRUE publish, FALSE hides; explicit zero survives', () => {
  assert.equal(mergeResortSheet(csv([{...row,published:'FALSE'}]), [killington]).length, 0);
  const [r] = mergeResortSheet(csv([{...row,published:'TRUE',annualSnowfallIn:'0',terrainParks:'0'}]), [killington]);
  assert.equal(r.annualSnowfallIn, 0);
  assert.equal(r.terrainParks.count, 0);
});

test('bus FALSE removes only bus providers; blank preserves; TRUE does not invent providers', () => {
  const [hidden] = mergeResortSheet(csv([{...row,nycBusAvailable:'false'}]), [killington]);
  assert(hidden.nycTransportation.transitOptions.every(o => o.type !== 'bus'));
  assert(hidden.nycTransportation.transitOptions.some(o => o.type === 'train'));
  const [kept] = mergeResortSheet(csv([row]), [killington]);
  assert.deepEqual(kept.nycTransportation.transitOptions, killington.nycTransportation.transitOptions);
  const [available] = mergeResortSheet(csv([{...row,nycBusAvailable:'TRUE'}]), [{...killington,nycTransportation:{...killington.nycTransportation,transitOptions:[]}}]);
  assert.equal(available.nycTransportation.busAvailable, true);
  assert.deepEqual(available.nycTransportation.transitOptions, []);
});

test('invalid data rejects the snapshot instead of displaying corrupt facts', () => {
  for (const invalid of [
    {annualSnowfallIn:'oops'}, {liftAccessScore:'6'}, {liftAccessScore:'2.5'},
    {published:'maybe'}, {passes:'["Unknown"]'}, {projectedOpening:'2026-02-30'},
    {website:'javascript:alert(1)'}, {terrainParks:'{"min":7,"max":5}'},
    {latitude:'42'}, {beginner:'20'}, {id:'unknown'}, {name:''},
  ]) assert.throws(() => mergeResortSheet(csv([{...row,...invalid}]), [killington]));
  assert.throws(() => mergeResortSheet(csv([row,row]), [killington]));
  assert.throws(() => mergeResortSheet(csv([]), [killington]));
  assert.throws(() => mergeResortSheet('<html>Sign in</html>', [killington]));
  assert.throws(() => mergeResortSheet(csv([row], ['id','name']), [killington]));
});

test('columns can move and plain comma-separated passes are accepted', () => {
  const [r] = mergeResortSheet(csv([{...row,passes:'Epic, Indy'}], [...sheetColumns].reverse()), [killington]);
  assert.deepEqual(r.passes,['Epic','Indy']);
});
