import { useState } from "react"
import { Filter, ChevronRight, Heart, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import img from "../image/shopby.svg"
import { RiFilterOffFill } from "react-icons/ri"

export default function ProductListing() {
  const [minPrice, setMinPrice] = useState("0.00")
  const [maxPrice, setMaxPrice] = useState("12000.00")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortOrder, setSortOrder] = useState("highToLow") // Options: highToLow, lowToHigh
  const [showFilters, setShowFilters] = useState(false) // State to toggle filter sidebar

  // Categories for the filter sidebar
  const categories = [
    { id: "single-seats", label: "Single Seats Swings" },
    { id: "acrylic", label: "Acrylic Swings" },
    { id: "outdoor", label: "Outdoor Swings" },
    { id: "macrame", label: "Macrame Swings" },
    { id: "ss", label: "SS Swings" },
    { id: "wooden", label: "Wooden Swings" },
    { id: "designer", label: "Designer Swings" }
  ]

  // Product data
  const products = [
    {
      id: 1,
      title: "Wooden Swings",
      category: "wooden",
      description:
        "Introducing our latest innovation - a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 10000.0,
      originalPrice: 12000.0,
      image: img
    },
    {
      id: 2,
      title: "Acrylic Swings",
      category: "acrylic",
      description: "Stylish and durable acrylic swings for your outdoor space.",
      price: 8000.0,
      originalPrice: 10000.0,
      image: img
    },
    {
      id: 3,
      title: "Outdoor Swings",
      category: "outdoor",
      description: "Perfect outdoor swings to enjoy your garden or patio.",
      price: 6000.0,
      originalPrice: 7500.0,
      image: img
    },
    {
      id: 4,
      title: "Macrame Swings",
      category: "macrame",
      description: "Beautiful macrame swings that add elegance to your space.",
      price: 5000.0,
      originalPrice: 6500.0,
      image: img
    },
    {
      id: 5,
      title: "Single Seats Swings",
      category: "single-seats",
      description: "Comfortable single-seat swings for relaxation.",
      price: 7000.0,
      originalPrice: 8500.0,
      image: img
    },
    {
      id: 6,
      title: "Designer Swings",
      category: "designer",
      description: "Premium designer swings for a luxurious touch.",
      price: 12000.0,
      originalPrice: 15000.0,
      image: img
    },{
        id: 7,
        title: "Outdoor Swings",
        category: "outdoor",
        description: "Perfect outdoor swings to enjoy your garden or patio.",
        price: 6000.0,
        originalPrice: 7500.0,
        image: img
      },
      {
        id: 8,
        title: "Macrame Swings",
        category: "macrame",
        description: "Beautiful macrame swings that add elegance to your space.",
        price: 5000.0,
        originalPrice: 6500.0,
        image: img
      },
      {
        id: 9,
        title: "Single Seats Swings",
        category: "single-seats",
        description: "Comfortable single-seat swings for relaxation.",
        price: 7000.0,
        originalPrice: 8500.0,
        image: img
      },
      {
        id: 10,
        title: "Designer Swings",
        category: "designer",
        description: "Premium designer swings for a luxurious touch.",
        price: 12000.0,
        originalPrice: 15000.0,
        image: img
      },
      {
        id: 11,
        title: "Designer Swings",
        category: "designer",
        description: "Premium designer swings for a luxurious touch.",
        price: 12000.0,
        originalPrice: 15000.0,
        image: img
      },    {
        id: 12,
        title: "Designer Swings",
        category: "designer",
        description: "Premium designer swings for a luxurious touch.",
        price: 12000.0,
        originalPrice: 15000.0,
        image: img
      }

  ]

  // Filtered products based on selected categories and price range
  const filteredProducts = products
    .filter(product => {
      const isCategoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
      const isPriceMatch =
        product.price >= Number.parseFloat(minPrice) &&
        product.price <= Number.parseFloat(maxPrice)
      return isCategoryMatch && isPriceMatch
    })
    .sort((a, b) => {
      if (sortOrder === "highToLow") {
        return b.price - a.price
      } else if (sortOrder === "lowToHigh") {
        return a.price - b.price
      }
      return b.price - a.price // Default to highToLow if no match
    })

  // Handle category selection
  const handleCategoryChange = categoryId => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  // Toggle filter sidebar
  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white pb-40">
          {/* Header */}
          <div className="py-8 text-center">
            <h1 className="text-3xl font-serif">All Product</h1>
            <div className="text-sm text-gray-600 mt-1">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              / All Product
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex justify-between items-center mb-6">
            {/* Filter button */}
            <button
              className={`flex items-center gap-2 ${
                showFilters
                  ? "bg-[#2c3a1a] text-white"
                  : "bg-white text-black border border-gray-300"
              } px-4 py-2 rounded-md transition-colors duration-200`}
              onClick={toggleFilters}
            >
              {showFilters ? (
                <RiFilterOffFill size={18} />
              ) : (
                <Filter size={18} />
              )}
              <span>Filter</span>
            </button>

            {/* Sort dropdown */}
            <div className="relative inline-block">
              <button
                className="border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center gap-1"
                onClick={() => {
                  const newOrder =
                    sortOrder === "highToLow" ? "lowToHigh" : "highToLow"
                  setSortOrder(newOrder)
                }}
              >
                <span>
                  Sort By:{" "}
                  {sortOrder === "highToLow" ? "High to Low" : "Low to High"}
                </span>
                <ChevronRight size={16} className="transform rotate-[90deg]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar filters - conditionally rendered based on showFilters state */}
            {showFilters && (
              <div className="md:w-64 flex-shrink-0">
                <div className="border border-gray-200 rounded-md p-4 mb-4 bg-white">
                  <h3
                    style={{ fontFamily: "La Mango" }}
                    className="text-xl mb-3"
                  >
                    Shop by Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => handleCategoryChange(category.id)}
                          className="h-4 w-4 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={category.id}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <h3
                    style={{ fontFamily: "La Mango" }}
                    className=" text-xl mb-3 mt-10"
                  >
                    Shop by Price
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <div className="w-1/2">
                      <label
                        htmlFor="min-price"
                        className="block text-xs text-gray-500 mb-1"
                      >
                        Min Price
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                          ₹
                        </span>
                        <input
                          type="text"
                          id="min-price"
                          value={minPrice}
                          onChange={e => setMinPrice(e.target.value)}
                          className="pl-6 w-full border border-gray-300 rounded-md py-1 text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="max-price"
                        className="block text-xs text-gray-500 mb-1"
                      >
                        Max Price
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                          ₹
                        </span>
                        <input
                          type="text"
                          id="max-price"
                          value={maxPrice}
                          onChange={e => setMaxPrice(e.target.value)}
                          className="pl-6 w-full border border-gray-300 rounded-md py-1 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => console.log("Filters applied")}
                    className="w-full bg-[#2c3a1a] text-white py-2 rounded-md text-sm cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {/* Main content */}
            <Link to="/Singleproduct"><div className="flex-1">
              {/* Product grid - dynamically change grid columns based on filter visibility */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-2 ${
                  showFilters ? "lg:grid-cols-3" : "lg:grid-cols-4"
                } gap-3 sm:gap-6`}
              >
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="relative group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                  >
                    {/* Hover overlay background */}
                    <div className="absolute inset-0 bg-lime-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]"></div>

                    <div className="relative z-[2] p-2">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full object-cover"
                      />

                      {/* Action buttons - appear on hover */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                        <Link to="/Cart"><button className="bg-[#2a2a14] text-white p-2 rounded-full cursor-pointer">
                          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        </Link>
                        <Link to="/Wishlist">
                        <button className="bg-[#2a2a14] text-white p-2 rounded-full cursor-pointer">
                          <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        </Link>
                      </div>
                    </div>

                    <div className="p-4 z-[3] relative">
                      <h3 className="font-medium text-lg group-hover:text-white">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2 group-hover:text-white">
                        {product.description}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="font-medium text-base sm:text-lg group-hover:text-white">
                          ₹{product.price.toFixed(2)}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 line-through group-hover:text-white">
                          ₹{product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No products message */}
              {filteredProducts.length === 0 && (
                <p className="text-center font-medium">No products match your filters.</p>
              )}
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />

      {/* Add this CSS for hiding scrollbar but allowing scroll functionality */}
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
