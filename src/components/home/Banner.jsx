// import React, { useState } from "react";
// import Slider from "react-slick";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,
//   bannerImgFour,
//   bannerImgFive,
// } from "../../assets/index";

// const Banner = () => {
//   const [dotActive, setDocActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDocActive(next);
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           top: "70%",
//           left: "50%",
//           transform: "translate(-50%, 0)",
//           width: "210px",
//         }}
//       >
//         <ul
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotActive
//             ? {
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "white",
//                 background: "#131921",
//                 padding: "8px 0",
//                 cursor: "pointer",
//                 border: "1px solid #f3a847",
//               }
//             : {
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "#232F3E",
//                 color: "white",
//                 padding: "8px 0",
//                 cursor: "pointer",
//                 border: "1px solid white",
//               }
//         }
//       >
//         {i + 1}
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 500,
//         settings: {
//           dots: true,
//           appendDots: (dots) => (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "60%",
//                 left: "50%",
//                 transform: "translate(-50%, 0)",
//                 width: "150px",
//               }}
//             >
//               <ul
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   fontSize: "12px",
//                 }}
//               >
//                 {" "}
//                 {dots}{" "}
//               </ul>
//             </div>
//           ),
//           customPaging: (i) => (
//             <div
//               style={
//                 i === dotActive
//                   ? {
//                       width: "25px",
//                       height: "25px",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "white",
//                       background: "#131921",
//                       padding: "8px 0",
//                       cursor: "pointer",
//                       border: "1px solid #f3a847",
//                     }
//                   : {
//                       width: "25px",
//                       height: "25px",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       background: "#232F3E",
//                       color: "white",
//                       padding: "8px 0",
//                       cursor: "pointer",
//                       border: "1px solid white",
//                     }
//               }
//             >
//               0{i + 1}
//             </div>
//           ),
//         },
//       },
//     ],
//   };
//   return (
//     <div className="w-full">
//       <div className="w-full h-full relative">
//         <Slider {...settings}>
//           <div>
//             <img src={bannerImgOne} alt="bannerImgOne" />
//           </div>
//           <div>
//             <img src={bannerImgTwo} alt="bannerImgTwo" />
//           </div>
//           <div>
//             <img src={bannerImgThree} alt="bannerImgThree" />
//           </div>
//           <div>
//             <img src={bannerImgFour} alt="bannerImgFour" />
//           </div>
//           <div>
//             <img src={bannerImgFive} alt="bannerImgFive" />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Banner;
















// import React from 'react';
// import image1 from '../../assets/images/image1.jpeg';
// import image2 from '../../assets/images/image2.jpeg';
// import image3 from '../../assets/images/image3.jpeg';
// import image4 from '../../assets/images/image4.jpeg';

// const Banner = () => {
//   return (
//     <div className="bg-yellow-100 py-10">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Introducing Gift Mode</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900">Extra-special gifting made extra-easy</h1>
//           <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none">
//             Shop now
//           </button>
//         </div>
//         <div className="relative w-1/3 h-64 overflow-hidden">
//           <div className="flex flex-col space-y-4 animate-move-up">
//             <img className="rounded-lg shadow-md" src={image1} alt="Product 1" />
//             <img className="rounded-lg shadow-md" src={image2} alt="Product 2" />
//             <img className="rounded-lg shadow-md" src={image3} alt="Product 3" />
//             <img className="rounded-lg shadow-md" src={image4} alt="Product 4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;








// import React from 'react';
// import image1 from '../../assets/images/image1.jpeg';
// import image2 from '../../assets/images/image2.jpeg';
// import image3 from '../../assets/images/image3.jpeg';
// import image4 from '../../assets/images/image4.jpeg';

// const Banner = () => {
//   return (
//     <div className="bg-yellow-100 py-8 border-4 border-black rounded-lg my-8 mx-4">
//       <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Introducing Gift Mode</span>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900">Extra-special gifting made extra-easy</h1>
//           <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none">
//             Shop now
//           </button>
//         </div>
//         <div className="relative w-1/3 h-56 overflow-hidden">
//           <div className="flex flex-col space-y-4 animate-move-up">
//             <img className="rounded-lg shadow-md" src={image1} alt="Product 1" />
//             <img className="rounded-lg shadow-md" src={image2} alt="Product 2" />
//             <img className="rounded-lg shadow-md" src={image3} alt="Product 3" />
//             <img className="rounded-lg shadow-md" src={image4} alt="Product 4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;












// import React from 'react';
// import image1 from '../../assets/images/image1.jpeg';
// import image2 from '../../assets/images/image2.jpeg';
// import image3 from '../../assets/images/image3.jpeg';
// import image4 from '../../assets/images/image4.jpeg';
// import image5 from '../../assets/images/image5.jpeg'; 
// import image6 from '../../assets/images/image6.jpeg'; 
// import image7 from '../../assets/images/image7.jpeg';
// import image8 from '../../assets/images/image8.jpeg';
// import image9 from '../../assets/images/image9.jpeg';
// import image10 from '../../assets/images/image10.jpeg';
// import './Banner.css';

// const Banner = () => {
//   return (
//     <div className="bg-yellow-100 py-8 border-4 border-black rounded-lg my-8 mx-4 shadow-xl transform transition-transform duration-500 hover:scale-105">
//       <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center space-x-6">
//         <div className="space-y-6">
//           <div className="flex items-center space-x-2">
//             <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-bounce">Introducing Gift Mode</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">Extra-special gifting made extra-easy</h1>
//           <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none transform transition-transform duration-300 hover:scale-110 animate-pulse">
//             Shop now
//           </button>
//         </div>
//         <div className="relative w-2/3 h-64 overflow-hidden flex space-x-4">
//           <div className="flex flex-col space-y-4 animate-slide-up">
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image1} alt="Product 1" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image2} alt="Product 2" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image3} alt="Product 3" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image4} alt="Product 4" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image7} alt="Product 4" />
//           </div>
//           <div className="flex flex-col space-y-4 animate-slide-down">
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image5} alt="Product 5" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image6} alt="Product 6" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image8} alt="Product 6" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image9} alt="Product 6" />
//             <img className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" src={image10} alt="Product 6" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



















import React from 'react';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg'; 
import image6 from '../../assets/images/image6.jpeg'; 
import image7 from '../../assets/images/image7.jpeg';
import image8 from '../../assets/images/image8.jpeg';
import image9 from '../../assets/images/image9.jpeg';
import image10 from '../../assets/images/image10.jpeg';
import './Banner.css';

const Banner = () => {
  return (
    // Banner container with background color, border, and shadow
    <div className="bg-yellow-100 py-8 border-4 border-black rounded-lg my-8 mx-4 shadow-xl">
      {/* Max width container with padding and flex layout */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center space-x-6">
        {/* Content section with introducing message, title, and button */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            {/* Tagline */}
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-bounce">Introducing Gift Mode</span>
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">Extra-special gifting made extra-easy</h1>
          {/* Call to action button */}
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none animate-pulse">
            Shop now
          </button>
        </div>
        {/* Image carousel section */}
        <div className="relative w-2/3 h-64 overflow-hidden flex space-x-4">
          {/* First column of images */}
          <div className="flex flex-col space-y-4 animate-slide-up">
            <img className="rounded-lg shadow-md" src={image1} alt="Product 1" />
            <img className="rounded-lg shadow-md" src={image2} alt="Product 2" />
            <img className="rounded-lg shadow-md" src={image3} alt="Product 3" />
            <img className="rounded-lg shadow-md" src={image4} alt="Product 4" />
            <img className="rounded-lg shadow-md" src={image7} alt="Product 4" />
          </div>
          {/* Second column of images */}
          <div className="flex flex-col space-y-4 animate-slide-down">
            <img className="rounded-lg shadow-md" src={image5} alt="Product 5" />
            <img className="rounded-lg shadow-md" src={image6} alt="Product 6" />
            <img className="rounded-lg shadow-md" src={image8} alt="Product 6" />
            <img className="rounded-lg shadow-md" src={image9} alt="Product 6" />
            <img className="rounded-lg shadow-md" src={image10} alt="Product 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
