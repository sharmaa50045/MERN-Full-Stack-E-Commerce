import React from 'react';
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const ProductItem = () => {
  return (
    <div className="ProductItem group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">


      <div className="imgWrapper w-full rounded-md relative overflow-hidden">
        <Link to="/">
          <div className="img h-[220px] relative overflow-hidden">
           
            <img
              src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
              alt="Product"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />

        
            <img
              src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
              alt="Product Hover"
              className="w-full h-full object-cover object-top absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Link>

        <span className="absolute top-[10px] left-[10px] z-50 bg-red-500 text-white rounded-lg px-2 py-1 text-[12px] font-medium">
          10%
        </span>

       
        <div className="absolute top-[15px] right-[15px] z-50 flex flex-col gap-3 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !bg-white hover:!bg-red-500 group">
            <MdOutlineZoomOutMap className="text-[18px] !text-black group-hover:text-white transition" />
          </Button>

          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !bg-white hover:!bg-red-500 group">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white transition" />
          </Button>

          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !bg-white hover:!bg-red-500 group">
            <IoIosGitCompare className="text-[18px] !text-black group-hover:text-white transition" />
          </Button>

        </div>
      </div>

      <div className="info p-4 bg-white">
        <h6 className="text-[13px] text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Soylent Green
          </Link>
        </h6>

        <h3 className="text-[14px] mt-2 font-medium text-black mb-2">
          <Link to="/" className="hover:text-[#fb2c36] transition">
            Siril Georgette Pink Color Saree with Blouse Piece
          </Link>
        </h3>

        <Rating defaultValue={4} size="small" readOnly />

        <div className="mt-2 flex items-center gap-2">
          <span className="text-[16px] font-bold text-black">₹1,499</span>
          <span className="text-[12px] text-gray-500 line-through">₹2,499</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
