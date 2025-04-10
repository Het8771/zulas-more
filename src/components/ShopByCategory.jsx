import React from "react";
import product from "../image/product.png"; // Replace with your image path
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <div className="bg-white container mx-auto px-4 mt-4 ">
      <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <h2  style={{fontFamily:"La Mango"}} className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Shop by Category
      </h2>
    
      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* Image Cards */}
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="relative group rounded-4xl overflow-hidden shadow-md  transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={product}
              alt={`Swing ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Green Overlay Section */}
            {/* <div className="absolute inset-0 bg-[##262B0D] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-xl font-bold">Wooden Swings</h3>
            <p className="text-sm mt-2 text-center">
              "Introducing our latest innovation – a perfect blend of technology
              and design."
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              View Product →
            </a>
          </div> */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#262B0D] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-bold">Wooden Swings</h3>
              <p className="text-sm mt-2 text-center">
                "Introducing our latest innovation – a perfect blend of technology and design."
              </p>
              <Link
                to="/Shopby"
                className="mt-4 inline-block text-sm font-medium underline"
              >
                View Product →
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
