import Layout from '../components/layout/Layout.jsx';
import { buildStructure } from '../lib/get-paths';
import { buildSearchIndexFromStructure } from '../lib/search';

export default function NotFound({}) {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-2 inline-block">Not found :(</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const structure = await buildStructure();
  const searchIndex = JSON.stringify(buildSearchIndexFromStructure(structure));

  return {
    props: { structure, searchIndex },
  };
}
