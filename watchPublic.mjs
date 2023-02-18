import chokidar from 'chokidar';
import fs from 'fs';

chokidar.watch('./public').on('all', (event, path) => {
  fs.cpSync('./public/', './dist/', { recursive: true });
  console.log(`Change detected: ${event} ${path}`);
});
