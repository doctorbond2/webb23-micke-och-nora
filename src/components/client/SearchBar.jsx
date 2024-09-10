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
      if (newSearchResults) {
        setSearchResults(newSearchResults);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (isLoading) {
        setIsLoading(false);
      }
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

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchInput}
        value={searchInput}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      {searchResults.length > 0 ? (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
          {searchResults.map((result, index) => (
            <SearchBarResult key={index} result={result} />
          ))}
        </div>
      ) : (
        searchInput.length > 2 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
            <div className="px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100 flex items-center justify-between">
              {isLoading ? <h2>Looking</h2> : <h2>No results found</h2>}
            </div>
          </div>
        )
      )}
    </div>
  );
}
