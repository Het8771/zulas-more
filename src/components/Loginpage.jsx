import React, { useState } from "react";
import img from "../image/login.svg";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import logo from "../image/login logo.svg";
import { Link } from "react-router-dom";

function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="bg-white flex justify-center items-center h-screen overflow-hidden" >
      {/* Login Form Section */}
      <div className="p-8 w-full lg:w-1/2 lg:p-36 md:p-20">
        <div className="w-full max-w-full mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-2 text-center">
              <Link to="/"><img
                src={logo}
                alt="zulas logo"
                className=" rounded-4xl object-fill"
              /></Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email "
                className="w-full border border-lime-950 focus:border-lime-950 focus:ring focus:ring-lime-950 h-12 rounded-md px-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-lime-950 focus:border-lime-950 focus:ring focus:ring-lime-950  h-12 rounded-md px-4 pr-10 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="mt-3 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-lime-950" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-lime-950" />
                )}
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-lime-950 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <Link to="/Profile"><button
              type="submit"
              className="w-full bg-lime-950 hover:bg-lime-950 text-white h-12 rounded-md cursor-pointer"
            >
              Log in
            </button></Link>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/Signup"
              className="text-lime-950 text-sm hover:underline"
            >
              Can&apos;t Log in? Sign up an account
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block w-1/2 h-full mt-22">
        <img
          src={img}
          alt="Placeholder"
          className="object-cover w-[90%] h-[90%] rounded-4xl" // Added rounded-lg for rounded corners
        />
      </div>
    </div>
  );
}

export default Loginpage;
