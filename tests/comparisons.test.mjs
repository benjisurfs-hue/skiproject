import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { normalize, getComparisons, metricValue, comparisonMetrics, sortOptions, sortResorts, formatTerrainParks } from '../lib/comparisons.ts';
import { filterResorts, passFilters } from '../lib/filters.ts';
import { resorts } from '../data/resorts.ts';

const byId = id => resorts.find(resort => resort.id === id);

test('16 unique stable Vermont IDs, 48 real JPEG files, and complete five-metric values', () => {
  assert.equal(resorts.length,16);
  assert.equal(new Set(resorts.map(r=>r.id)).size,16);
  for (const resort of resorts) {
    assert.equal(resort.id,resort.slug);
    assert.equal(resort.state,'Vermont');
    assert.equal(resort.media.length,3);
    resort.media.forEach((media,index)=>{
      assert.equal(media.src,`/resorts/${resort.slug}/0${index+1}.jpeg`);
      assert(media.alt.length>10);
      const path=new URL(`../public${media.src}`,import.meta.url);
      assert(statSync(path).size>1000);
      assert.equal(readFileSync(path).subarray(0,2).toString('hex'),'ffd8');
      assert.equal(media.role,'resort');
    });
    for(const metric of comparisonMetrics) assert(Number.isFinite(metricValue(resort,metric.key)));
  }
});

test('MAKE.md overrides and all rating/seasonal park assignments remain exact',()=>{
  const expected=[
    ['burke-mountain',5,4,'3'],['middlebury-snow-bowl',5,5,'0'],['saskadena-six',5,4,'1'],['bolton-valley',4,4,'3'],
    ['magic-mountain',4,3,'1'],['mad-river-glen',4,3,'0'],['pico-mountain',4,3,'1'],['bromley-mountain',3,3,'1'],
    ['jay-peak',3,2,'3'],['smugglers-notch',3,3,'2'],['killington',2,1,'5–7'],['stowe',2,1,'3'],
    ['sugarbush',2,1,'3'],['mount-snow',1,2,'10'],['okemo',1,2,'5'],['stratton',1,1,'5']
  ];
  for(const [id,access,afford,parks] of expected){const r=byId(id);assert.equal(r.liftAccess.score,access);assert.equal(r.affordability.score,afford);assert.equal(formatTerrainParks(r.terrainParks),parks);assert.equal(r.terrainParks.status,'seasonal');}
  assert.equal(byId('smugglers-notch').annualSnowfallIn,322);
  assert.equal(byId('smugglers-notch').skiableAcres,1000);
  assert.equal(byId('smugglers-notch').trailCount,78);
  assert.equal(byId('saskadena-six').annualSnowfallIn,110);
  assert.equal(byId('saskadena-six').skiableAcres,100);
  assert.equal(byId('okemo').annualSnowfallIn,120);
  assert.deepEqual(byId('burke-mountain').terrain,{beginner:11,intermediate:47,advanced:42});
  assert.deepEqual(byId('smugglers-notch').terrain,{beginner:19,intermediate:50,advanced:31});
});

test('terrain percentages total 100 with expert details preserved and parks excluded',()=>{
  for(const r of resorts){assert(Math.abs(Object.values(r.terrain).reduce((a,b)=>a+b,0)-100)<1e-8);assert.equal(Object.keys(r.terrain).length,3);}
  assert.equal(byId('burke-mountain').terrainDetailed.expert,9);
  assert.equal(byId('smugglers-notch').terrainDetailed.expert,6);
});

test('all five metrics are monotonic: larger raw values always produce more fill',()=>{
  for(const metric of comparisonMetrics){
    const sorted=[...resorts].sort((a,b)=>metricValue(a,metric.key)-metricValue(b,metric.key));
    for(let i=1;i<sorted.length;i++){
      const prev=getComparisons(sorted[i-1],resorts).find(m=>m.key===metric.key).score;
      const next=getComparisons(sorted[i],resorts).find(m=>m.key===metric.key).score;
      assert(next>=prev);
      if(metricValue(sorted[i],metric.key)>metricValue(sorted[i-1],metric.key))assert(next>prev);
    }
  }
  for(const r of resorts){const m=getComparisons(r,resorts);assert.equal(m[3].score,r.liftAccess.score*20);assert.equal(m[4].score,r.affordability.score*20);assert(m[4].value.includes(`${r.affordability.score}/5`));assert.equal(m[4].detail,r.affordability.priceBand);}
});

test('normalization handles missing, tied and out-of-bounds values; seasonal totals are independent',()=>{
  assert.equal(normalize(10,[10,10]),50);
  for(const bad of [null,NaN,Infinity,-1])assert.equal(normalize(bad,[0,10]),null);
  assert.equal(normalize(10,[]),null);assert.equal(normalize(40,[10,20]),100);assert.equal(normalize(0,[10,20]),0);
  const r=byId('jay-peak');
  assert.deepEqual(getComparisons({...r,season:{...r.season,snowTotalIn:9999}},resorts),getComparisons(r,resorts));
  assert.equal(getComparisons({...r,annualSnowfallIn:null},resorts)[0].score,null);
});

test('seven sorts, stable ties, missing-last, immutable dataset and fixed cohort scores',()=>{
  const before=JSON.stringify(resorts);
  const expected=['jay-peak','jay-peak','jay-peak','killington','killington','burke-mountain','middlebury-snow-bowl'];
  sortOptions.forEach((option,index)=>{
    const sorted=sortResorts(resorts,option.key);
    assert.equal(sorted[0].id,expected[index]);
    const value=r=>['openingOrder','snowTotalIn'].includes(option.key)?r.season[option.key]:metricValue(r,option.key);
    const values=sorted.map(value);let missing=false;
    values.forEach((v,i)=>{if(v===null){missing=true;return;}assert(!missing);if(i&&values[i-1]!==null)assert(option.key==='openingOrder'?v>=values[i-1]:v<=values[i-1]);});
    assert.deepEqual(getComparisons(resorts[0],sorted),getComparisons(resorts[0],resorts));
  });
  assert.equal(JSON.stringify(resorts),before);
  const tied=[{...resorts[0],id:'a'},{...resorts[0],id:'b'}];assert.deepEqual(sortResorts(tied,'annualSnowfallIn').map(r=>r.id),['a','b']);
});

test('pass filters use unions, no-pass is explicit, states intersect, and empty selections are empty',()=>{
  const all=passFilters.map(p=>p.key);
  assert.equal(filterResorts(resorts,all,['Vermont']).length,16);
  assert.equal(filterResorts(resorts,[],['Vermont']).length,0);
  assert.equal(filterResorts(resorts,all,[]).length,0);
  assert.equal(filterResorts(resorts,all,['New York']).length,0);
  assert.deepEqual(filterResorts(resorts,['none'],['Vermont']).map(r=>r.id),['mad-river-glen','bromley-mountain']);
  assert.equal(filterResorts(resorts,['Ikon'],['Vermont']).length,4);
  assert.equal(filterResorts(resorts,['Epic'],['Vermont']).length,3);
  assert.equal(filterResorts(resorts,['Indy'],['Vermont']).length,7);
  const union=filterResorts(resorts,['Ikon','Epic'],['Vermont']);assert.equal(union.length,7);assert.equal(new Set(union.map(r=>r.id)).size,7);
  assert.equal(filterResorts([{...resorts[0],passes:['Ikon','Indy']}],['Ikon','Indy'],['Vermont']).length,1);
});

test('all sixteen resorts have complete editorial and existing local highlight icons',()=>{
  for(const r of resorts){
    assert.equal(typeof r.description,'string');assert(r.description.trim().length>0);
    assert.equal(r.highlights.length,3);assert.equal(r.pros.length,4);assert.equal(r.cons.length,3);
    for(const h of r.highlights){assert(h.text.trim());assert(h.iconSrc.startsWith('/figma/'));assert(statSync(new URL(`../public${h.iconSrc}`,import.meta.url)).size>0);}
    for(const item of [...r.pros,...r.cons])assert(item.trim());
  }
});
