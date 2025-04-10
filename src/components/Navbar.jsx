// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import Menu from "../image/Menu.svg";
// import logo from "../image/logo.png";
// import Cart from "../image/Cart.svg";
// import Wishlist from "../image/wishlist.svg";
// import User from "../image/User.svg";
// import { Link } from "react-router-dom";
// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="relative flex items-center justify-between px-4 py-4 bg-orange-50 border-gray-200">
//       {/* Left - Menu Icon */}
//       <div>
//         <button
//           onClick={toggleMenu}
//           className="p-1 rounded-full"
//           aria-label="Menu"
//         >
//           <img src={Menu} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Menu Icon" />
//         </button>
//       </div>

//       {/* Center - Logo */}
//       <div className="absolute left-1/2 transform -translate-x-1/2">
//         <Link
//           to="/"
//           className="font-serif text-2xl tracking-wider text-[#3a3a3a]"
//         >
//           <img src={logo} alt="Zulas logo" />
//         </Link>
//       </div>

//       {/* Right - Icons */}
//       <div className="flex items-center space-x-4">
//         <Link to="/Cart">
//           <button className="p-1 rounded-full" aria-label="Cart">
//             <img src={Cart} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Cart" />
//           </button>
//         </Link>
//         <Link to="/Wishlist">
//           <button className="p-1 rounded-full" aria-label="Favorites">
//             <img
//               src={Wishlist}
//               className="h-10 w-10 text-gray-700 cursor-pointer"
//               alt="Wishlist"
//             />
//           </button>
//         </Link>
//         <Link to="/Loginpage">
//           <button className="p-1 rounded-full" aria-label="Account">
//             <img src={User} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Account" />
//           </button>
//         </Link>
//       </div>

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-orange-50 w-full h-[150px] shadow-lg z-50 p-4">
//           {/* Search Bar */}
//           <div className="relative flex items-center justify-center mb-4">
//             <div className="relative w-[250px]">
//               <input
//                 type="text"
//                 placeholder="Search Product..."
//                 className="w-full px-4 py-4 pl-10 border text-white bg-lime-950 rounded-full focus:outline-none "
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
//             </div>
//           </div>
//           <div className="border-t border-gray-800"></div>
//           {/* Navigation Links */}
//           <ul className="font-semibold flex space-x-9 items-center justify-center mt-4">
//             <li>
//               <Link to="/" className="text-gray-800 hover:text-lime-950">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/AllProduct"
//                 className="text-gray-800 hover:text-lime-950"
//               >
//                 All Product
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Shopby"
//                 className="text-gray-800 hover:text-lime-950"
//               >
//                 Shop by Categories
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="##"
//                 className="text-gray-800 hover:text-lime-950"
//               >
//                 New Product
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Ourstory"
//                 className="text-gray-800 hover:text-lime-950"
//               >
//                 Our Story
//               </Link>
//             </li>
//             <li>
//               <Link to="/Contact" className="text-gray-800 hover:text-lime-950">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }





// Final Navbar

// import { useState } from "react"
// import { Search } from "lucide-react"
// import { Link } from "react-router-dom";
// import Menu from "../image/Menu.svg";
// import logo from "../image/logo.png";
// import Cart from "../image/Cart.svg";
// import Wishlist from "../image/wishlist.svg";
// import User from "../image/User.svg";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen)
//   }

//   return (
//     <div className="bg-orange-50">
//     <nav className="max-w-7xl mx-auto  sm:px-6 lg:px-8   relative flex items-center justify-between px-4 py-4  ">
//       {/* Left - Menu Icon */}
//       <div>
//         <button
//           onClick={toggleMenu}
//           className="p-1 rounded-full"
//           aria-label="Menu"
//         >
//         <img src={Menu} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Menu Icon" />

//         </button>
//       </div>

//       {/* Center - Logo */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[120px] sm:max-w-[150px]">
//         <Link
//           to="/"
//           className="font-serif text-2xl tracking-wider text-[#3a3a3a] block"
//         >
//           <img
//             src={logo}
//             alt="Zulas logo"
//             className="h-auto w-auto"
//           />
//         </Link>
//       </div>

//       {/* Right - Icons */}
//       <div className="flex items-center space-x-2 sm:space-x-4">
//         <Link to="/Cart">
//           <button className="p-1 rounded-full" aria-label="Cart">
//             <img src={Cart} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Cart" />

//           </button>
//         </Link>
//         <Link to="/Wishlist">
//           <button className="p-1 rounded-full" aria-label="Favorites">
//            <img src={Wishlist} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Wishlist"/>
//           </button>
//         </Link>
//         <Link to="/Loginpage">
//           <button className="p-1 rounded-full" aria-label="Account">
//           <img src={User} className="h-10 w-10 text-gray-700 cursor-pointer" alt="Account" />
//           </button>
//         </Link>
//       </div>

//       {/* Dropdown Menu - Responsive */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-orange-50 w-full  z-50 p-4">
//           {/* Search Bar */}
//           <div className="relative flex items-center justify-center mb-4">
//             <div className="relative w-full max-w-xs mx-auto">
//               <input
//                 type="text"
//                 placeholder="Search Product..."
//                 className="w-full px-4 py-3 pl-10 border text-white bg-lime-950 rounded-full focus:outline-none"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mb-3"></div>

//           {/* Navigation Links - Responsive */}
//           <ul className="font-semibold flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-0 sm:space-x-4 md:space-x-6 lg:space-x-9 items-start sm:items-center justify-start sm:justify-center">
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/AllProduct"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 All Products
//               </Link>
//             </li>
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/Shopby"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 Shop by Categories
//               </Link>
//             </li>
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/Newproduct"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 New Products
//               </Link>
//             </li>
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/Ourstory"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 Our Story
//               </Link>
//             </li>
//             <li className="w-full sm:w-auto text-center">
//               <Link
//                 to="/Contact"
//                 className="block py-2 text-gray-800 hover:text-lime-950"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import Menu from "../image/Menu.svg"
import logo from "../image/logo.png"
import Cart from "../image/Cart.svg"
import Wishlist from "../image/wishlist.svg"
import User from "../image/User.svg"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="bg-white">
      <nav className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-between px-4 py-4 relative">
        {/* Left - Menu Icon */}
        <div>
          <button
            onClick={toggleMenu}
            className="p-1 rounded-full"
            aria-label="Menu"
          >
            <img
              src={Menu || "/placeholder.svg"}
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700 cursor-pointer"
              alt="Menu Icon"
            />
          </button>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[100px] sm:max-w-[150px]">
          <Link
            to="/"
            className="font-serif text-2xl tracking-wider text-[#3a3a3a] block"
          >
            <img
              src={logo || "/placeholder.svg"}
              alt="Zulas logo"
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex  items-center space-x-3 ">
          {/* Cart */}
          <Link to="/Cart" className=" rounded-full">
            <img
              src={Cart || "/placeholder.svg"}
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700 cursor-pointer"
              alt="Cart"
            />
          </Link>
          {/* Wishlist */}
          <Link to="/Wishlist" className=" rounded-full">
            <img
              src={Wishlist || "/placeholder.svg"}
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700 cursor-pointer"
              alt="Wishlist"
            />
          </Link>
          {/* User Account */}
          <Link to="/Loginpage" className=" rounded-full">
            <img
              src={User || "/placeholder.svg"}
              className="h-6 w-6 sm:h-8 sm:w-8 text-gray-700 cursor-pointer"
              alt="Account"
            />
          </Link>
        </div>

        {/* Dropdown Menu - Responsive */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white w-full z-50 p-4 ">
            {/* Search Bar */}
            <div className="relative flex items-center justify-center mb-4">
              <div className="relative w-full max-w-xs mx-auto">
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="w-full px-4 py-3 pl-10 border text-white bg-lime-950 rounded-full focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
              </div>
            </div>
            <div className="border-t border-black mb-3"></div>

            {/* Navigation Links - Responsive */}
            <ul className="text-center font-semibold flex flex-col space-y-2 sm:space-y-0 sm:flex-row flex-wrap gap-y-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-9 items-center justify-center">
              <li>
                <Link
                  to="/"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AllProduct"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Shopby"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  Shop by Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/Newproduct"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  New Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Ourstory"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 text-gray-800 hover:text-lime-950"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

