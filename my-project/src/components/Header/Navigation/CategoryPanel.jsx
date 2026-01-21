import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const CategoryPanel = (props) => {

  const [submenuOpen, setSubmenuOpen] = React.useState(null);
  const [innerSubmenuOpen, setInnerSubmenuOpen] = React.useState(null);

  const toggleDrawer = (open) => () => {
    props.setIsOpenCatPanel(open);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
    setInnerSubmenuOpen(null); // reset inner menu
  };

  const toggleInnerSubmenu = (index) => {
    setInnerSubmenuOpen(innerSubmenuOpen === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 280 }}>

      <h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'>
        Shop By Categories
        <MdClose
          onClick={toggleDrawer(false)}
          className='cursor-pointer text-[22px]'
        />
      </h3>

      <ul className='w-full'>

        {/* ================= Fashion ================= */}
        <li className='relative'>
          <Button className='w-full !justify-start !text-black'>
            Fashion
          </Button>

          {submenuOpen === 0 ? (
            <FaRegMinusSquare
              className='absolute top-[12px] right-[15px] cursor-pointer'
              onClick={() => toggleSubmenu(0)}
            />
          ) : (
            <FaPlusSquare
              className='absolute top-[12px] right-[15px] cursor-pointer'
              onClick={() => toggleSubmenu(0)}
            />
          )}

          {submenuOpen === 0 && (
            <ul className='pl-4'>

              <li className='relative'>
                <Button className='w-full !justify-start'>
                  Apparel
                </Button>

                {innerSubmenuOpen === 0 ? (
                  <FaRegMinusSquare
                    className='absolute top-[12px] right-[15px] cursor-pointer'
                    onClick={() => toggleInnerSubmenu(0)}
                  />
                ) : (
                  <FaPlusSquare
                    className='absolute top-[12px] right-[15px] cursor-pointer'
                    onClick={() => toggleInnerSubmenu(0)}
                  />
                )}

                {innerSubmenuOpen === 0 && (
                  <ul className='pl-4'>
                    <li><Button className='w-full !justify-start'>Smart Tablet</Button></li>
                    <li><Button className='w-full !justify-start'>Crepe T-shirt</Button></li>
                    <li><Button className='w-full !justify-start'>Leather Watch</Button></li>
                    <li><Button className='w-full !justify-start'>Rolling Diamond</Button></li>
                  </ul>
                )}
              </li>

            </ul>
          )}
        </li>

        {/* ================= Electronics ================= */}
        <li className='relative mt-2'>
          <Button className='w-full !justify-start !text-black'>
            Electronics
          </Button>

          {submenuOpen === 1 ? (
            <FaRegMinusSquare
              className='absolute top-[12px] right-[15px] cursor-pointer'
              onClick={() => toggleSubmenu(1)}
            />
          ) : (
            <FaPlusSquare
              className='absolute top-[12px] right-[15px] cursor-pointer'
              onClick={() => toggleSubmenu(1)}
            />
          )}

          {submenuOpen === 1 && (
            <ul className='pl-4'>
              <li><Button className='w-full !justify-start'>Mobiles</Button></li>
              <li><Button className='w-full !justify-start'>Laptops</Button></li>
              <li><Button className='w-full !justify-start'>Accessories</Button></li>
            </ul>
          )}
        </li>

      </ul>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
