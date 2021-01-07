import path from 'path';

import { useRouter } from 'next/router';
import {
  getPathsFromStructure,
  parseSlug,
  getDatasetContent,
  buildStructure,
} from '../../lib/get-paths';
import lunr from 'lunr';
import { buildSearchIndexFromStructure } from '../../lib/search';
import Layout from '../../components/layout/Layout.jsx';
import DatasetDetails from '../../components/DatasetDetails.jsx';
import DatabaseDetails from '../../components/DatabaseDetails.jsx';

const PAGE_TYPES = {
  DB: 'database',
  DATASET: 'dataset',
};


const DatasetPage = ({
  pageType,
  metadata,
  content,
  structure,
  searchIndex,
}) => {
  const router = useRouter();
  const { slug } = router.query;
  const deserialisedIndex = lunr.Index.load(JSON.parse(searchIndex));

  if (slug.length === 2) {
    const [currentConnection, currentDatabase] = slug;
    return (
      <Layout>
        <DatabaseDetails
          connection={currentConnection}
          database={currentDatabase}
        />
      </Layout>
    );
  } else if (slug.length === 3) {
    return (
      <Layout>
        <DatasetDetails metadata={metadata} content={content} />
      </Layout>
    );
  }

  return (
    <Layout>
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
  const searchIndex = JSON.stringify(
    buildSearchIndexFromStructure(datasetsStructure)
  );

  const { slug } = context.params;
  const [conn, db, dataset] = parseSlug(slug);
  if (!dataset) {
    return { props: { structure: datasetsStructure, searchIndex } };
  }

  const [metadata, content] = getDatasetContent(conn, db, dataset);

  return {
    props: {
      metadata,
      content: content.trim(),
      structure: datasetsStructure,
      searchIndex,
    },
  };
}
