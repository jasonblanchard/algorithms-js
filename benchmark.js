import fs from 'fs';

/* eslint-disable import/no-dynamic-require */
const sort = require(process.argv[2]).default;
const dataFile = process.argv[3];


const n = JSON.parse(fs.readFileSync(dataFile));

/* eslint-disable */
console.log(`\n\nSorting ${n.length} items...`);

const t1 = process.hrtime();
sort(n);
const diff = process.hrtime(t1);

/* eslint-disable */
console.log(`Took ${diff[0]} seconds\n\n`);
