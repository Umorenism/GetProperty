// // import React, { useState } from "react";
// import { AiOutlineFileImage } from "react-icons/ai";
// import { Link } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { Link, useNavigate } from "react-router-dom";

// export const Signup = () => {
//   // const [state, setState] = useState({});
//   // const [photo, setPhoto] = useState("");

//   // // const dispatch = useDispatch();
//   // const navigate = useNavigate();

//   // const handleState = (e: any) => {
//   //   setState((prev) => {
//   //     return { ...prev, [e.target.name]: e.target.value };
//   //   });

//   //   const handleSubmit = () => {
//   //     return null
//   //   };
//   // };
//   return (
//     <div className="absolute top-0 left-0 h-screen w-screen bg-img flex justify-center items-center">
//       <div className="md:w-[27.5vw] w-[80.7vw] h-[67.5vh] rounded-lg  justify-center flex flex-col bg-[#fff]">
//         <h2 className="text-[#171097] text-center m-[2.5rem 0] text-3xl font-bold py-4">
//           Sign up
//         </h2>

//         <form className="flex flex-col items-center gap-[42px]">
//           <label
//             htmlFor="photo"
//             className="flex bg-gray-600 items-center h-[50px] rounded-full flex-col justify-center w-[50px] cursor-pointer gap-[0.75rem]"
//           >
//             <AiOutlineFileImage />
//           </label>
//           <input
//             id="photo"
//             type="file"
//             style={{ display: "none" }}
//             // onChange={(e: any) => setPhoto(e.target.files[0])}
//           />
//           <input
//             className="w-[80%] focus:border-green-300 focus:border-2 rounded-xl py-2 outline-none border p-4 "
//             type="text"
//             name="username"
//             placeholder="Username"
//             // onChange={handleState}
//           />
//           <input
//             className="w-[80%] rounded-xl focus:border-green-300 focus:border-2  py-2 p-4 outline-none border "
//             type="email"
//             name="email"
//             placeholder="Email.."
//             // onChange={handleState}
//           />

//           <input
//             className="w-[80%] focus:border-green-300 focus:border-2  rounded-xl py-2 p-4 outline-none border "
//             type="password"
//             name="password"
//             placeholder="password.."
//             // onChange={handleState}
//           />
//           <button className="bg-[#171097] text-white rounded-md p-2">
//             Register
//           </button>
//           <p className="mb-4">
//             Already have an account?{" "}
//             <Link to="/signin" className="text-[#171097] ">
//               Sign in
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };
