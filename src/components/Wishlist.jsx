import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Cartim from "../image/cartim.svg"

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Gold Infinity Ring 1",
      price: 120,
      image: Cartim,
    },
    {
      id: 2,
      name: "Gold Infinity Ring 1",
      price: 120,
      image: Cartim,
    },
  ]);

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2  style={{fontFamily: "La Mango"}} className="text-xl sm:text-2xl lg:text-3xl  mb-2 text-center">Wishlist</h2>
        <p className="text-sm text-gray-500 mb-6 text-center"><Link to="/" className="hover:underline">Home</Link> / Wishlist</p>

        <div className="bg-white rounded-lg p-4">
          <div className="hidden sm:block">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead className="bg-white">
                <tr className="text-left text-gray-600">
                  <th className="p-2 sm:p-4">Product</th>
                  <th className="p-2 sm:p-4">Description</th>
                  <th className="p-2 sm:p-4">Total</th>
                  <th className="p-2 sm:p-4">Add To Cart</th>
                  <th className="p-2 sm:p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="border-t border-gray-200">
                    <td className="p-2 sm:p-4">
                      <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded" />
                    </td>
                    <td className="p-2 sm:p-4">
                      <p className="font-semibold">{item.name}</p>
                    </td>
                    <td className="p-2 sm:p-4 font-medium">₹{item.price.toFixed(2)}</td>
                    <td className="p-2 sm:p-4">
                      <button className="bg-lime-950 text-white px-3 py-1 rounded">Add To Cart</button>
                    </td>
                    <td className="p-2 sm:p-4">
                      <button onClick={() => handleRemoveItem(item.id)} className="text-black">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="sm:hidden">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border-t border-gray-200 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="font-medium">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-lime-950 text-white px-3 py-1 rounded  ml-20">Add To Cart</button>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-black">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link to="/Allproduct"><button className="mt-6 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 w-full sm:w-auto">← Continue Shopping</button></Link>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default WishlistPage;
