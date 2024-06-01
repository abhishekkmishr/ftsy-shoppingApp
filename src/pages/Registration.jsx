// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { darkLogo } from "../assets/index";

// const Registration = () => {
//   const auth = getAuth();

//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cPassword, setCPassword] = useState("");

//   // Error Message start
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errCPassword, setErrCPassword] = useState("");
//   const [firebaseErr,setFirebaseErr] =useState("") 
//    // Loading State start
//    const [Loading,setLoading] =useState(false)
//    const [successMsg,setSuccessMsg] =useState("")


//   // Handle funtion start
//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
  
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   const handleCPassword = (e) => {
//     setCPassword(e.target.value);
//     setErrCPassword("");
//   };

//   // Email validation start
//   const emailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };

//   // Submit button start
//   const handleRegistration = (e) => {
//     e.preventDefault();
//     if (!clientName) {
//       setErrClientName("Enter your name");
//     }
//     if (!email) {
//       setErrEmail("Enter your email");
//       setFirebaseErr("")
//     } else {
//       if (!emailValidation(email)) {
//         setErrEmail("Enter a valid email");
//       }
//     }
//     if (!password) {
//       setErrPassword("Enter your password");
//     } else {
//       if (password.length < 6) {
//         setErrPassword("Passwords must be at least 6 characters");
//       }
//     }
//     if (!cPassword) {
//       setErrCPassword("Confirm your password");
//     } else {
//       if (cPassword !== password) {
//         setErrCPassword("Password not matched");
//       }
//     }

//     if (
//       clientName &&
//       email &&
//       emailValidation(email) &&
//       password &&
//       password.length >= 6 &&
//       cPassword &&
//       cPassword === password
//     ) {
//       Loading(true)
//       createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     updateProfile(auth.cur.currentUser,{
//       displayName: clientName,
//     })
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user)
//     setLoading(false)
//     setSuccessMsg("Account Created Successfully")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     // const errorMessage = error.message;
//     if(errorCode.includes("auth/email.already-in-use")){
//       setFirebaseErr("Email already in use try another one")
//     }
//     // ..
//   });

//       // =========== Firebase Registration End here ===============
//       setClientName("");
//       setEmail("");
//       setPassword("");
//       setCPassword("");
//       setErrCPassword("");
//       setFirebaseErr("")
//     }
//   };
//   return (
//     <div className="w-full">
//       <div className="w-full bg-gray-100 pb-10">
//         <form className="w-[370px] mx-auto flex flex-col items-center">
//           <Link to="/">
//             <img className="w-32" src={darkLogo} alt="darkLogo" />
//           </Link>
//           <div className="w-full border border-zinc-200 p-6">
//             <h2 className="font-titleFont text-3xl font-medium mb-4">
//               Create Account
//             </h2>
//             <div className="flex flex-col gap-3">
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Your name</p>
//                 <input
//                   onChange={handleName}
//                   value={clientName}
//                   type="text"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errClientName && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errClientName}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">
//                   Email or mobile phone number
//                 </p>
//                 <input
//                   onChange={handleEmail}
//                   value={email}
//                   type="email"
//                   className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errEmail && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errEmail}
//                   </p>
//                 )}
//                 {firebaseErr && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {firebaseErr}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Password</p>
//                 <input
//                   value={password}
//                   onChange={handlePassword}
//                   type="password"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errPassword && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errPassword}
//                   </p>
//                 )}
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-sm font-medium">Re-enter Password</p>
//                 <input
//                   onChange={handleCPassword}
//                   value={cPassword}
//                   type="password"
//                   className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
//                 />
//                 {errCPassword && (
//                   <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className="italic font-titleFont font-extrabold text-base">
//                       !
//                     </span>
//                     {errCPassword}
//                   </p>
//                 )}
//                 <p className="text-xs text-gray-600">
//                   Passwords must be at least 6 characters.
//                 </p>
//               </div>
//               <button
//                 onClick={handleRegistration}
//                 className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
//               >
//                 Continue
//               </button>
//             </div>
//             <p className="text-xs text-black leading-4 mt-4">
//               By Continuing, you agree to Amazon's{" "}
//               <span className="text-blue-600">Conditions of Use </span>and{" "}
//               <span className="text-blue-600">Privace Notice.</span>
//             </p>
//             <div>
//               <p className="text-xs text-black">
//                 Already have an account?{" "}
//                 <Link to="/signin">
//                   <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//                     Sign in{" "}
//                     <span>
//                       <ArrowRightIcon />
//                     </span>
//                   </span>
//                 </Link>
//               </p>
//               <p className="text-xs text-black -mt-2">
//                 Buying for work?{" "}
//                 <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//                   Create a free business account
//                 </span>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
//         <div className="flex items-center gap-6">
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Conditions of Use
//           </p>
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Privacy Notice
//           </p>
//           <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
//             Privacy Notice
//           </p>
//         </div>
//         <p className="text-xs text-gray-600">
//           © 1996-2023, ReactBd.com, Inc. or its affiliates
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Registration;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkLogo } from "../assets/index";

const Registration = () => {
  const auth = getAuth(); // Firebase authentication instance

  // State variables for user input and error handling
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Event handlers for input fields
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // Function to validate email format
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Function to handle user registration
  const handleRegistration = (e) => {
    e.preventDefault();

    // Validation checks for each input field
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Password not matched");
      }
    }

    // If all validations pass, proceed with user creation
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
          });
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          setSuccessMsg("Account Created Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email already in use, try another one");
          }
          setLoading(false);
        });

      // Reset form fields and error messages
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Registration form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img className="mx-auto h-12 w-auto" src={darkLogo} alt="darkLogo" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
            {/* Input fields */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="client-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="client-name"
                  name="name"
                  type="text"
                  onChange={handleName}
                  value={clientName}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your name"
                />
                {/* Error message for name field */}
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              {/* Email field */}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleEmail}
                  value={email}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {/* Error message for email field */}
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errEmail}
                  </p>
                )}
                {/* Firebase error message */}
                {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {firebaseErr}
                  </p>
                )}
              </div>
              {/* Password field */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handlePassword}
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {/* Error message for password field */}
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
              {/* Confirm password field */}
              <div>
                <label htmlFor="c-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="c-password"
                  name="cPassword"
                  type="password"
                  onChange={handleCPassword}
                  value={cPassword}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Re-enter Password"
                />
                {/* Error message for confirm password field */}
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errCPassword}
                  </p>
                )}
              </div>
            </div>
            {/* Password length requirement */}
            <p className="text-xs text-gray-600">
              Passwords must be at least 6 characters.
            </p>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </div>
            {/* Loading indicator and success message */}
            {loading && <p className="text-center text-indigo-500">Loading...</p>}
            {successMsg && <p className="text-center text-green-500">{successMsg}</p>}
          </form>
          {/* Additional links */}
          <div className="text-center text-sm text-gray-600">
            <p>
              By continuing, you agree to Etsy's{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Conditions of Use
              </Link>{" "}
              and{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Notice
              </Link>.
            </p>
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in <ArrowRightIcon className="inline-block" />
              </Link>
            </p>
            <p className="mt-2">
              Buying for work?{" "}
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create a free business account
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="flex justify-center space-x-6">
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Conditions of Use
          </Link>
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Privacy Notice
          </Link>
          <Link to="#" className="text-xs text-gray-500 hover:text-gray-900">
            Help
          </Link>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © 1996-2024, YourCompany.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default Registration;

