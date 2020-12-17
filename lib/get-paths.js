const path = require('path');
const { readdir } = require('fs').promises;
const glob = require('glob');

const EXTENSION = '.md';

export async function getPaths(dir) {
  const globEnd = `/**/*${EXTENSION}`;
  const workingDirectory = process.cwd();
  const files = glob.sync(path.join(workingDirectory, dir, globEnd));

  return files.map((filePath) => filePath.slice(workingDirectory.length + dir.length, -3));
}
