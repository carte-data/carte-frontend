import React, { useState, useRef, useEffect } from 'react';
import Mousetrap from 'mousetrap';

const SearchBox = ({ className }) => {
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  const focusSearch = () => {
    searchInputRef.current.focus();
  };

  useEffect(() => {
    Mousetrap.bind(['command+k', 'ctrl+k'], () => {
      focusSearch();
      return false;
    });

    return function cleanup() {
      Mousetrap.unbind(['command+k', 'ctrl+k']);
    };
  });

  const updateText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form className={className + ' flex flex-row h-full'}>
      <svg
        className="w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={focusSearch}
        cursor="pointer"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        value={searchText}
        placeholder="Search for anything (&#8984;+K)"
        className="focus:border-l-2 focus:border-blue-800 text-gray-700 h-full flex-grow px-4 focus:outline-none bg-cream"
        ref={searchInputRef}
        onChange={updateText}
      />
    </form>
  );
};

export default SearchBox;
