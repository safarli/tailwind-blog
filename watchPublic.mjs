import chokidar from 'chokidar';
import fs from 'fs';
import fse from 'fs-extra';

chokidar.watch('./public').on('all', (event, path) => {
  fse.copySync('./public/', './dist/');
  console.log(`Change detected: ${event} ${path}`);
});
