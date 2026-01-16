import React from 'react';
import Link from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 ">
        <div className="flex items-center justify-between">
          <div className="container">
            <p className="text-[14px]">
              Get up to 50% off on selected items
            </p>
          </div>

          <div className='col2 flex items-center justify-end'>
            <ul>
              <li className='list-none'>
                <Link to="/help-center">Help Center</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
