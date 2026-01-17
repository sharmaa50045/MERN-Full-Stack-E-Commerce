import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import Search from '../Search';

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t border-gray-500 border-b">
        <div className="container">
          <div className="flex items-center justify-between">

            <div className="col1 w-[50%]">
              <p className="text-[12px] font-medium">
                Get up to 50% off new season styles, limited time
              </p>

            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex item-center gap-3">
                <li className="list-none">
                  <Link to="/help-center" className='text-[13px] link font-medium transition'>
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/help-center" className='text-[13px] link font-medium transition'>
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>



      <div className='header py-3'>
        <div className='container flex items-center justify-between'>
          <div className='col1 w-[25%]'>
            <Link to="/">
              <img src={logo} alt="logo" className='p-2.5' />
            </Link>
          </div>

          <div className='col2 w-[45%]'>
            <Search />


          </div>
          <div className='col3 w-[30%]'>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
