import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css";

const Navigation = () => {

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);

  return (
    <>
      <nav className="py-2 border-b">
        <div className="container flex items-center justify-between">

          <div className="w-[20%]">
            <Button
              className="!text-black gap-2 w-full font-bold !justify-start font-[500]"
              onClick={() => setIsOpenCatPanel(true)}
            >
              <RiMenu5Line className="text-[18px] font-[500]" />
              Shop By Categories
              <MdOutlineKeyboardArrowDown className="text-[28px] ml-auto font-[500] " />
            </Button>
          </div>

          <div className="w-[60%]">
            <ul className="flex items-center gap-6 m-5 ">
              <li>
                <Link to="/" className="link text-[17px] font-[500]">
                  Home
                </Link>
              </li>


              <li
                className="relative"
                onMouseEnter={() => setFashionOpen(true)}
                onMouseLeave={() => setFashionOpen(false)}
              >
                <span className="cursor-pointer text-[17px] font-[500] hover:text-[#ff5252]">
                  Fashion
                </span>

                {fashionOpen && (
                  <div className="absolute top-[100%] left-0 min-w-[220px] bg-white shadow-lg z-50">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Men</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Women</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kids</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accessories</li>
                    </ul>
                  </div>
                )}
              </li>

              <li><Link to="/" className="link text-[17px] font-[500]">Bags</Link></li>
              <li><Link to="/" className="link text-[17px] font-[500]">Footwear</Link></li>
              <li><Link to="/" className="link text-[17px] font-[500]">Groceries</Link></li>
              <li><Link to="/" className="link text-[17px] font-[500]">Beauty</Link></li>
              <li><Link to="/" className="link text-[17px] font-[500]">Wellness</Link></li>
              <li><Link to="/" className="link text-[17px] font-[500]">Jewellery</Link></li>

            </ul>
          </div>


          <div className="w-[20%] text-right">
            <p className="text-[14px] font-[500] flex items-center justify-end gap-2">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>

        </div>
      </nav>

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
