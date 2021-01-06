const SEPARATOR = '__'

export function datasetIdToParts(id) {
  const parts = id.split(SEPARATOR);

  return parts;
}

export function partsToDatasetId(parts) {
  return parts.join(SEPARATOR);
}

export function structureLookupByParts(parts, structure) {
  if (parts.length == 1) {
    return structure[parts[0]]
  }
  return structureLookupByParts(parts.slice(1), structure[parts[0]].items);
}
