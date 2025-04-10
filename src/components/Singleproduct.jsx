"use client"

import { useState, useRef } from "react"
import {
  Heart,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  X,
  ShoppingCart
} from "lucide-react"
import img from "../image/img2.svg"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import p1 from "../image/p1.png"
// import Wishlist from "../image/wishlist.svg"

export default function ProductDetail() {
  // Initial reviews data
  const initialReviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      rating: 4,
      comment:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality, and a user-friendly interface. Elevate your experience with our new product. Try it today!",
      image: img || "/placeholder.svg"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      rating: 5,
      comment:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality, and a user-friendly interface. Elevate your experience with our new product. Try it today!",
      image: img || "/placeholder.svg"
    }
  ]
  const allProducts = [
    {
      title: "Wooden Swings",
      category: "Wooden Swings",
      description:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 10000.0,
      originalPrice: 10000.0,
      image: p1
    },
    {
      title: "Wooden Swings",
      category: "Wooden Swings",
      description:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 10000.0,
      originalPrice: 10000.0,
      image: p1
    },
    {
      title: "Wooden Swings",
      category: "Wooden Swings",
      description:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 10000.0,
      originalPrice: 10000.0,
      image: p1
    },
    {
      title: "Wooden Swings",
      category: "Wooden Swings",
      description:
        "Introducing our latest innovation – a perfect blend of technology and design. Experience seamless performance, unmatched quality.",
      price: 10000.0,
      originalPrice: 10000.0,
      image: p1
    }
  ]

  const [openSections, setOpenSections] = useState({
    description: false,
    shipping: false,
    review: true
  })
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [rating, setRating] = useState(4)
  const [feedback, setFeedback] = useState("")
  const [reviews, setReviews] = useState(initialReviews)
  const [reviewCount, setReviewCount] = useState(42)
  const [userName, setUserName] = useState("")
  const [userRole, setUserRole] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null)
  const [isInWishlist, setIsInWishlist] = useState(false)

  const toggleSection = section => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const openReviewModal = () => {
    setShowReviewModal(true)
    // Reset form fields when opening modal
    setRating(4)
    setFeedback("")
    setUserName("")
    setUserRole("")
    setSelectedImage(null)
  }

  const closeReviewModal = () => {
    setShowReviewModal(false)
  }

  const handleImageUpload = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChooseImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmitReview = e => {
    e.preventDefault()

    // Create new review object
    const newReview = {
      id: reviews.length + 1,
      name: userName || "Anonymous User",
      role: userRole || "Customer",
      rating: rating,
      comment: feedback,
      image: selectedImage || img || "/placeholder.svg",
      productImage: img || "/placeholder.svg"
    }

    // Add new review to the reviews array
    setReviews(prevReviews => [newReview, ...prevReviews])

    // Update review count
    setReviewCount(prevCount => prevCount + 1)

    // Close modal
    closeReviewModal()
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="bg max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <h1
            style={{ fontFamily: "La-Mango" }}
            className="text-3xl text-center mb-4"
          >
            Acrylic mold black swing{" "}
          </h1>
          <div className="text-sm mb-6 text-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link to="##">Acrylic Swings</Link>
            <span className="mx-1">/</span>
            <span>Acrylic Mold Black Swing</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="flex flex-col md:flex-row">
              {/* Main Image */}
              <div className="flex-1 relative rounded-lg overflow-hidden mb-2 md:mb-0 order-1 md:order-2">
                <img
                  src={img || "/placeholder.svg"}
                  alt="Acrylic Mold Black Swing"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex flex-row md:flex-col gap-2 md:gap-4 md:mr-4 order-2 md:order-1 ">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="border-none w-16 h-16 md:w-24 md:h-24 border cursor-pointer"
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt="Swing thumbnail"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-serif">
                  Acrylic Mold Black Swing
                </h1>
                <button
                  className="flex-shrink-0 rounded-full p-2 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsInWishlist(!isInWishlist)}
                >
                  <Heart
                    className={`w-6 h-6 md:w-8 md:h-8 ${
                      isInWishlist
                        ? "fill-[#2A3114] text-[#2A3114]"
                        : "text-gray-500"
                    }`}
                  />
                </button>
              </div>

              {/* Ratings */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4].map(i => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-lime-950 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-gray-300 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {reviewCount} Reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-6">
                <span className="text-2xl font-medium">Rs. 39,900.00</span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  Rs. 41,000.00
                </span>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button className="py-3 px-4 bg-[#2A3114] text-white rounded hover:bg-[#3A4124] transition w-full">
                  <Link
                    to="/Checkout"
                    className="flex items-center justify-center"
                  >
                    <span>Buy Now</span>
                  </Link>
                </button>
                <button className="py-3 px-4 border border-lime-950 rounded transition w-full">
                  <Link to="/Cart" className="flex items-center justify-center">
                    <span>Add to Cart</span>
                  </Link>
                </button>
              </div>

              {/* Accordion sections */}
              <div className="border-t border-gray-200">
                {/* Description Section */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={() => toggleSection("description")}
                  >
                    <span className="font-medium">Description</span>
                    {openSections.description ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Product details - conditionally expanded */}
                {openSections.description && (
                  <div className="py-4 space-y-3 text-sm text-gray-600">
                    <p>Dimensions - L48 × W22 × H16</p>
                    <p>
                      Hanging Option : Stainless Steel Rope Wire/PVD Coated
                      Rope/ Nylon Rope/Steel Chain
                    </p>
                    <p>Customize Size, Design & Cushioning Available</p>
                    <p>Customize Length from 2 foot - upto 8 foot</p>
                  </div>
                )}

                {/* Shipping Information Section */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={() => toggleSection("shipping")}
                  >
                    <span className="font-medium">Shipping Information</span>
                    {openSections.shipping ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Review Section */}
                <div className="py-4 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={() => toggleSection("review")}
                  >
                    <span className="font-medium">Review</span>
                    {openSections.review ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Review Content - conditionally expanded */}
                {openSections.review && (
                  <div className="py-4 space-y-6">
                    <button
                      className="bg-[#2A3114] text-white py-2 px-6 rounded hover:bg-[#3A4124] transition"
                      onClick={openReviewModal}
                    >
                      Write Review
                    </button>

                    {/* Dynamic Review Items */}
                    {reviews.map(review => (
                      <div
                        key={review.id}
                        className="flex gap-4 border-b border-gray-200 pb-4"
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={
                              review.productImage || img || "/placeholder.svg"
                            }
                            alt="Product review"
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <p className="text-xs text-gray-500">
                                {review.role}
                              </p>
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map(i => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i <= review.rating
                                      ? "text-lime-950"
                                      : "text-gray-300"
                                  } fill-current`}
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="mt-2 text-sm">"{review.comment}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product description */}
              <div className="mt-6 text-sm">
                <p className="text-gray-700">
                  "Introducing our latest innovation – a perfect blend of
                  technology and design. Experience seamless performance,
                  unmatched quality, and a user-friendly interface. Elevate your
                  experience with our new product. Try it today!"
                </p>
              </div>
            </div>
          </div>

          {/* You might also like */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif mb-8">You Might Also Like</h2>
            <Link to="/AllProduct">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {allProducts.map((product, index) => (
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

                      {/* Action buttons - appear on hover */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <Link to="/Cart">
                          <button className="bg-[#2a2a14] text-white p-2 rounded-full cursor-pointer">
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
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <button
              onClick={closeReviewModal}
              className="absolute top-4 right-4 bg-[#2A3114] text-white rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <form
              onSubmit={handleSubmitReview}
              className="p-6 rounded-xl border"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`w-8 h-8 ${
                        star <= rating ? "text-[#2A3114]" : "text-gray-300"
                      } fill-current`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* User Information */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#2A3114]"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="userRole"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="userRole"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#2A3114]"
                    value={userRole}
                    onChange={e => setUserRole(e.target.value)}
                  />
                </div>
              </div>

              {/* Feedback Text Area */}
              <div className="mb-6">
                <label
                  htmlFor="feedback"
                  className="block mb-2 text-sm font-medium"
                >
                  Feedback*
                </label>
                <textarea
                  id="feedback"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#2A3114]"
                  placeholder="Write Your feedback"
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Upload Image */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium mr-4">Upload Image</span>
                  <button
                    type="button"
                    onClick={handleChooseImage}
                    className="bg-[#2A3114] text-white py-2 px-4 rounded text-sm"
                  >
                    Choose Image
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Preview selected image */}
                {selectedImage && (
                  <div className="mt-2">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Preview"
                      className="h-20 w-auto object-cover rounded"
                    />
                  </div>
                )}
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full bg-[#2A3114] text-white py-3 rounded hover:bg-[#3A4124] transition"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
