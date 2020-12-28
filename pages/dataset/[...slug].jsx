import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';

import { useRouter } from 'next/router';
import {
  buildStructure,
  getPathsFromStructure,
  parseSlug,
} from '../../lib/get-paths';
import Layout from '../../components/layout/layout.jsx';
import DatasetDetails from '../../components/dataset-details.jsx';
import DatabaseDetails from '../../components/database-details.jsx';

const PAGE_TYPES = {
  DB: 'database',
  DATASET: 'dataset',
};

const DatasetPage = ({ pageType, metadata, content, structure }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug.length === 2) {
    const [currentConnection, currentDb] = slug;
    return (
      <Layout sidebarStructure={structure}>
        <DatabaseDetails
          structure={structure}
          connection={currentConnection}
          database={currentDb}
        />
      </Layout>
    );
  } else if (slug.length === 3) {
    const [currentConnection, currentDb, currentDataset] = slug;
    return (
      <Layout sidebarStructure={structure}>
        <DatasetDetails metadata={metadata} content={content} />
      </Layout>
    );
  }

  return (
    <Layout sidebarStructure={structure}>
      <div className="table">{slug.length}</div>;
    </Layout>
  );
};

export default DatasetPage;

export async function getStaticPaths() {
  const datasetsStructure = await buildStructure();
  const paths = getPathsFromStructure(datasetsStructure);
  console.log('PATHS: ', paths);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const datasetsStructure = await buildStructure();
  const { slug } = context.params;
  const [conn, db, dataset] = parseSlug(slug);
  if (!dataset) {
    return { props: { structure: datasetsStructure } };
  }
  const filePath = path.join(
    process.cwd(),
    process.env.DATASET_SOURCE_DIR,
    conn,
    db,
    dataset + '.md'
  );

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { attributes: metadata, body: content } = frontmatter(fileContents);

  return {
    props: { metadata, content, structure: datasetsStructure },
  };
}
