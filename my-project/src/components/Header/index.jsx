import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Search from '../Search';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: '10px',
  },
}));

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>

      <div className="top-strip hidden lg:block py-2 border-t border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs md:text-sm font-medium text-gray-600 text-center md:text-left">
              🎉 Get up to 50% off new season styles, limited time only!
            </p>
            <ul className="flex gap-4">
              <li>
                <Link to="/help-center" className="text-xs md:text-sm text-gray-600 hover:text-red-500 font-medium transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-xs md:text-sm text-gray-600 hover:text-red-500 font-medium transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">


            <div className="w-full md:w-[25%] flex justify-center md:justify-start order-1">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="ClassySharma Mega Store"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>


            <div className="hidden md:block md:w-[45%] order-3 md:order-2">
              <Search />
            </div>


            <div className="w-full md:w-[30%] flex justify-center md:justify-end order-2 md:order-3">
              <div className="flex items-center gap-3 md:gap-4">

                <div className="hidden sm:block">
                  <Link to="/login" className='text-gray-700 hover:text-red-500 text-sm font-medium transition-colors'>
                    Login
                  </Link>
                  <span className='text-gray-300 mx-2'>|</span>
                  <Link to="/register" className='text-gray-700 hover:text-red-500 text-sm font-medium transition-colors'>
                    Register
                  </Link>
                </div>


                <div className="flex items-center gap-2 md:gap-3">
                  <Tooltip title="Compare">
                    <IconButton aria-label="compare" size="small">
                      <StyledBadge badgeContent={4} color="secondary">
                        <BiGitCompare className="text-lg md:text-xl" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Wishlist">
                    <IconButton aria-label="wishlist" size="small">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart className="text-lg md:text-xl" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Cart">
                    <IconButton aria-label="cart" size="small">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart className="text-lg md:text-xl" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden mt-4 order-4">
            <Search />
          </div>
        </div>
      </div>


      <Navigation />
    </header>
  );
};

export default Header;