import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"

const Navigation = () => {

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  }

  return (
    <>
      <nav className='py-2'>
        <div className='container flex items-center justify-end'>
          <div className='col-1 w-[20%]'>
            <Button className="!text-black gap-2 w-full font-bold" onClick={openCategoryPanel}>< RiMenu5Line className='text-[18px] font-bold' /> Shop By Categories <MdOutlineKeyboardArrowDown className='text-[30px] ml-auto font-bold' /></Button>

          </div>
          <div className='col-2 w-[65%]'>
            <ul className='flex items-center gap-5'>
              <li className='list-none ml-20'>
                <Link to="/" className="link transition text-[17px] font-[500] gap-10">
                  Home
                </Link>
              </li>
              <li className='list-none relative'>
                <Link to="/" className="link transition text-[17px] font-[500]">Fashion</Link>
              </li>

              <div className='submenu absolute top-[100%] left-[0%] min-w-[300px] bg-white shadow-md'>
                <ul>
                  <li className='list-none'>
                    <button>Men</button>
                  </li>
                </ul>


              </div>




              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Bags</Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Footwear</Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Groceries</Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Beauty</Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Wellness</Link>
              </li>
              <li className='list-none'>
                <Link to="/" className="link transition text-[17px] font-[500]">Jewellery</Link>
              </li>
            </ul>

          </div>
          <div className='col-3 w-[20%]'>
            <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
              <GoRocket className='text-[18px]' />
              Free Internation Delivery</p>
          </div>


        </div>
      </nav>

      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
    </>
  )
}

export default Navigation;
