import { Heart, ShoppingCart, MoveUpRight } from "lucide-react"
import p1 from "../image/p1.png"
import background from "../image/background.png"
import { Link } from "react-router-dom"

export default function FeatureCollection() {
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

  return (
    <>
      <div className="bg-white p-3 sm:p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center mb-5 ">
            <img src={background || "/placeholder.svg"} alt="back" />
            <div className="absolute bottom-4 right-4 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4">
              <Link to="/Singleproduct">
                <button className="p-2 shadow-lg">
                  <MoveUpRight className="bg-white h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 p-1.5 sm:p-2 md:p-3 rounded-full cursor-pointer" />
                </button>
              </Link>
            </div>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Left Column - Title */}
            <div className="mb-2 md:mt-24">
              <h2 style={{fontFamily:"La-Mango"}} className="mb-2 text-gray-800 font-semibold text-2xl md:text-4xl lg:text-2xl">
                Featured Collection
              </h2>
            </div>

            {/* Right Column - Description */}
            {/* <div className="mb-6">
              <p className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed mt-0 md:mt-10">
                "Introducing our latest innovation – a perfect blend of
                technology and design. Experience seamless performance,
                unmatched quality, and a user-friendly interface. Elevate your
                experience with our new product. Try it today!"
              </p>
            </div> */}
          </div>

          {/* Product grid - single column on mobile, multiple on larger screens */}
          <Link to="/Singleproduct">
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
                    <div className="absolute top-3 right-3 flex flex-col gap-2 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
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
