'use client';
import { StoryblokCMS as CMS } from '@/utils/cms';
import { debounce } from '@/utils/general';
import { useState } from 'react';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = debounce(async (searchInput) => {
    console.log('input: ', searchInput);
    const newSearchResults = await CMS.searchForProducts(searchInput);
    if (newSearchResults) {
      setSearchResults(newSearchResults);
    } else {
      setSearchResults([]);
    }
  }, 500);

  const handleSearchInput = (e) => {
    const newInputValue = e.target.value;
    setSearchInput(newInputValue);

    if (newInputValue.length > 2) {
      debouncedSearch(newInputValue);
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

      {searchResults.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
              onClick={() => alert(`You selected: ${result.name}`)}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
