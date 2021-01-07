import Head from 'next/head'
import Layout from '../components/layout/Layout.jsx'
import {
  buildStructure,
} from '../lib/get-paths';
import { buildSearchIndexFromStructure } from '../lib/search';


export default function Home({ searchIndex, structure }) {
  return (
    <Layout></Layout>
  )
}

export async function getStaticProps(context) {
  const structure = await buildStructure();
  const searchIndex = JSON.stringify(
    buildSearchIndexFromStructure(structure)
  );

  return {
    props: { structure, searchIndex }
  }
}
