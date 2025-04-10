import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./components/Cart";
import First from "./components/First";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import Contact from "./components/Contact";
import Ourstory from "./components/Ourstory";
import Shopby from "./components/Shopby";
import Singleproduct from "./components/Singleproduct";
import Profile from "./components/Profile";
import AllProduct from "./components/AllProduct";
// import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import NewProduct from "./components/Newproduct";

function App() {
  return (
    <>
    
    <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Loginpage" element={<Loginpage/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/NewProduct" element={<NewProduct/>} />
          <Route path="/Ourstory" element={<Ourstory/>} />
          <Route path="/First" element={<First/>} />
          <Route path="/Shopby" element={<Shopby/>} />
          <Route path="/Singleproduct" element={<Singleproduct/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/AllProduct" element={<AllProduct/>} />  

        </Routes>
       
    </Router>
    </>
  )
}

export default App;



