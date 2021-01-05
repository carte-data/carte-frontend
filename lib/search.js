const lunr = require('lunr');
const { getDatasetContent } = require('./get-paths.js');

const fields = [
  'title',
  'connection',
  'location',
  'database',
  'table_type',
  'description',
];

const index = lunr(function () {
  this.ref('url');
  for (const field of fields) {
    this.field(field);
  }
});

export function buildSearchIndexFromStructure(structure) {
  const index = lunr(function () {
    this.ref('url');
    for (const field of fields) {
      this.field(field);
    }

    for (const connection of Object.values(structure)) {
      for (const database of Object.values(connection.items)) {
        for (const dataset of database.items) {
          const [metadata, content] = getDatasetContent(
            connection.name,
            database.name,
            dataset.name
          );
          this.add({
            ...metadata,
            description: content,
          });
        }
      }
    }
  });

  return index;
}
