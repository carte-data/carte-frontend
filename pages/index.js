import Head from 'next/head';
import Layout from '../components/layout/Layout.jsx';
import { buildStructure } from '../lib/get-paths';
import { buildSearchIndexFromStructure } from '../lib/search';

const SectionHeader = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);
const SectionText = ({ children }) => <p className="mb-6 block">{children}</p>;

export default function Home({ searchIndex, structure }) {
  return (
    <Layout>
      <h1 className="text-4xl font-semibold mb-2 grad-underline inline-block">Hello,</h1>
      <p className="mb-8">
        choose what type of data you'd like to understand in the top right (or
        search at the top).
      </p>
      <SectionHeader>Datasets</SectionHeader>
      <SectionText>
        View your databases and datasets within them. See their location,
        description, and columns.
      </SectionText>
      <SectionHeader>Admin</SectionHeader>
      <SectionText>Edit your dataset and column descriptions.</SectionText>
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
