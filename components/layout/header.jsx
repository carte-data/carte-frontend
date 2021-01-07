import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import SearchBox from './SearchBox.jsx';
import { useRouter } from 'next/router';
import SearchResults from './SearchResults.jsx';
import { SearchContext } from '../../lib/contexts';

const LINKS = [
  { text: 'Home', url: '/', isActive: (pathname) => pathname == '/' },
  {
    text: 'Datasets',
    url: '/dataset',
    isActive: (pathname) => pathname.startsWith('/dataset'),
  },
];

const performSearch = (text, index) => {
  if (text[text.length - 1] === '*') {
    return index.search(text);
  }
  return index.search(text + '*');
};

const NavLink = ({ text, url, active }) => {
  return (
    <Link href={url}>
      <a
        className={
          'text-gray-800 hover:text-blue-400 transition-colors mx-3 py-2 rounded-md font-medium duration-75' +
          (active ? ' grad-underline' : '')
        }
      >
        {text}
      </a>
    </Link>
  );
};

const Header = () => {
  const router = useRouter();
  const searchIndex = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState([]);
  const [resultsOpen, setResultsOpen] = useState(false);

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setSearchResults([]);
      setResultsOpen(false);
    } else {
      const resultsArr = performSearch(searchText, searchIndex);
      console.log('RESULTS: ', searchIndex);
      setSearchResults(resultsArr);
      setResultsOpen(true);
    }
  };

  const clearSearch = () => {
    setResultsOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => clearSearch();
    router.events.on('routeChangeStart', handleRouteChange);

    return () => router.events.off('routeChangeStart', handleRouteChange);
  });

  return (
    <header className="h-20 mx-auto px-12 sm:px-6 lg:px-32 flex flex-row">
      <nav className="flex flex-row w-full">
        <div className="logo flex-none align-self-center w-80 flex items-center">
          <Link href="/">
            <a className="">
              <img
                src="/img/ligature.svg"
                className="w-auto h-12"
                alt="Carte logo"
              />
            </a>
          </Link>
        </div>
        <nav className="py-6 relative flex items-center flex-row justify-end flex-grow border-b border-gray-300">
          <SearchBox
            className="flex-grow"
            onSearch={handleSearch}
            onFocus={() => setResultsOpen(true)}
          />
          {LINKS.map((link) => (
            <NavLink
              text={link.text}
              url={link.url}
              key={link.text}
              active={link.isActive(router.pathname)}
            />
          ))}
          <NavLink text="Admin" url="/admin/index.html" active={false} />
          {resultsOpen ? <SearchResults results={searchResults} /> : ''}
        </nav>
      </nav>
    </header>
  );
};

export default Header;
