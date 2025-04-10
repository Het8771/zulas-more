"use client"

import { ChevronRight, Heart, ShoppingCart } from "lucide-react"
import img from "../image/shopby.svg"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react"

export default function Shopby() {
  const categories = [
    "Single Seats Swings",
    "Acrylic Swings",
    "Outdoor Swings",
    "Macrame Swings",
    "SS Swings",
    "Wooden Swings"
  ]

  const allProducts = [
    {
      title: "Single Seats Swing",
      category: "Single Seats Swings",
      description:
        "Introducing our latest innovation - a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 15000.0,
      originalPrice: 17000.0,
      image: img
    },
    {
      title: "Acrylic Swing",
      category: "Acrylic Swings",
      description:
        "Crafted with precision and elegance, our acrylic swing is perfect for your modern home our acrylic swing is perfect for your modern home.",
      price: 12000.0,
      originalPrice: 14000.0,
      image: img
    },
    {
      title: "Outdoor Swing",
      category: "Outdoor Swings",
      description:
        "Crafted with precision and elegance, our acrylic swing is perfect for your modern home our acrylic swing is perfect for your modern home.",
      price: 18000.0,
      originalPrice: 20000.0,
      image: img
    },
    {
      title: "Macrame Swing",
      category: "Macrame Swings",
      description:
        "Crafted with precision and elegance, our acrylic swing is perfect for your modern home our acrylic swing is perfect for your modern home.",
      price: 8000.0,
      originalPrice: 10000.0,
      image: img
    },
    {
      title: "SS Swing",
      category: "SS Swings",
      description:
        "Crafted with precision and elegance, our acrylic swing is perfect for your modern home our acrylic swing is perfect for your modern home.",
      price: 20000.0,
      originalPrice: 22000.0,
      image: img
    },
    {
      title: "Wooden Swing",
      category: "Wooden Swings",
      description:
        "Crafted with precision and elegance, our acrylic swing is perfect for your modern home our acrylic swing is perfect for your modern home.",
      price: 10000.0,
      originalPrice: 12000.0,
      image: img
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState(
    "Single Seats Swings"
  )
  const [sortOrder, setSortOrder] = useState("lowToHigh")

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "Single Seats Swings"
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory)

  // Sort products based on sort order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price
    if (sortOrder === "highToLow") return b.price - a.price
    return 0
  })

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen p-3 sm:p-4 md:p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontFamily: "La Mango" }}
            className="text-center text-2xl sm:text-3xl font-serif mb-3 sm:mb-4"
          >
            Shop by Categories
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center text-xs sm:text-sm mb-4 sm:mb-8">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span>Shop by categories</span>
          </div>

          {/* Category filters - scrollable on mobile, original layout on desktop */}
          <div className="overflow-x-auto hide-scrollbar sm:overflow-visible sm:flex sm:flex-wrap sm:justify-start mb-4 sm:mb-6">
            <div className="flex space-x-2 min-w-max pb-2 sm:pb-0 sm:flex-wrap sm:gap-2 sm:space-x-0 sm:w-full">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-md border whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-lime-950 text-white"
                      : "bg-white text-black border-lime-950"
                  } ${index > 0 ? "sm:ml-2" : ""}`}
                >
                  {category}
                </button>
              ))}

              {/* Sort dropdown - positioned on the right on desktop, below categories on mobile */}
              <div className="hidden sm:block sm:ml-auto">
                <button
                  onClick={() =>
                    setSortOrder(
                      sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh"
                    )
                  }
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-md border bg-white text-black flex items-center gap-1"
                >
                  Sort By:{" "}
                  {sortOrder === "lowToHigh" ? "High to Low" : "Low to High"}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile-only sort button */}
          <div className="sm:hidden mb-4">
            <button
              onClick={() =>
                setSortOrder(
                  sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh"
                )
              }
              className="w-full px-3 py-1.5 text-xs rounded-md border bg-white text-black flex items-center justify-between"
            >
              <span>
                Sort By:{" "}
                {sortOrder === "lowToHigh" ? "High to Low" : "Low to High"}
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Product grid - keeping original layout */}
          <Link to="/Singleproduct">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {sortedProducts.map((product, index) => (
                <div
                  key={index}
                  className="relative group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Product card hover background */}
                  <div className="absolute inset-0 bg-lime-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]"></div>

                  {/* Product image */}
                  <div className="relative z-[2] p-2">
                    <img
                      src={product.image || ""}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-32 sm:h-64 object-cover"
                    />

                    {/* Action buttons - appear on hover on desktop, always visible on mobile */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                      <button className="bg-[#2a2a14] text-white p-2 rounded-full">
                        <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                      <button className="bg-[#2a2a14] text-white p-2 rounded-full">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Product details */}
                  <div className="p-3 sm:p-4 z-[3] relative">
                    <h3 className="font-medium text-sm sm:text-lg group-hover:text-white truncate">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-2 sm:mb-3 group-hover:text-white line-clamp-1 sm:line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base group-hover:text-white">
                        ₹{product.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through text-xs sm:text-sm group-hover:text-white">
                        ₹{product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
      <Footer />

      {/* CSS for hiding scrollbar but allowing scroll functionality */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
