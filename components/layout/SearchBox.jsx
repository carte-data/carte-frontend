import React, { useState, useRef, useEffect } from 'react';
import Mousetrap from 'mousetrap';
import SearchIcon from '../icons/Search.jsx';

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
      <SearchIcon onClick={focusSearch} />
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
