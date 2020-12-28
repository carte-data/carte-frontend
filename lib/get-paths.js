const path = require('path');
const glob = require('glob');

const EXTENSION = '.md';

export function getPaths() {
  const dir = process.env.DATASET_SOURCE_DIR;
  const globEnd = `/**/*${EXTENSION}`;
  const workingDirectory = process.cwd();
  const files = glob.sync(path.join(workingDirectory, dir, globEnd));

  return files.map((filePath) =>
    filePath.slice(workingDirectory.length + dir.length, -EXTENSION.length)
  );
}

export function parseSlug(pathParts) {
  const conn = pathParts.length >= 1 ? pathParts[0] : null;
  const db = pathParts.length >= 2 ? pathParts[1] : null;
  const dataset = pathParts.length >= 3 ? pathParts[2] : null;
  return [conn, db, dataset];
}

export function buildStructure() {
  const paths = getPaths();
  return paths.reduce((acc, path) => {
    const [conn, db, dataset] = parseSlug(path.split('/').slice(1));
    if (!acc[conn]) {
      acc[conn] = {
        name: conn,
        url: getPathForDataset([conn]),
        databases: {},
      };
    }
    if (!acc[conn].databases[db]) {
      acc[conn].databases[db] = {
        name: db,
        url: getPathForDataset([conn, db]),
        datasets: [],
      };
    }

    acc[conn].databases[db].datasets = [
      ...acc[conn].databases[db].datasets,
      { name: dataset, url: getPathForDataset([conn, db, dataset]) },
    ];
    return acc;
  }, {});
}

export function getPathForDataset(segments) {
  return path.join.apply(this, ['/dataset', ...segments]);
}

export function getPathsFromStructure(structure) {
  const paths = [];
  for (const conn of Object.values(structure)) {
    paths.push(conn.url);
    for (const db of Object.values(conn.databases)) {
      paths.push(db.url);
      for (const dataset of Object.values(db.datasets)) {
        paths.push(dataset.url);
      }
    }
  }

  return paths;
}
