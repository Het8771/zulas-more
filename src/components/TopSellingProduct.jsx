import { useState, useEffect, useRef } from "react"
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  PlayCircle,
  PauseCircle
} from "lucide-react"
import p1 from "../image/p1.png";
import p2 from "../image/p2.png";
import p3 from "../image/p3.png";
import p4 from "../image/p4.png";
import p5 from "../image/p5.png";  
import video from "../image/zulavideo.mp4"; // Import your video file if needed
export default function TopSellingProduct() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Images array - you'll need to import these properly in your project
  const images = [p1,p2,p3,p4,p5]

  // Auto-scroll functionality
  useEffect(() => {
    if (!showVideo && !isPaused) {
      // Start auto-scrolling
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Change image every 3 seconds
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [showVideo, isPaused, images.length])

  const handlePrev = () => {
    // Reset timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )

    // Restart timer if not paused
    if (!isPaused && !showVideo) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
    }
  }

  const handleNext = () => {
    // Reset timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )

    // Restart timer if not paused
    if (!isPaused && !showVideo) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
    }
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
        {/* Left Section - Large Image with Play Button */}
        <div className="relative rounded-4xl overflow-hidden shadow-md mx-auto w-full max-w-md lg:max-w-full">
          {showVideo ? (
            <div className="aspect-video w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <iframe
                // Replace with your actual video URL
                src={video}
                title="Product Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Top Selling Product ${index + 1}`}
                    width={600}
                    height={700}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-white text-black p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                  onClick={() => setShowVideo(true)}
                >
                  <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right Section - Product Details */}
        <div className="bg-white flex items-center justify-center p-4">
          <div className="max-w-md mx-auto text-center space-y-4 sm:space-y-6">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-serif text-gray-800">
              Top Selling Product
            </h2>

            {/* Image Slider */}
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Top Selling Product ${index + 1}`}
                    width={400}
                    height={300}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Slider Indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-4"
                          : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows and Pause Button */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
                  aria-label="Previous image"
                >
                  <ArrowLeftCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                </button>

                <button
                  onClick={togglePause}
                  className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? (
                    <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                  ) : (
                    <PauseCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
                  aria-label="Next image"
                >
                  <ArrowRightCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              Wooden Swings
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2 sm:px-8">
              "Introducing our latest innovation – a perfect blend of technology
              and design. Experience seamless performance, unmatched quality,
              and a user-friendly interface. Elevate your experience with our
              new product. Try it today!"
            </p>

            {/* Price */}
            <div className="flex justify-center items-center space-x-4">
              <span className="text-lg sm:text-xl font-bold text-gray-800">
                ₹10,000.00
              </span>
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ₹12,000.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













// import { useState } from "react";
// import { ArrowLeftCircle, ArrowRightCircle, PlayCircle } from "lucide-react";
// import p1 from "../image/p1.png";
// import p2 from "../image/p2.png";
// import p3 from "../image/p3.png";
// import p4 from "../image/p4.png";
// import p5 from "../image/p5.png";
// import video from "../image/zulavideo.mp4"; // Import your video file if needed
// export default function TopSellingProduct() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Fixed state usage
//   const [showVideo, setShowVideo] = useState(false);

//   // Images array
//   const images = [ p1, p2, p3,p4, p5];

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center p-4 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
//         {/* Left Section - Large Image with Play Button */}
//         <div className="relative rounded-lg overflow-hidden shadow-md mx-auto w-full max-w-md lg:max-w-full">
//           {showVideo ? (
//             <div className="aspect-video w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//               <iframe
//                 src={video} // Use your video URL here
//                 title="Product Video"
//                 className="w-full h-full"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen 
//               ></iframe>
//             </div>
//           ) : (
//             <>
//               <img
//                 src={images[currentImageIndex]} // Display the current image
//                 alt="Top Selling Product"
//                 width={600}
//                 height={700}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
//               />
//               {/* Play Button */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button
//                   className="bg-white text-black p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
//                   onClick={() => setShowVideo(true)}
//                 >
//                   <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer" />
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Right Section - Product Details */}
//         <div className="bg-white flex items-center justify-center p-4">
//           <div className="max-w-md mx-auto text-center space-y-4 sm:space-y-6">
//             {/* Title */}
//             <h2 className="text-xl sm:text-2xl font-serif text-gray-800">
//               Top Selling Product
//             </h2>

//             {/* Image Slider */}
//             <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
//               <img
//                 src={images[currentImageIndex]} // Display the current image
//                 alt="Top Selling Product"
//                 width={400}
//                 height={300}
//                 className="w-full h-48 sm:h-64 md:h-80 rounded-lg object-cover shadow-md"
//               />
//               {/* Navigation Arrows */}
//               <button
//                 onClick={handlePrev}
//                 className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300"
//                 aria-label="Previous image"
//               >
//                 <ArrowLeftCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-100 transition duration-300"
//                 aria-label="Next image"
//               >
//                 <ArrowRightCircle className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
//               </button>
//             </div>

//             {/* Product Name */}
//             <h3 className="text-lg font-semibold text-gray-800">
//               Wooden Swings
//             </h3>

//             {/* Description */}
//             <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2 sm:px-8">
//               "Introducing our latest innovation – a perfect blend of technology
//               and design. Experience seamless performance, unmatched quality,
//               and a user-friendly interface. Elevate your experience with our
//               new product. Try it today!"
//             </p>

//             {/* Price */}
//             <div className="flex justify-center items-center space-x-4">
//               <span className="text-lg sm:text-xl font-bold text-gray-800">
//                 ₹10,000.00
//               </span>
//               <span className="text-xs sm:text-sm text-gray-500 line-through">
//                 ₹12,000.00
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




