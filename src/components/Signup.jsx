import React, { useState } from "react";
import img from "../image/login.svg";
import { Eye, EyeOff } from "lucide-react";
import logo from "../image/login logo.svg";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white flex justify-center items-center h-screen overflow-hidden">
      {/* Signup Form Section */}
      <div className="p-8 w-full lg:w-1/2 lg:p-36 md:p-20">
        <div className="w-full max-w-full mx-auto">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <Link to="/"><img
                src={logo}
                alt="Kuku Logo"
                className=" rounded-3xl"
              /></Link>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-lime-950 focus:border-lime-950 focus:ring focus:ring-lime-950  rounded-md focus:outline-none   text-sm placeholder:text-lime-950 outline-none"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-lime-950 focus:border-lime-950 focus:ring focus:ring-lime-950  rounded-md focus:outline-none  text-sm placeholder:text-lime-950"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-lime-950 focus:border-lime-950 focus:ring focus:ring-lime-950  rounded-md focus:outline-none  text-sm placeholder:text-lime-950"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label>Passwords</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 border border-lime-950 focus:border-lime-950  focus:ring focus:ring-lime-950  rounded-md   text-sm placeholder:text-lime-950"
                required
              />
              <button
                type="button"
                className="mt-3 absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-950 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 text-white bg-lime-950 rounded-md hover:bg-lime-950 transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-lime-950">
            Already have an account?{" "}
            <Link to="/Loginpage" className="text-lime-950 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block w-1/2 h-full mt-22">
        <img
          src={img}
          alt="Signup Illustration"
          className="object-cover w-[90%] h-[90%] rounded-4xl"
        />
      </div>
    </div>
  );
}

export default Signup;
