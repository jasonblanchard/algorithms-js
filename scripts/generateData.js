import fs from 'fs';
import times from 'lodash.times';

const file = process.argv[2];
const amount = process.argv[3];

fs.unlink(file, () => {});

fs.appendFileSync(file, '[');

times(amount, (i) => {
  const num = Math.floor((Math.random() * 9) + 1);
  if (i === amount - 1) {
    fs.appendFileSync(file, num);
    return;
  }
  fs.appendFileSync(file, `${num}, `);
});

fs.appendFileSync(file, ']');
