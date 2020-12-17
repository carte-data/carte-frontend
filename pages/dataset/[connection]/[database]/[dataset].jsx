import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';

import { useRouter } from 'next/router';
import { getPaths } from '../../../../lib/get-paths';

const DATASET_SOURCE_DIR = '/data/datasets';

const DatasetPage = (props) => {
  const router = useRouter();
  const { connection, database, dataset } = router.query;
  const { metadata, content } = props;

  return (
    <div className="table">
      <div>
        Connection: <code>{connection}</code>
        Table conn: <code>{metadata.connection}</code>
      </div>
      <div>
        Database: <code>{database}</code>
      </div>
      <div>
        Dataset: <code>{dataset}</code>
      </div>
      <div>
        Type: <code>{metadata.table_type}</code>
      </div>
    </div>
  );
};

export default DatasetPage;

export async function getStaticPaths() {
  const datasets = await getPaths(DATASET_SOURCE_DIR);
  const paths = datasets.map((datasetPath) =>
    path.join('/dataset', datasetPath)
  );

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { connection, database, dataset } = context.params;
  const datasetsDirectory = path.join(
    process.cwd(),
    DATASET_SOURCE_DIR,
    connection,
    database,
    dataset + '.md'
  );

  const filePath = path.join(datasetsDirectory);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { attributes: metadata, body: content } = frontmatter(fileContents);

  return {
    props: { metadata, content },
  };
}
