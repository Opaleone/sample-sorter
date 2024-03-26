import fs from 'fs';
import path from 'path';

fs.mkdir(path.join('./', 'samples'), e => {
  if (e) return console.error(e);
  else console.log('Directory successfully created.');
})