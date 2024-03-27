import fs from 'fs';
import path from 'path';

let variableRegex = /[a-zA-Z-_\d]{0,256}snare[a-zA-Z-_\d]{0,256}/g;

fs.mkdir(path.join('./', 'samples'), e => {
  if (e) return console.error(e);
  else console.log('Directory successfully created.');
})