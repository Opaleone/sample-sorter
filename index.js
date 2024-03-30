import fs from 'fs';
import path from 'path';
import getDirectories from './utils/getDirectories.js';
import utils from './config.js';

let testRegex = /([a-zA-Z-_\d])+(hat|hihat|HH)([a-zA-Z-_\d])+/gi;

// fs.mkdir(path.join('./', 'samples'), e => {
//   if (e) return console.error(e);
//   else console.log('Directory successfully created.');
// })

const folders = await getDirectories(utils.folderPath);


for (let i = 0; i < 1; i++) {
  let currentDir = folders[i].path;
  currentDir += `\\${folders[i].name}`

  const dir = fs.readdirSync(currentDir, e => {
    console.log(e)
  })

  console.log(dir);
}