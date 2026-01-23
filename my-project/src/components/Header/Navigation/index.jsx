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


  const categories = [
    'Fashion', 'Bags', 'Footwear', 'Groceries', 'Beauty', 'Wellness', 'Jewellery'
  ];

  return (
    <>
      <nav className="py-2 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">

            <div className="w-full lg:w-[20%]">
              <Button
                className="!text-gray-800 gap-2 w-full font-medium !justify-start !normal-case hover:bg-gray-50"
                onClick={() => setIsOpenCatPanel(true)}
                startIcon={<RiMenu5Line className="text-xl" />}
                endIcon={<MdOutlineKeyboardArrowDown className="text-2xl" />}
              >
                <span className="font-semibold">Shop By Categories</span>
              </Button>
            </div>


            <div className="w-full lg:w-[60%]">
              <ul className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 py-2">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-red-500 text-sm lg:text-base font-medium transition-colors">
                    Home
                  </Link>
                </li>

                <li
                  className="relative group"

                >
                  <button className="text-gray-700 hover:text-red-500 text-sm lg:text-base font-medium transition-colors flex items-center gap-1">
                    Fashion
                    <MdOutlineKeyboardArrowDown className="text-lg" />
                  </button>


                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="py-2">
                      {['Men', 'Women', 'Kids', 'Accessories'].map((item, index) => (
                        <li key={index}>
                          <Link
                            to={`/category/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>


                {categories.slice(1).map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/category/${category.toLowerCase()}`}
                      className="text-gray-700 hover:text-red-500 text-sm lg:text-base font-medium transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="w-full lg:w-[20%] text-center lg:text-right">
              <p className="text-xs lg:text-sm font-medium text-gray-600 flex items-center justify-center lg:justify-end gap-2">
                <GoRocket className="text-lg text-red-500" />
                <span className="font-semibold">Free International Delivery</span>
              </p>
            </div>
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