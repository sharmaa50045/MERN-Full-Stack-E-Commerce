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
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header>

      <div className="top-strip hidden md:block py-2 border-t border-b border-gray-200">

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium">
              Get up to 50% off new season styles, limited time
            </p>

            <ul className="flex gap-3">
              <li>
                <Link to="/help-center" className="text-[13px] link font-medium transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-[13px] link font-medium transition">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0">

            <div className="w-full md:w-[25%] flex justify-center md:justify-start">
              <Link to="/">
                <img src={logo} alt="logo" className="h-12 object-contain" />
              </Link>
            </div>

            <div className="hidden md:block md:w-[45%]">
              <Search />
            </div>
            <div className="w-full md:w-[30%] flex justify-center md:justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none"> <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> | &nbsp;<Link to="/register" className='link transition text-[15px] font-[500]'>Register</Link> </li>

                <li>
                  <Tooltip title="Compare" placement='top'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <BiGitCompare size={22} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Wishlist" >
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart size={22} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Cart" placement='top'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart size={22} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>

          <div className="block md:hidden mt-3">
            <Search />
          </div>
        </div>
      </div>

      <Navigation />

    </header>
  );
};

export default Header;
