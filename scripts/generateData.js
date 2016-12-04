import fs from 'fs';
import times from 'lodash.times';

const file = process.argv[2];
const amount = process.argv[3];

fs.unlink(file, () => {});

const output = [];

times(amount, (i) => {
  /* eslint-disable */
  const num = Math.floor((Math.random() * 9) + 1);
  console.log(`Writing ${num} to ${i}`);
  output.push(num);
});

fs.appendFileSync(file, JSON.stringify(output));
