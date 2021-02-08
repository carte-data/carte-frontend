import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import SearchBox from './SearchBox.jsx';
import { useRouter } from 'next/router';
import SearchResults from './SearchResults.jsx';
import { SearchContext } from '../../lib/contexts';
import MenuIcon from '../icons/Menu.jsx';

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

const NavLink = ({ text, url, active, block, className }) => {
  return (
    <div className={className + ' ' + (block ? 'block' : 'inline')}>
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
    </div>
  );
};

const Header = ({ horizontalClassName, sidebarClassName }) => {
  const router = useRouter();
  const searchIndex = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState([]);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setSearchResults([]);
      setResultsOpen(false);
    } else {
      const resultsArr = performSearch(searchText, searchIndex);
      setSearchResults(resultsArr);
      setResultsOpen(true);
    }
  };

  const clearSearch = () => {
    setResultsOpen(false);
  };

  const toggleMobileNav = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      const headerElement = document.getElementById('header');
      const isClickInside = headerElement.contains(e.target);

      if (!isClickInside) {
        clearSearch();
      }
    };
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });

  useEffect(() => {
    const handleRouteChange = () => clearSearch();
    router.events.on('routeChangeStart', handleRouteChange);

    return () => router.events.off('routeChangeStart', handleRouteChange);
  });

  const navLinks = (isBlock, className) =>
    LINKS.map((link) => (
      <NavLink
        text={link.text}
        url={link.url}
        key={link.text}
        active={link.isActive(router.pathname)}
        block={isBlock}
        className={className}
      />
    ));

  return (
    <>
      <header
        className={'h-20 flex flex-row ' + horizontalClassName}
        id="header"
      >
        <div
          className={
            'logo align-self-center flex items-center mr-8 ' + sidebarClassName
          }
        >
          <Link href="/">
            <a className="">
              <img
                src="/img/ligature.svg"
                className="w-auto h-6"
                alt="Carte logo"
              />
            </a>
          </Link>
        </div>
        <nav className="relative flex items-center flex-row justify-end flex-grow border-b border-gray-300">
          <SearchBox
            className="flex-grow"
            onSearch={handleSearch}
            onFocus={() =>
              searchResults && searchResults.length > 0 && setResultsOpen(true)
            }
          />
          <div className="nav-links hidden md:inline-block">
            {navLinks(false)}
            <NavLink text="Admin" url="/admin/index.html" active={false} />
          </div>
          <div className="md:hidden mobile-nav-trigger" onClick={toggleMobileNav}>
            <button><MenuIcon className="h-4"/></button>
          </div>
          {resultsOpen ? <SearchResults results={searchResults} /> : ''}
        </nav>
      </header>
      <div
        className={
          'mobile-nav w-full md:hidden bg-gray-100 pb-4' +
          (hamburgerOpen ? '' : ' hidden')
        }
      >
        {navLinks(true, 'pt-4 w-full px-4')}
      </div>
    </>
  );
};

export default Header;
