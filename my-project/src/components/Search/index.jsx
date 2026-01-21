import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div
      className="
        searchBox 
        w-full 
        bg-[#e2e8ee] 
        rounded-md 
        relative 
        px-3 
        py-2
        sm:h-[45px]
        h-[42px]
      "
    >
      <input
        type="text"
        placeholder="Search for products..."
        className="
          w-full 
          h-full
          bg-transparent
          pr-12
          text-[14px]
          sm:text-[15px]
          focus:outline-none
        "
      />

      <Button
        className="
          !absolute 
          top-1/2 
          right-2 
          -translate-y-1/2
          !min-w-[36px]
          !w-[36px]
          !h-[36px]
          !rounded-full
        "
      >
        <IoSearch className="text-black text-[18px] sm:text-[20px]" />
      </Button>
    </div>
  );
};

export default Search;
