import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const flagExpandedItem = (structure, slug) => {
  if (slug.length >= 2) {
    const [currentConnection, currentDatabase ] = slug;
    structure[currentConnection].items[currentDatabase].expanded = true;
  }
  return structure;
}

const DatasetPage = ({ pageType, metadata, content, structure }) => {
  const router = useRouter();
  const { slug } = router.query;
  const expandedStructure = flagExpandedItem(structure, slug);

  if (slug.length === 2) {
    const [currentConnection, currentDatabase] = slug;
    return (
      <Layout sidebarStructure={structure}>
        <DatabaseDetails
          structure={expandedStructure}
          connection={currentConnection}
          database={currentDatabase}
        />
      </Layout>
    );
  } else if (slug.length === 3) {
    return (
      <Layout sidebarStructure={expandedStructure}>
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
  const { data: metadata, content } = matter(fileContents);


  return {
    props: { metadata, content: content.trim(), structure: datasetsStructure },
  };
}
