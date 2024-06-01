// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import {
//   deleteItem,
//   resetCart,
//   increaseQuantity,
//   decreaseQuantity,
// } from "../redux/amazoneSlice";
// import { motion } from "framer-motion";
// import { emptyCart } from "../assets";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const products = useSelector((state) => state.amazonReducer.products);
//   const dispatch = useDispatch();
//   // ============ Total Amount Start here ==============
//   const [totalAmt, setTotalAmt] = useState("");
//   useEffect(() => {
//     let price = 0;
//     products.map((item) => {
//       price += item.price * item.quantity;
//       return price;
//     });
//     setTotalAmt(price.toFixed(2));
//   }, [products]);
//   // ============ Total Amount End here ================
//   return (
//     <div className="w-full bg-gray-100 p-4">
//       {products.length > 0 ? (
//         <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
//           <div className="w-full bg-white px-4 col-span-5 xl:col-span-4">
//             {/* ====================== Cart title Start here ======================= */}
//             <div className="font-titleFont hidden xl:flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
//               <h1 className="text-3xl font-semibold">Shopping Cart</h1>
//               <h3 className="text-xl font-semibold">Subtotal</h3>
//             </div>
//             {/* ====================== Cart title End here ========================= */}
//             {/* ====================== Products Start here ========================= */}
//             <div>
//               {products.map((item) => (
//                 <div
//                   key={item.id}
//                   className="w-full border-b-[1px] border-b-gray-300 p-4 md:p-0 md:py-4 flex items-center gap-6"
//                 >
//                   <div className="w-full flex flex-col md:flex-row items-center gap-6">
//                     {/* ====================== Left Start here ============================ */}
//                     <div className="w-full md:w-2/5 xl:w-1/5">
//                       <img
//                         className="w-full h-44 object-contain"
//                         src={item.image}
//                         alt="productImg"
//                       />
//                     </div>
//                     <div className="w-full flex flex-col gap-2 xl:gap-1">
//                       <h2 className="font-semibold text-lg">{item.title}</h2>
//                       <p className="xl:pr-10 text-sm">{item.description}</p>
//                       <p className="text-base">
//                         Unit Price:{" "}
//                         <span className="font-semibold">${item.price}</span>
//                       </p>
//                       <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
//                         <p className="text-base font-normal">Qty:</p>
//                         <p
//                           onClick={() => {
//                             dispatch(decreaseQuantity(item.id));
//                           }}
//                           className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
//                         >
//                           -
//                         </p>
//                         <p className="font-titleFont text-base font-semibold text-amazon_blue">
//                           {item.quantity}
//                         </p>
//                         <p
//                           onClick={() => dispatch(increaseQuantity(item.id))}
//                           className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
//                         >
//                           +
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => dispatch(deleteItem(item.id))}
//                         className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
//                       >
//                         Delete Item
//                       </button>
//                     </div>
//                     {/* ====================== Left End here ============================== */}
//                     {/* ====================== Right Start here =========================== */}

//                     <div className="w-full md:w-24">
//                       <p className="text-lg xl:w-24 font-titleFont font-semibold">
//                         ${item.price * item.quantity}
//                       </p>
//                     </div>
//                     {/* ====================== Right End here ============================= */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* ====================== Products End here =========================== */}
//             <div onClick={() => dispatch(resetCart())} className="w-full py-4">
//               <button className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">
//                 Clear Cart
//               </button>
//             </div>
//           </div>
//           <div className="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-1 bg-white h-52 flex items-center p-4">
//             <div>
//               <p className="flex gap-2 items-start text-sm">
//                 <span>
//                   <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
//                 </span>
//                 Your order qualifies for FREE Shipping Choose this option at
//                 checkout. See details....
//               </p>
//               <div>
//                 <p className="font-semibold px-6 py-1 flex items-center justify-between">
//                   Total: <span className="text-lg font-bold">${totalAmt}</span>
//                 </p>
//               </div>
//               <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
//                 Proceed to Buy
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <motion.div
//           initial={{ y: 70, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="flex justify-center items-center gap-4 py-10"
//         >
//           <div>
//             <img
//               className="w-80 rounded-lg p-4 mx-auto"
//               src={emptyCart}
//               alt="emptyCart"
//             />
//           </div>
//           <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
//             <h1 className="font-titleFont text-xl font-bold">
//               Your Cart feels lonely.
//             </h1>
//             <p className="text-sm text-center">
//               Your Shopping cart lives to serve. Give it purpose - fill it with
//               books, electronics, videos, etc. and make it happy.
//             </p>
//             <Link to="/">
//               <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         </motion.div>
//       )}
//       {/* ============ Product Start here ============== */}
//       {/* ============ Product End here ================ */}
//     </div>
//   );
// };

// export default Cart;

























import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/amazoneSlice";
import { motion } from "framer-motion";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  const dispatch = useDispatch();
  
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {products.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="col-span-4 bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
              <h3 className="text-xl font-semibold text-gray-800">Subtotal</h3>
            </div>
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between border-b py-4"
                >
                  <div className="md:flex items-center gap-4">
                    <img
                      className="w-40 h-40 object-contain rounded-lg"
                      src={item.image}
                      alt="productImg"
                    />
                    <div className="flex flex-col gap-2 mt-4 md:mt-0">
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-base text-gray-800">
                        Unit Price: <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                        <p className="text-base">Qty:</p>
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-amazon_blue font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="mt-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-lg font-semibold text-gray-800">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <p className="flex items-start text-sm text-gray-600 mb-4">
              <CheckCircleIcon className="text-green-500 mr-2" />
              Your order qualifies for FREE Shipping. Choose this option at checkout.
              See details....
            </p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-800 font-semibold">Total:</p>
              <p className="text-lg font-bold text-gray-800">${totalAmt}</p>
            </div>
            <button className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center py-10"
        >
          <img
            className="w-80 mb-4"
            src={emptyCart}
            alt="emptyCart"
          />
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h1 className="text-xl font-bold mb-2">Your Cart feels lonely.</h1>
            <p className="text-sm text-gray-600 mb-6">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
