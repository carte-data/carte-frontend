import Link from 'next/link';

const DatasetRow = ({ name, url }) => {
  return <span className="block text-lg"><Link href={url}>{name}</Link></span>;
};

const DatabaseDetails = ({ connection, database, structure }) => {
  const datasets = structure[connection].databases[database].datasets;
  return (
    <div>
      <span className="bold">Database: </span>
      <code>{database}</code>
      <div>
        {datasets.map((dataset) => (<DatasetRow name={dataset.name} url={dataset.url}/>))}
      </div>
      {}
    </div>
  );
};

export default DatabaseDetails;
