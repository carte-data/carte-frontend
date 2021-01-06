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

lunr.tokenizer.separator = /[\s\-\_\/\.\(\)\[\]+]/;

const index = lunr(function () {
  this.ref('id');
  for (const field of fields) {
    this.field(field);
  }
});

export function refToPath(ref) {
  const parts = ref.split('_');
}

export function buildSearchIndexFromStructure(structure) {
  const index = lunr(function () {
    this.ref('id');
    for (const field of fields) {
      this.field(field);
    }

    for (const connection of Object.values(structure)) {
      for (const database of Object.values(connection.items)) {
        this.add({
          id: database.id,
          title: database.name,
          connection: connection.name,
          database: database.name
        });
        for (const dataset of Object.values(database.items)) {
          const [metadata, content] = getDatasetContent(
            connection.name,
            database.name,
            dataset.name
          );
          this.add({
            ...metadata,
            description: content,
            id: dataset.id
          });
        }
      }
    }
  });

  return index;
}
