import React from 'react';
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const BlogItem = () => {
  return (
    <div className='blogItem group'>

      <div className='imgWrapper w-full overflow-hidden rounded-md relative'>
        <img
          src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg"
          alt="blog/image"
          className='w-full transition-all duration-300 group-hover:scale-105 group-hover:rotate-1'
        />

        <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-red-500 rounded-md p-1 text-[11px] font-[500] gap-1'>
          <IoMdTime className='text-[16px]' /> 5 APRIL, 2023
        </span>
      </div>

      <div className='info py-4'>
        <h2 className='text-[18px] font-[600] mb-2'>
          <Link className='link' to='/'>   Nullam ullamcorper ornare molestie</Link>
        </h2>

        <p className='text-[14px] text-gray-600 mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellat
          facilis earum obcaecati recusandae atque, quisquam voluptate odio rem officia.
        </p>

        <Link
          to="/"
          className='link  font-[500] hover:text-red-600 flex items-center gap-1'
        >
          Read More <MdArrowForwardIos />
        </Link>
      </div>

    </div>
  );
};

export default BlogItem;
