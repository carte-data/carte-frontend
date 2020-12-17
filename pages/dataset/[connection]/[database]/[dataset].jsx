import { useRouter } from 'next/router';
import { getPaths } from '../../../../lib/get-paths';

const DatasetPage = () => {
    const router = useRouter()
    const {
        connection,
        database,
        dataset
    } = router.query

    return (
        <div className="table">
            <div>Connection: <code>{connection}</code></div>
            <div>Database: <code>{database}</code></div>
            <div>Dataset: <code>{dataset}</code></div>
        </div>
    )
};

export default DatasetPage

export async function getStaticPaths() {
  const datasets = getPaths('./data/datasets')
  const paths = datasets.map((datasetPath) => `/dataset/${datasetPath}`)

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const {
    connection,
    database,
    dataset
  } = context.params;



  return {
    props: {}
  }
}
