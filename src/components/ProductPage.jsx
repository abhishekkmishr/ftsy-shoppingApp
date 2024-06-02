// import React from "react";
// import { useParams, useLoaderData } from "react-router-dom";

// const Checkout = () => {
//   const { id } = useParams();
//   const products = useLoaderData();
//   const product = products.find((item) =>item.id === id);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <img className="w-full h-64 object-contain" src={product.image} alt={product.title} />
//         <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
//         <p className="mt-2 text-gray-600">{product.description}</p>
//         <p className="mt-2 text-lg font-semibold">${product.price}</p>
//         <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//           Complete Purchase
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;







// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useLoaderData, useParams } from 'react-router-dom';

// const ProductPage = () => {
//   // Get the product id from the URL parameters
//   const { id } = useParams();
//   // Fetch data using useLoaderData hook
//   const data = useLoaderData();
//   const products = data.data;
//   // Find the product with the matching id
//   const product = products.find(product => product.id == id);

//   // If no product is found, display a message
//   if (!product) {
//     return <div>Product not found{id}</div>;
//   }

//   return (
//     // Main container for the product page
//     <div className='mx-auto m-auto bg-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 mt-3 item-center justify-center'>
//       <div 
//         className='bg-white h-auto item-center justify-center border-[1px] rounded-md border-gray-300 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
//         <div className="w-full h-auto flex items-center justify-center relative group">
//           {/* Product Image */}
//           <img className='w-52 h-64 object-contain'
//                src={product.image} 
//                alt="ProductImage" />
//         </div>
//         <div className='px-4 bg-white flex flex-col gap-1 z-10 items-center justify-center'>
//           {/* Product Title */}
//           <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold items-center justify-center'>
//             {product.title.substring(0, 20)}
//           </h2>
//           {/* Product Price */}
//           <p className='text-lg text-gray-700 font-semibold items-center justify-center'>
//             ₹{product.price}
//           </p>
//         </div>
//         {/* Product Description */}
//         <p className="font-bodyFont text-lg items-center justify-center">
//           {product.description.substring(0, 100)}
//         </p>
//       </div>
//     </div>

//     // Previous simpler version of product page layout (commented out)
//     // <div className="product-page">
//     //   <h1>{product.title}</h1>
//     //   <p>{product.description}</p>
//     //   <img className='w-52 h-64 object-contain'
//     //     src={product.image} 
//     //     alt={product.title} />
//     //   <p>Price: ₹{product.price}</p>
//     // </div>
//   );
// };

// export default ProductPage;













import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/amazoneSlice";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const products = data.data;
  const product = products.find((product) => product.id == id);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.amazonReducer.products);
  const cartItem = cartProducts.find((item) => item.id == id);
  
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const handleIncreaseQuantity = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    } else if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div className="text-center text-2xl mt-10">Product not found{id}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <img
              className="w-64 h-64 object-contain mx-auto"
              src={product.image}
              alt="Product"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-center bg-white p-6 shadow-lg rounded-lg"
        >
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">₹{product.price}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-lg font-medium">
              Quantity:
            </label>
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              readOnly
              className="w-20 p-2 mx-2 border rounded-lg text-center"
            />
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;


