import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cartim from "../image/Cartim.svg"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gold Infinity Ring 1",
      size: "100ml",
      price: 120,
      quantity: 1,
      image: Cartim,

    },
    {
      id: 2,
      name: "Gold Infinity Ring 1",
      size: "100ml",
      price: 120,
      quantity: 1,
      image: Cartim,

    }
  ])

  // Update Quantity
  const handleQuantityChange = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    )
  }

  // Remove Item from Cart
  const handleRemoveItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = 20
  const tax = 20
  const total = subtotal + shipping + tax

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ">
          {/* Breadcrumb & Title */}
          <h2 style={{fontFamily: "La Mango"}} className="text-xl sm:text-2xl lg:text-3xl text-lime-950 mb-2 text-center">
            Cart Page
          </h2>
          <p className="text-sm text-lime-950 mb-6 text-center"><Link to="/" className="hover:underline">Home </Link> / Cart Page</p>

          {/* Cart & Order Summary */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Cart Section */}
            <div className="w-full lg:w-2/3 bg-white rounded-lg p-4">
              {/* Desktop Table View - Hidden on Mobile */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full border-collapse text-xs sm:text-sm lg:text-base">
                  <thead className="bg-white">
                    <tr className="text-left text-gray-600">
                      <th className="p-2 sm:p-4">Product</th>
                      <th className="p-2 sm:p-4">Description</th>
                      <th className="p-2 sm:p-4">Quantity</th>
                      <th className="p-2 sm:p-4">Price</th>
                      <th className="p-2 sm:p-4">Total</th>
                      <th className="p-2 sm:p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-t border-gray-200">
                        <td className="p-2 sm:p-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded"
                          />
                        </td>
                        <td className="p-2 sm:p-4">
                          <p className="font-semibold">{item.name}</p>
                        </td>
                        <td className="p-2 sm:p-4">
                          <div className="flex items-center border border-gray-300 rounded-md w-fit">
                            <button
                              className="px-2 py-1 bg-white"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            <span className="px-3 sm:px-4">{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-white"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-2 sm:p-4 font-medium">
                          ₹{item.price.toFixed(2)}
                        </td>
                        <td className="p-2 sm:p-4 font-medium">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-2 sm:p-4">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-black hover:text-black"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View - Visible only on Mobile */}
              <div className="sm:hidden">
                {cartItems.map(item => (
                  <div key={item.id} className="rounded-lg p-4 mb-4">
                    <div className="flex items-start mb-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 rounded mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-semibold">{item.name}</p>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-black hover:text-black"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <p className="text-gray-500 text-xs">Size: {item.size}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          className="px-2 py-1 bg-white"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-white"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Price: ₹{item.price.toFixed(2)}
                        </p>
                        <p className="font-medium">
                          Total: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/Allproduct">
                <button className="mt-6 px-4 py-2 border border-gray-400 w-full sm:w-auto cursor-pointer">
                  ← Continue Shopping
                </button>
              </Link>
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-1/3 bg-white border border-gray-200 p-4 sm:p-6 ">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2 text-sm lg:text-base">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm lg:text-base">
                <span>Shipping:</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm lg:text-base">
                <span>Tax:</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-base lg:text-lg">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <Link to="/Checkout">
                <button className="w-full mt-4 bg-lime-950 text-white py-2 cursor-pointer rounded-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CartPage
