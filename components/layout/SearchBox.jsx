import React, { useState, useRef, useEffect } from 'react';
import Mousetrap from 'mousetrap';

const SearchBox = ({ className, onSearch, onFocus }) => {
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [timeoutHandler, setTimeoutHandler] = useState(null);

  const focusSearch = () => {
    searchInputRef.current.focus();
  };

  useEffect(() => {
    Mousetrap.bind(['s'], () => {
      focusSearch();
      return false;
    });

    return function cleanup() {
      Mousetrap.unbind(['s']);
    };
  });

  const updateText = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);

    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
      setTimeoutHandler(null);
    }

    setTimeoutHandler(
      setTimeout(() => {
        onSearch(inputValue);
      }, 500)
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
      setTimeoutHandler(null);
    }

    onSearch(searchText);
  };

  return (
    <form className={className + ' flex flex-row h-full'} onSubmit={onSubmit}>
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
        placeholder="Search for anything (s)"
        className="focus:border-l-2 focus:border-blue-800 text-gray-700 h-full flex-grow px-4 focus:outline-none bg-cream"
        ref={searchInputRef}
        onChange={updateText}
        onFocus={onFocus}
      />
    </form>
  );
};

export default SearchBox;
