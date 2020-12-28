import Layout from '../../components/layout/layout.jsx';
import { buildStructure } from '../../lib/get-paths.js';

const DatasetsIndex = ({ structure }) => {
  return (
    <Layout sidebarStructure={structure}>
      <h1>Datasets (index)</h1>
    </Layout>
  );
};

export default DatasetsIndex;

export async function getStaticProps() {
  const datasetsStructure = buildStructure();

  return {
    props: { structure: datasetsStructure },
  };
}
