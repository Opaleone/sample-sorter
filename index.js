import fs from 'fs';
import path from 'path';
import getDirectories from './utils/getDirectories.js';
import utils from './config.js';

let testRegex = /[a-zA-Z-_\d]{0,256}(hat|hihat|HH)[a-zA-Z-_\d]{0,256}/gi;

fs.mkdir(path.join('./', 'samples'), e => {
  if (e) return console.error(e);
  else console.log('Directory successfully created.');
})

const folders = await getDirectories(utils.folderPath);

console.log(folders);