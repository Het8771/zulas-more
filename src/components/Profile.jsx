import { useState } from "react"
import { LogOut , CheckIcon } from "lucide-react"
import profile from "../image/profile.svg"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Product from "../image/Product.svg"
export default function Profile() {
  const [activeTab, setActiveTab] = useState("information")

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Sidebar - User Profile */}
          <div className="border border-gray-200 rounded-lg bg-white p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mb-6 w-full ">
                <img
                  src={profile}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="rounded-full object-cover  "
                />
                <h2 style={{ fontFamily: 'La Mango' }} className="  mt-3 sm:mt-0 text-xl sm:text-2xl  text-[#333] text-center sm:text-left">
                  Hii, Krushant
                </h2>
              </div>

              <div className="w-full space-y-2">
                <button
                  className={`w-full py-3 text-center rounded-md cursor-pointer transition-colors ${
                    activeTab === "information"
                      ? "bg-[#2c3118] text-white"
                      : "text-[#333] "
                  }`}
                  onClick={() => setActiveTab("information")}
                >
                  My Information
                </button>
                <button
                  className={`w-full py-3 text-center rounded-md cursor-pointer transition-colors ${
                    activeTab === "order"
                      ? "bg-[#2c3118] text-white"
                      : "text-[#333]"
                  }`}
                  onClick={() => setActiveTab("order")}
                >
                  My Order
                </button>
                <div className="mt-12 sm:mt-24 flex items-center justify-center gap-2 py-3 text-[#333] cursor-pointer hover:text-[#2c3118] transition-colors">
                  <LogOut  className="h-4 w-4 rotate-360" />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form or Order */}
          <div className="border border-gray-200 rounded-lg bg-white p-4 sm:p-6 lg:col-span-2">
            {activeTab === "information" ? (
              <UserInformationForm />
            ) : (
              <OrderTracking />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function UserInformationForm() {
  return (
    <form className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
      {/* Form Fields */}
      {[
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Name"
        },
        {
          id: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Name"
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "Number"
        },
        {
          id: "dob",
          label: "DOB",
          type: "text",
          placeholder: "12 / 12 / 2006"
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "zulazandmore@gmail.com"
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          placeholder: "**************"
        }
      ].map(({ id, label, type, placeholder }) => (
        <div key={id} className="space-y-1.5">
          <label htmlFor={id} className="block text-sm font-medium text-lime-950">
            {label}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full rounded-md border border-lime-950 p-3 outline-none"
          />
        </div>
      ))}
    </form>
  )
}

function OrderTracking() {
  return (
    <div className="flex flex-col gap-6">
      {/* Order Status Steps */}
      <div className="relative flex flex-col sm:flex-row justify-between">
        {/* Progress line for desktop */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 hidden sm:block">
          <div className="h-full w-1/3 bg-[#2c3118]"></div>
        </div>

        {/* Progress line for mobile */}
        <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200 sm:hidden">
          <div className="h-1/3 w-full bg-[#2c3118]"></div>
        </div>

        {/* Status steps */}
        <StatusStep title="Ordered" isCompleted={true} />
        <StatusStep title="Shipping" isCompleted={true} />
        <StatusStep title="Out of delivery" isCompleted={false} />
        <StatusStep title="Delivered" isCompleted={false} />
      </div>

      {/* Delivery and Shipping Info */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div className="rounded-md border border-[#e5e0d5] bg-white p-4">
          <h3 className="mb-2 text-lg font-medium text-lime-950">Delivery by Kalateet</h3>
          <p className="text-gray-600 text-sm break-words">
            Tracking ID: 1234789412345689
          </p>
        </div>

        <div className="rounded-md border border-[#e5e0d5] bg-white p-4">
          <h3 className="mb-2 text-lg font-medium text-lime-950">Shipping Address</h3>
          <p className="text-gray-600 text-sm">
            123 Jewelry Lane, Gold District
            <br />
            New York, NY 10001
          </p>
        </div>
      </div>

      {/* Product Image */}
      <div className="mt-4 overflow-hidden rounded-md border border-[#e5e0d5]">
        <img
          src={Product}
          alt="Product"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  )
}

function StatusStep({ title, isCompleted }) {
  return (
    <div className="flex sm:flex-col items-start sm:items-center mb-6 sm:mb-0 pl-12 sm:pl-0 relative z-10">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          isCompleted ? "bg-[#2c3118]" : "border border-gray-300 bg-white"
        }`}
      >
        {isCompleted ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <span className="text-transparent">.</span>
        )}
      </div>
      <span className="ml-3 sm:ml-0 sm:mt-2 text-sm">{title}</span>
    </div>
  )
}
