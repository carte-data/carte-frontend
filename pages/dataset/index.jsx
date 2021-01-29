import { useContext } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import Panel from '../../components/common/Panel.jsx';
import { buildStructure } from '../../lib/get-paths.js';
import { buildSearchIndexFromStructure } from '../../lib/search';
import { StructureContext } from '../../lib/contexts';

const StatCounter = ({ num, children, className }) => (
  <p className={className + ' text-gray-500'}>
    <span className="text-2xl font-semibold">{num}</span> {children}
  </p>
);

const Separator = () => (
  <div className="h-16 border-l border-gray-300 ml-2"></div>
);

const DatasetsIndex = ({ numConnections, numDatabases, numDatasets }) => {
  const structure = useContext(StructureContext);
  return (
    <Layout title="Datasets">
      <h1 className="text-3xl font-semibold mb-2 grad-underline inline-block">Datasets</h1>
      <p>
        Choose a database in the sidebar or search for a dataset or database.
      </p>
      <div className="mt-8">
        <StatCounter num={numConnections}>connections</StatCounter>
        <Separator />
        <StatCounter num={numDatabases}>databases</StatCounter>
        <Separator />
        <StatCounter num={numDatasets}>datasets</StatCounter>
      </div>
    </Layout>
  );
};

export default DatasetsIndex;

export async function getStaticProps() {
  const structure = buildStructure();
  const searchIndex = JSON.stringify(buildSearchIndexFromStructure(structure));

  const numConnections = Object.keys(structure).length;
  let numDatabases = 0;
  let numDatasets = 0;

  for (const connection of Object.values(structure)) {
    numDatabases += Object.keys(connection.items).length;
    for (const database of Object.values(connection.items)) {
      numDatasets += Object.keys(database.items).length;
    }
  }

  return {
    props: {
      structure,
      searchIndex,
      numConnections,
      numDatabases,
      numDatasets,
    },
  };
}
