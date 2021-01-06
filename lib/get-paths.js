const path = require('path');
const glob = require('glob');
const fs = require('fs');
const matter = require('gray-matter');
const { getIndex, addDocument } = require('./search.js');
const { partsToDatasetId } = require('./id.js');

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
        type: 'connection',
        items: {},
      };
    }
    if (!acc[conn].items[db]) {
      acc[conn].items[db] = {
        id: partsToDatasetId([conn, db]),
        name: db,
        url: getPathForDataset([conn, db]),
        type: 'database',
        items: [],
      };
    }

    const datasetPath = getPathForDataset([conn, db, dataset]);

    acc[conn].items[db].items = {
      ...acc[conn].items[db].items,
      [dataset]: {
        id: partsToDatasetId([conn, db, dataset]),
        name: dataset,
        url: datasetPath,
        type: 'dataset',
        filePath: path,
      },
    };

    return acc;
  }, {});
}

export function getDatasetContent(conn, db, dataset) {
  const filePath = path.join(
    process.cwd(),
    process.env.DATASET_SOURCE_DIR,
    conn,
    db,
    dataset + '.md'
  );

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: metadata, content } = matter(fileContents);

  return [metadata, content];
}

export function getPathForDataset(segments) {
  return path.join.apply(this, ['/dataset', ...segments]);
}

export function getPathsFromStructure(structure) {
  const paths = [];
  for (const conn of Object.values(structure)) {
    paths.push(conn.url);
    for (const db of Object.values(conn.items)) {
      paths.push(db.url);
      for (const dataset of Object.values(db.items)) {
        paths.push(dataset.url);
      }
    }
  }

  return paths;
}
