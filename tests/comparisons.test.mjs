import test from 'node:test';
import assert from 'node:assert/strict';
import { normalize, getComparisons, comparisonMetrics, sortOptions, sortResorts } from '../lib/comparisons.ts';
import { resorts } from '../data/resorts.ts';

test('normalization is monotonic in the desirable direction for every metric', () => {
  for (const metric of comparisonMetrics) {
    const scores = [0, 10, 20].map(value => normalize(value, [0, 10, 20], metric.higherIsBetter));
    assert.deepEqual(scores, metric.higherIsBetter ? [0, 50, 100] : [100, 50, 0]);
  }
});
test('ties, missing values, empty cohorts and outliers are safe', () => {
  assert.equal(normalize(10, [10,10], true), 50);
  assert.equal(normalize(0, [0], false), 50);
  for (const value of [null, NaN, Infinity, -1]) assert.equal(normalize(value, [0,10], true), null);
  assert.equal(normalize(10, [null, NaN], true), null);
  assert.equal(normalize(10, [], false), null);
  assert.equal(normalize(40, [10,20], true), 100);
  assert.equal(normalize(0, [10,20], true), 0);
  assert.equal(normalize(0, [0,10], false), 100);
});
test('raw values and scores derive from the same fields, independently of seasonal totals', () => {
  const changed = {...resorts[0], annualSnowfallIn: 300, season:{...resorts[0].season,snowTotalIn:999}};
  const stats = getComparisons(changed, resorts);
  assert.equal(stats[0].value, '300 in / year');
  assert.equal(stats[0].score, 50);
  assert.equal(stats[3].value, '6 min wait');
  assert.equal(stats[4].value, '$149 / day');
  const missing = getComparisons({...changed,dayTicketPrice:null},resorts)[4];
  assert.equal(missing.score,null);assert.equal(missing.value,'Not available');
});
test('all seven sorts retain direction, ties, missing-last and input order', () => {
  const expected=['jay-peak','jay-peak','jay-peak','sugarbush','sugarbush','smugglers-notch','jay-peak'];
  const before=JSON.stringify(resorts);
  sortOptions.forEach((option,index)=>assert.equal(sortResorts(resorts,option.key)[0].id,expected[index]));
  assert.equal(JSON.stringify(resorts),before);
  const missing={...resorts[0],id:'missing',dayTicketPrice:null};
  assert.equal(sortResorts([missing,...resorts],'dayTicketPrice').at(-1).id,'missing');
  assert.equal(getComparisons(resorts[0],sortResorts(resorts,'skiableAcres'))[0].score,getComparisons(resorts[0],resorts)[0].score);
});
test('sample records have three local media items, valid terrain percentages and separate parks', () => {
  for(const resort of resorts){
    assert.equal(resort.media.length,3);
    assert(resort.media.every(item=>item.src.startsWith('/figma/')&&item.alt));
    assert(Math.abs(Object.values(resort.terrain).reduce((a,b)=>a+b,0)-100)<1e-8);
    assert.equal(Object.keys(resort.terrain).length,3);
    assert.equal(resort.source.status,'sample');
    assert.equal(getComparisons(resort,resorts).length,5);
  }
});
