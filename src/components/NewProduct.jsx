// import React from "react";
// import n1 from "../image/n1.svg";
// import n2 from "../image/n2.svg";
// import n3 from "../image/n3.svg";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function NewProduct() {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-orange-50">
//       <main className="max-w-6xl w-full mx-auto px-4 md:px-0 pb-10 flex-1">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* {/ Left Column /} */}
//           <div className="flex flex-col space-y-8">
//             {/* {/ 1) Top Left: Wooden Swings (floral overlay) /} */}
//             <div className="relative mt-40 flex right-2">
//               <img
//                 src={n3}
//                 alt="Wooden Swings (Floral)"
//                 className="h-[100%] w-800"
//               />
//               {/* {/ Dark overlay with product text /} */}
//               <div className="absolute inset-0 bg-black/0 p-4 flex flex-col justify-end">
//                 <h2 className="text-white text-xl font-semibold">
//                   Wooden Swings
//                 </h2>
//                 <p className="text-white text-sm mt-2 leading-snug">
//                   “Introducing our latest innovation – a perfect blend of
//                   technology and design. Experience seamless performance,
//                   unmatched quality, and a user-friendly interface. Elevate your
//                   experience with our new product. Try it today!”
//                 </p>
//               </div>
//               {/* {/ Optional exclamation mark /} */}
//             </div>

//             {/* {/ 2) Bottom Left: Indoor Swing (608×369) /} */}
//             <div className="relative rounded-xl overflow-hidden left-0 ">
//               <img
//                 src={n2}
//                 alt="Indoor Swing (608×369)"
//                 className="w-[80%] h-60"
//               />
//               {/* {/ Center label /} */}
//             </div>
//           </div>

//           {/* {/ Right Column: Cloud swing /} */}
//           <div className="relative rounded-xl overflow-hidden flex items-center justify-center mb-10">
//             <img
//               src={n1}
//               alt="Cloud Swing"
//               className="w-501px h-780px object-cover"
//             />
//             {/* {/ Optional decorative doodles /} */}
//             <div className="absolute right-3 top-3 text-2xl text-gray-400">

//             </div>
//             <div className="absolute left-3 bottom-3 text-2xl text-gray-400">

//             </div>
//           </div>
//         </div>
//       </main>
//       </div>
//       <Footer />
//     </>
//   );
// }


// New 

// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import img1 from "../image/img1.svg";
// import img2 from "../image/img2.svg";

// export default function NewProductPage() {
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-[#fdf6ed] px-4 py-8 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-center text-3xl font-serif mb-2">New Product</h1>

//           <div className="flex justify-center text-sm mb-12">
//             <Link to="/" className="text-gray-600 hover:underline">
//               Home
//             </Link>
//             <span className="mx-1 text-gray-600">/</span>
//             <span className="text-gray-800">New Product</span>
//           </div>

//           <div className="bg-orange-50 max-w-7xl mx-auto md:px-12 py-12">
//             <div className=" grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
//               {/* Card 1 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img1 || "/placeholder.svg"}
//                   alt="Innovation Hub"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6  bg-gradient-to-b from-transparent to-black opacity-80 ">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white ">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Innovation Hub
//                     </h3>
//                     <p className="text-sm">
//                       Join our dynamic environment that encourages creative
//                       thinking and innovation in furniture design.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img2 || "/placeholder.svg"}
//                   alt="Team Collaboration"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Team Collaboration
//                     </h3>
//                     <p className="text-sm">
//                       Our dedicated professionals work together to create
//                       quality swings that exceed expectations.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img1 || "/placeholder.svg"}
//                   alt="Brainstorming Session"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Brainstorming Session
//                     </h3>
//                     <p className="text-sm">
//                       Where creativity meets functionality to develop unique
//                       furniture solutions for your space.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 4 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img2 || "/placeholder.svg"}
//                   alt="Luxury Swings"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Luxury Swings
//                     </h3>
//                     <p className="text-sm">
//                       Experience the perfect blend of comfort and elegance with
//                       our premium swing collection.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* Card 5 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img1 || "/placeholder.svg"}
//                   alt="Luxury Swings"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Luxury Swings
//                     </h3>
//                     <p className="text-sm">
//                       Experience the perfect blend of comfort and elegance with
//                       our premium swing collection.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* Card 6 */}
//               <div className="relative rounded-4xl overflow-hidden shadow-lg group h-80">
//                 <img
//                   src={img2 || "/placeholder.svg"}
//                   alt="Luxury Swings"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Luxury Swings
//                     </h3>
//                     <p className="text-sm">
//                       Experience the perfect blend of comfort and elegance with
//                       our premium swing collection.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../image/img1.svg";
import img2 from "../image/img2.svg";

export default function NewProductPage() {
  const cardData = [
    {
      id: 1,
      image: img1,
      title: "Innovation Hub",
      description:
        "Join our dynamic environment that encourages creative thinking and innovation in furniture design.",
    },
    {
      id: 2,
      image: img2,
      title: "Team Collaboration",
      description:
        "Our dedicated professionals work together to create quality swings that exceed expectations.",
    },
    {
      id: 3,
      image: img1,
      title: "Brainstorming Session",
      description:
        "Where creativity meets functionality to develop unique furniture solutions for your space.",
    },
    {
      id: 4,
      image: img2,
      title: "Luxury Swings",
      description:
        "Experience the perfect blend of comfort and elegance with our premium swing collection.",
    },
    {
      id: 5,
      image: img1,
      title: "Luxury Swings",
      description:
        "Experience the perfect blend of comfort and elegance with our premium swing collection.",
    },
    {
      id: 6,
      image: img2,
      title: "Luxury Swings",
      description:
        "Experience the perfect blend of comfort and elegance with our premium swing collection.",
    },
    {
      id: 7,
      image: img1,
      title: "Innovation Hub",
      description:
        "Join our dynamic environment that encourages creative thinking and innovation in furniture design.",
    },
    {
      id: 8,
      image: img2,
      title: "Team Collaboration",
      description:
        "Our dedicated professionals work together to create quality swings that exceed expectations.",
    },
    {
      id: 9,
      image: img1,
      title: "Brainstorming Session",
      description:
        "Where creativity meets functionality to develop unique furniture solutions for your space.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl font-serif mb-2">New Product</h1>

          <div className="flex justify-center text-sm mb-12">
            <Link to="/" className="text-gray-600 hover:underline">
              Home
            </Link>
            <span className="mx-1 text-gray-600">/</span>
            <span className="text-gray-800">New Product</span>
          </div>

          <div className="bg-white max-w-7xl mx-auto md:px-12 ">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="relative rounded-4xl overflow-hidden shadow-lg group h-80"
                >
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent to-black opacity-80">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
