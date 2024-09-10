'use client';
import { StoryblokCMS as CMS } from '@/utils/cms';
import { debounce } from '@/utils/general';
import { useState } from 'react';
export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const debouncedSearch = debounce(async (searchInput) => {
    console.log('input: ', searchInput);
    const searchResults = await CMS.searchForProducts(searchInput);
  }, 500);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}
