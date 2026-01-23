import React from 'react';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-full bg-gray-100 rounded-lg md:rounded-xl relative group hover:bg-gray-200 transition-colors">
      <input
        type="text"
        placeholder="Search for products, brands and more..."
        className="
          w-full 
          h-12 
          md:h-14
          bg-transparent
          pl-4
          pr-12
          text-sm 
          md:text-base
          focus:outline-none
          placeholder-gray-500
        "
      />

      <Button
        className="
          !absolute 
          top-1/2 
          right-2 
          -translate-y-1/2
          !min-w-[40px]
          !w-10
          !h-10
          md:!w-12
          md:!h-12
          !rounded-full
          !bg-red-500
          hover:!bg-red-600
        "
        aria-label="search"
      >
        <IoSearch className="text-white text-lg md:text-xl" />
      </Button>
    </div>
  );
};

export default Search;