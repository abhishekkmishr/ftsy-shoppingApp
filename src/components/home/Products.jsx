// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// // import ApiIcon from "@mui/icons-material/Api";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// // import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/amazoneSlice";

// const Products = () => {
//   const data = useLoaderData();
//   const productsData = data.data;
//   const dispatch = useDispatch();
//   return (
//     <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
//       {productsData.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
//         >
//           <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//             {item.category}
//           </span>
//           {/* ========== Product Image Start here ============== */}
//           <div className="w-full h-auto flex items-center justify-center relative group">
//             <img
//               className="w-52 h-64 object-contain"
//               src={item.image}
//               alt="ProductImg"
//             />
//             {/* ================== Product mini drop down Start here ============ */}
//             {/* <ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
//               <li className="productLi">
//                 Compare
//                 <span>
//                   <ApiIcon />
//                 </span>
//               </li>
//               <li className="productLi">
//                 Add to Cart
//                 <span>
//                   <ShoppingCartIcon />
//                 </span>
//               </li>
//               <li className="productLi">
//                 View Details{" "}
//                 <span>
//                   <ArrowCircleRightIcon />
//                 </span>
//               </li>
//               <li className="productLi">
//                 Add to Wish List{" "}
//                 <span>
//                   <FavoriteIcon />
//                 </span>
//               </li>
//             </ul> */}
//             {/* ================== Product mini drop down End here ============== */}
//           </div>
//           {/* ========== Product Image End here ================ */}
//           {/* ========== Product Info Start here =============== */}
//           <div className="px-4 bg-white flex flex-col gap-1 z-10">
//             <div className="flex items-center justify-between">
//               <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
//                 {item.title.substring(0, 20)}
//               </h2>
//               <p className="text-sm text-gray-600 font-semibold">
//                 ${item.price}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm">{item.description.substring(0, 100)}</p>
//               <div className="text-yellow-500 flex">
//                 <StarIcon />
//                 <StarIcon />
//                 <StarIcon />
//                 <StarIcon />
//                 <StarIcon />
//               </div>
//             </div>
//             <button
//               onClick={() =>
//                 dispatch(
//                   addToCart({
//                     id: item.id,
//                     title: item.title,
//                     description: item.description,
//                     price: item.price,
//                     category: item.category,
//                     image: item.image,
//                     quantity: 1,
//                   })
//                 )
//               }
//               className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
//             >
//               Add to Cart
//             </button>
//           </div>
//           {/* ========== Product Info End here ================= */}
//           {/* ============ Product Image Start here ======== */}

//           {/* ============ Product drop-down Start here ==== */}
//           {/* ============ Product drop-down End here ====== */}

//           {/* ============ Product Image End here ========== */}
//           {/* ============ Product Info Start here ========= */}
//           {/* ============ Product Info End here =========== */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;












// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/amazoneSlice";

// const Products = () => {
//   const data = useLoaderData();
//   const productsData = data.data;
//   const dispatch = useDispatch();

//   const [category, setCategory] = useState("all");

//   const filterProducts = (category) => {
//     setCategory(category);
//   };

//   const filteredProducts =
//     category === "all"
//       ? productsData
//       : productsData.filter((item) => item.category.toLowerCase() === category);

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4">
//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => filterProducts("all")}
//           className={`py-2 px-4 rounded ${
//             category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => filterProducts("women's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Women's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("men's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Men's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("electronics")}
//           className={`py-2 px-4 rounded ${
//             category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Electronics
//         </button>
//         <button
//           onClick={() => filterProducts("jewelery")}
//           className={`py-2 px-4 rounded ${
//             category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Jewelry
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
//           >
//             <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//               {item.category}
//             </span>
//             {/* ========== Product Image Start here ============== */}
//             <div className="w-full h-auto flex items-center justify-center relative group">
//               <img
//                 className="w-52 h-64 object-contain"
//                 src={item.image}
//                 alt="ProductImg"
//               />
//             </div>
//             {/* ========== Product Image End here ================ */}
//             {/* ========== Product Info Start here =============== */}
//             <div className="px-4 bg-white flex flex-col gap-1 z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
//                   {item.title.substring(0, 20)}
//                 </h2>
//                 <p className="text-sm text-gray-600 font-semibold">
//                   ${item.price}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm">{item.description.substring(0, 100)}</p>
//                 <div className="text-yellow-500 flex">
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>
//               <button
//                 onClick={() =>
//                   dispatch(
//                     addToCart({
//                       id: item.id,
//                       title: item.title,
//                       description: item.description,
//                       price: item.price,
//                       category: item.category,
//                       image: item.image,
//                       quantity: 1,
//                     })
//                   )
//                 }
//                 className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
//               >
//                 Add to Cart
//               </button>
//             </div>
//             {/* ========== Product Info End here ================= */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




























// import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/amazoneSlice";

// const Products = () => {
//   const data = useLoaderData();
//   const productsData = data.data;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [category, setCategory] = useState("all");

//   const filterProducts = (category) => {
//     setCategory(category);
//   };

//   const filteredProducts =
//     category === "all"
//       ? productsData
//       : productsData.filter((item) => item.category.toLowerCase() === category);

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4">
//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => filterProducts("all")}
//           className={`py-2 px-4 rounded ${
//             category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => filterProducts("women's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Women's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("men's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Men's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("electronics")}
//           className={`py-2 px-4 rounded ${
//             category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Electronics
//         </button>
//         <button
//           onClick={() => filterProducts("jewelery")}
//           className={`py-2 px-4 rounded ${
//             category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Jewelry
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//               {item.category}
//             </span>
//             {/* ========== Product Image Start here ============== */}
//             <div className="w-full h-auto flex items-center justify-center relative group">
//               <img
//                 className="w-52 h-64 object-contain"
//                 src={item.image}
//                 alt="ProductImg"
//               />
//             </div>
//             {/* ========== Product Image End here ================ */}
//             {/* ========== Product Info Start here =============== */}
//             <div className="px-4 bg-white flex flex-col gap-1 z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
//                   {item.title.substring(0, 20)}
//                 </h2>
//                 <p className="text-sm text-gray-600 font-semibold">
//                   ${item.price}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm">{item.description.substring(0, 100)}</p>
//                 <div className="text-yellow-500 flex">
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   dispatch(
//                     addToCart({
//                       id: item.id,
//                       title: item.title,
//                       description: item.description,
//                       price: item.price,
//                       category: item.category,
//                       image: item.image,
//                       quantity: 1,
//                     })
//                   );
//                 }}
//                 className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
//               >
//                 Add to Cart
//               </button>
//             </div>
//             {/* ========== Product Info End here ================= */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


























































// import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/amazoneSlice";

// const Products = () => {
//   const data = useLoaderData();
//   const productsData = data.data;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [category, setCategory] = useState("all");

//   const filterProducts = (category) => {
//     setCategory(category);
//   };

//   const filteredProducts =
//     category === "all"
//       ? productsData
//       : productsData.filter((item) => item.category.toLowerCase() === category);

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4">
//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => filterProducts("all")}
//           className={`py-2 px-4 rounded ${
//             category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => filterProducts("women's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Women's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("men's clothing")}
//           className={`py-2 px-4 rounded ${
//             category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Men's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("electronics")}
//           className={`py-2 px-4 rounded ${
//             category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Electronics
//         </button>
//         <button
//           onClick={() => filterProducts("jewelery")}
//           className={`py-2 px-4 rounded ${
//             category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Jewelry
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//               {item.category}
//             </span>
//             {/* ========== Product Image Start here ============== */}
//             <div className="w-full h-auto flex items-center justify-center relative group">
//               <img
//                 className="w-52 h-64 object-contain"
//                 src={item.image}
//                 alt="ProductImg"
//               />
//             </div>
//             {/* ========== Product Image End here ================ */}
//             {/* ========== Product Info Start here =============== */}
//             <div className="px-4 bg-white flex flex-col gap-1 z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
//                   {item.title.substring(0, 20)}
//                 </h2>
//                 <p className="text-sm text-gray-600 font-semibold">
//                   ${item.price}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm">{item.description.substring(0, 100)}</p>
//                 <div className="text-yellow-500 flex">
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   dispatch(
//                     addToCart({
//                       id: item.id,
//                       title: item.title,
//                       description: item.description,
//                       price: item.price,
//                       category: item.category,
//                       image: item.image,
//                       quantity: 1,
//                     })
//                   );
//                 }}
//                 className="w-full py-2 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 border border-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
//               >
//                 Add to Cart
//               </button>
//             </div>
//             {/* ========== Product Info End here ================= */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




























// import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/amazoneSlice";
// import womensClothingImage from '../../assets/images/womensClothingImage.jpeg';
// import mensClothingImage from '../../assets/images/mensClothingImage.jpeg';
// import electronicsImage from '../../assets/images/electronicsImage.jpeg';
// import jewelryImage from '../../assets/images/jewelryImage.jpeg';
// import allImage from '../../assets/images/allImage.jpeg';

// const Products = () => {
//   const data = useLoaderData();
//   const productsData = data.data;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [category, setCategory] = useState("all");

//   const filterProducts = (category) => {
//     setCategory(category);
//   };

//   const filteredProducts =
//     category === "all"
//       ? productsData
//       : productsData.filter((item) => item.category.toLowerCase() === category);

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4">
//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => filterProducts("all")}
//           className={`flex flex-col items-center py-2 px-4 rounded ${
//             category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={allImage} alt="All" className="w-12 h-12 object-cover mb-2" />
//           All
//         </button>
//         <button
//           onClick={() => filterProducts("women's clothing")}
//           className={`flex flex-col items-center py-2 px-4 rounded ${
//             category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={womensClothingImage} alt="Women's Clothing" className="w-12 h-12 object-cover mb-2" />
//           Women's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("men's clothing")}
//           className={`flex flex-col items-center py-2 px-4 rounded ${
//             category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={mensClothingImage} alt="Men's Clothing" className="w-12 h-12 object-cover mb-2" />
//           Men's Clothing
//         </button>
//         <button
//           onClick={() => filterProducts("electronics")}
//           className={`flex flex-col items-center py-2 px-4 rounded ${
//             category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={electronicsImage} alt="Electronics" className="w-12 h-12 object-cover mb-2" />
//           Electronics
//         </button>
//         <button
//           onClick={() => filterProducts("jewelery")}
//           className={`flex flex-col items-center py-2 px-4 rounded ${
//             category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={jewelryImage} alt="Jewelry" className="w-12 h-12 object-cover mb-2" />
//           Jewelry
//         </button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
//         {filteredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//               {item.category}
//             </span>
//             {/* ========== Product Image Start here ============== */}
//             <div className="w-full h-auto flex items-center justify-center relative group">
//               <img
//                 className="w-52 h-64 object-contain"
//                 src={item.image}
//                 alt="ProductImg"
//               />
//             </div>
//             {/* ========== Product Image End here ================ */}
//             {/* ========== Product Info Start here =============== */}
//             <div className="px-4 bg-white flex flex-col gap-1 z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
//                   {item.title.substring(0, 20)}
//                 </h2>
//                 <p className="text-sm text-gray-600 font-semibold">
//                   ${item.price}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm">{item.description.substring(0, 100)}</p>
//                 <div className="text-yellow-500 flex">
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   dispatch(
//                     addToCart({
//                       id: item.id,
//                       title: item.title,
//                       description: item.description,
//                       price: item.price,
//                       category: item.category,
//                       image: item.image,
//                       quantity: 1,
//                     })
//                   );
//                 }}
//                 className="w-full py-2 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 border border-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
//               >
//                 Add to Cart
//               </button>
//             </div>
//             {/* ========== Product Info End here ================= */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;



















import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazoneSlice";

import womensClothingImage from '../../assets/images/womensClothingImage.jpeg';
import mensClothingImage from '../../assets/images/mensClothingImage.jpeg';
import electronicsImage from '../../assets/images/electronicsImage.jpeg';
import jewelryImage from '../../assets/images/jewelryImage.jpeg';
import allImage from '../../assets/images/allImage.jpeg';

const Products = () => {
  // Fetching data using useLoaderData hook
  const data = useLoaderData();
  const productsData = data.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to keep track of the selected category
  const [category, setCategory] = useState("all");

  // Function to filter products based on the selected category
  const filterProducts = (category) => {
    setCategory(category);
  };

  // Filtered products based on the selected category
  const filteredProducts =
    category === "all"
      ? productsData
      : productsData.filter((item) => item.category.toLowerCase() === category);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => filterProducts("all")}
          className={`py-2 px-4 rounded ${
            category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterProducts("women's clothing")}
          className={`py-2 px-4 rounded ${
            category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProducts("men's clothing")}
          className={`py-2 px-4 rounded ${
            category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProducts("electronics")}
          className={`py-2 px-4 rounded ${
            category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Electronics
        </button>
        <button
          onClick={() => filterProducts("jewelery")}
          className={`py-2 px-4 rounded ${
            category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Jewelry
        </button>
      </div>

      {/* Filter Images */}
      <div className="flex justify-center gap-4 my-4">
        <img
          src={allImage}
          alt="All"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "all" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("all")}
        />
        <img
          src={womensClothingImage}
          alt="Women's Clothing"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "women's clothing" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("women's clothing")}
        />
        <img
          src={mensClothingImage}
          alt="Men's Clothing"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "men's clothing" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("men's clothing")}
        />
        <img
          src={electronicsImage}
          alt="Electronics"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "electronics" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("electronics")}
        />
        <img
          src={jewelryImage}
          alt="Jewelery"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "jewelery" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("jewelery")}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 lg:hover:scale-105 transition-all z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              {item.category}
            </span>
            {/* ========== Product Image Start here ============== */}
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="ProductImg"
              />
            </div>
            {/* ========== Product Image End here ================ */}
            {/* ========== Product Info Start here =============== */}
            <div className="px-4 bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item.title.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  ${item.price}
                </p>
              </div>
              <div>
                <p className="text-sm">{item.description.substring(0, 100)}</p>
                <div className="text-yellow-500 flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <button
                onClick={(e) => {
                  // Prevent event from bubbling to the parent div
                  e.stopPropagation();
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      image: item.image,
                      quantity: 1,
                    })
                  );
                }}
                className="w-full rounded-md mt-3 bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
            {/* ========== Product Info End here ================= */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
