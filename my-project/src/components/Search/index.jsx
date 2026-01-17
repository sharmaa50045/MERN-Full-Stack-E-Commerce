import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-full h-12.5 bg-[#e2e8ee] rounded-[5px] relative p-2'>
      <input type="text" placeholder='Search for products...' className='w-full h-8.75 focus:outline-none  bg-inherit p-2 text-[15px]' />
      <Button className='absolute top-[5px] right-[5px] z-50'><IoSearch /></Button>
    </div>
  )
}

export default Search;