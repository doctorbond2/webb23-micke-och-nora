'use client';
import { StoryblokCMS as CMS } from '@/utils/cms';
import { debounce } from '@/utils/general';
import { useState } from 'react';

import SearchBarResult from './SearchBarResult';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = debounce(async (searchInput) => {
    try {
      setIsLoading(true);
      const newSearchResults = await CMS.searchForProducts(searchInput);
      setSearchResults(newSearchResults || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  const handleSearchInput = (e) => {
    const newInputValue = e.target.value;
    setSearchInput(newInputValue);

    if (newInputValue.length > 2) {
      debouncedSearch(newInputValue);
    } else {
      setSearchResults([]);
    }
  };
  const clearSearch = () => {
    setSearchInput('');
    setSearchResults([]);
  };
  return (
    <div className="relative w-[50%]">
      <div
        id="search-input-field"
        className="relative flex items-center w-[40%]"
      >
        <img
          src="/search.svg"
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 peer-focus:hidden"
        />
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearchInput}
          value={searchInput}
          className="w-full px-10 py-2 border border-gray-300 rounded-md border-none focus:border-none focus:ring-2 focus:ring-gray-300 focus:outline-none transition duration-150 ease-in-out"
        />
      </div>
      {searchResults.length > 0 ? (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
          {searchResults.map((result, index) => (
            <SearchBarResult
              key={index}
              result={result}
              clearSearch={clearSearch}
            />
          ))}
        </div>
      ) : (
        searchInput.length > 2 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
            <div className="px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center justify-between">
              {isLoading ? <h2>Looking...</h2> : <h2>No results found</h2>}
            </div>
          </div>
        )
      )}
    </div>
  );
}
