import { useContext } from 'react';
import { StructureContext } from '../lib/contexts';
import Panel from './common/Panel.jsx';
import Breadcrumbs from './common/Breadcrumbs.jsx';

const NO_DESCRIPTION_TEXT = 'No description';

const Column = ({ name, type, description }) => {
  const descriptionElement = description && description !== '' ? (
    <span className="text-gray-600 block">{description}</span>
  ) : (
    <span className="text-gray-300 text-sm">{NO_DESCRIPTION_TEXT}</span>
  );
  return (
    <div className="column pb-2" key={name}>
      <span className="font-medium">{name}</span>
      <span className="px-1 ml-4 rounded border-gray-300 inline-block border text-xs font-mono">
        {type}
      </span>
      <div>{descriptionElement}</div>
    </div>
  );
};

const Attribute = ({ label, value }) => {
  return (
    <h2 className="text-gray-500 mt-1">
      <span className="font-medium">{label}: </span>
      <span className="font-mono text-sm">{value}</span>
    </h2>
  );
};

const DatasetDetails = ({ metadata, content }) => {
  const structure = useContext(StructureContext);
  const breadcrumbsParts = [
    { name: metadata.connection },
    { name: metadata.database, url: structure[metadata.connection].items[metadata.database].url },
    { name: metadata.title, url: structure[metadata.connection].items[metadata.database].items[metadata.title].url },
  ];

  const descriptionElement =
    content && content !== '' ? (
      <p className="text-gray-600">{content}</p>
    ) : (
      <p className="text-gray-300 text-sm">{NO_DESCRIPTION_TEXT}</p>
    );

  return (
    <div>
      <Breadcrumbs parts={breadcrumbsParts}/>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        {metadata.title}
      </h1>
      <Attribute label="Database" value={metadata.database} />
      <Attribute label="Location" value={metadata.location} />
      <Attribute label="Type" value={metadata.table_type}/>
      <h2 className="text-md text-gray-700 mt-8 mb-2 text-xl font-medium">
        Description:
      </h2>
      <Panel>{descriptionElement}</Panel>
      <h2 className="text-md text-gray-700 mt-8 mb-2 text-xl font-medium">
        Columns:
      </h2>
      <Panel>
        {metadata.columns.map((column) => (
          <Column
            key={column.name}
            name={column.name}
            type={column.type}
            description={column.description}
          />
        ))}
      </Panel>
    </div>
  );
};

export default DatasetDetails;
