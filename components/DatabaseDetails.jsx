import { useContext } from 'react';
import Link from 'next/link';
import Breadcrumbs from './common/Breadcrumbs.jsx';
import { StructureContext } from '../lib/contexts';
import TableIcon from './icons/Table.jsx';

const DatasetRow = ({ name, url }) => {
  return (
    <span className="block hover:text-blue-400 mb-2">
      <Link href={url}>
        <a>
          <span className="h-3 inline-block mr-1">
            <TableIcon className="h-4" />
          </span>
          {name}
        </a>
      </Link>
    </span>
  );
};

const DatabaseDetails = ({ connection, database }) => {
  const structure = useContext(StructureContext);
  const datasets = structure[connection].items[database].items;
  const breadcrumbsParts = [
    { name: connection },
    { name: database, url: structure[connection].items[database].url },
  ];
  return (
    <div>
      <Breadcrumbs parts={breadcrumbsParts} />
      <h1 className="text-2xl font-medium text-gray-800">{database}</h1>
      <h2 className="mb-6 text-gray-400">Database</h2>
      <h2 className="text-gray-700 mt-8 mb-2 text-xl font-medium">Tables:</h2>
      <div>
        {Object.values(datasets).map((dataset) => (
          <DatasetRow name={dataset.name} url={dataset.url} />
        ))}
      </div>
      {}
    </div>
  );
};

export default DatabaseDetails;
