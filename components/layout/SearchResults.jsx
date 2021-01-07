import Link from 'next/link';
import { useContext } from 'react';
import { StructureContext } from '../../lib/contexts';
import { datasetIdToParts, structureLookupByParts } from '../../lib/id';

const ResultEntry = ({ id, parts, item }) => {
  const partSeparator = (
    <span className="text-gray-400 font-light text-sm"> / </span>
  );
  return (
    <div key={id}>
      <Link href={item.url} passHref>
        <a className="hover:text-blue-400 block py-2">
          {parts.reduce((acc, part) => [acc, partSeparator, part])}
        </a>
      </Link>
    </div>
  );
};

const SearchResults = ({ results }) => {
  const structure = useContext(StructureContext);

  const resultsDisplay = results ? (
    results.map((result) => {
      const parts = datasetIdToParts(result.ref);
      return (
        <ResultEntry
          id={result.ref}
          parts={parts}
          item={structureLookupByParts(parts, structure)}
        />
      );
    })
  ) : (
    <span className="text-gray-400">No results</span>
  );
  return (
    <div className="absolute top-20 w-full p-6 bg-gray-200 z-1 shadow-xl">
      {resultsDisplay}
    </div>
  );
};

export default SearchResults;
