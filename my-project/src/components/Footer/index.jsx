import React from "react";
import {
  LiaShippingFastSolid,
} from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { BsWallet2 } from "react-icons/bs";
import { GrGift } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { BsChatRight } from "react-icons/bs";

import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  mt-10">

      <div className="py-10 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">

            <div className="flex flex-col items-center group cursor-pointer">
              <LiaShippingFastSolid className="text-5xl transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1" />
              <h3 className="font-semibold mt-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">
                For all Orders Over $100
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <GiReturnArrow className="text-5xl transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1" />
              <h3 className="font-semibold mt-2">30 Days Returns</h3>
              <p className="text-sm text-gray-600">
                For an Exchange Product
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <BsWallet2 className="text-5xl transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1" />
              <h3 className="font-semibold mt-2">Secured Payment</h3>
              <p className="text-sm text-gray-600">
                Payment Cards Accepted
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <GrGift className="text-5xl transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1" />
              <h3 className="font-semibold mt-2">Special Gifts</h3>
              <p className="text-sm text-gray-600">
                Our First Product Order
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <BiSupport className="text-5xl transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-1" />
              <h3 className="font-semibold mt-2">Support 24/7</h3>
              <p className="text-sm text-gray-600">
                Contact us Anytime
              </p>
            </div>

          </div>

          <hr className="mt-8 border-gray-300" />

        </div>
      </div>


      <div className="container-fluid w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
          <p className="text-gray-600 text-sm">
            Classysharma - Big Mega Store <br />
            507-Union Trade Centre France
          </p>

          <p className="mt-3 text-gray-600 text-sm">
            sales@yourcompany.com
          </p>

          <p className="mt-3 text-xl font-bold text-red-500">
            (+91) 9876-543-210
          </p>

          <div className="flex items-center gap-3 mt-4 text-red-500 font-semibold cursor-pointer">
            <span ><BsChatRight className="text-3xl" /></span>
            <div>
              <p>Online Chat</p>
              <p className="text-gray-500 text-sm">Get Expert Help</p>
            </div>
          </div>
        </div>


        <div>
          <h3 className="text-2xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Prices drop</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">New products</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Best sales</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Contact us</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Sitemap</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Stores</li>
          </ul>
        </div>


        <div>
          <h3 className="text-2xl font-semibold mb-4">Our company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Delivery</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Legal Notice</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">
              Terms and conditions of use
            </li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">About us</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Secure payment</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Login</li>
          </ul>
        </div>


        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Subscribe to newsletter
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our latest newsletter to get news about special discounts.
          </p>

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
          />

          <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            SUBSCRIBE
          </button>

          <div className="flex items-start  gap-2 mt-4 text-sm text-gray-600">
            <input type="checkbox" />
            <span>
              I agree to the terms and conditions and the privacy policy
            </span>
          </div>
        </div>
      </div>


      <div >
        <div className="max-w-7xl mx-auto  mb-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex gap-3">
            <span className="p-2 border rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-2 border rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
              <FaYoutube />
            </span>
            <span className="p-2 border rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
              <FaPinterestP />
            </span>
            <span className="p-2 border rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
              <FaInstagram />
            </span>
          </div>

          <p className="text-sm text-gray-500">
            © 2024 - Ecommerce Template
          </p>

          <div className="flex gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" />
          </div>
        </div>
      </div>

    </footer>

  );
};



export default Footer;
