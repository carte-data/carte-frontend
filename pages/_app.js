import lunr from 'lunr';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { StructureContext } from '../lib/structure-context';
import { SearchContext } from '../lib/search-context';


const flagExpandedItem = (structure, slug) => {
  if (slug && slug.length >= 2) {
    structure[slug[0]].items[slug[1]].expanded = true;
  }
  return structure;
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { slug } = router.query;
  const { structure, searchIndex } = pageProps;
  const expandedStructure = flagExpandedItem(structure, slug);
  return (
    <StructureContext.Provider value={structure}>
      <SearchContext.Provider value={lunr.Index.load(JSON.parse(searchIndex))}>
        <Component {...pageProps} />
      </SearchContext.Provider>
    </StructureContext.Provider>
  );
}

export default MyApp;
