// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../../slices/authSlice";
// import { StyledForm } from "./StyledForm";

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   console.log(auth);

//   useEffect(() => {
//     if (auth._id) {
//       navigate("/cart");
//     }
//   }, [auth._id, navigate]);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(registerUser(user));
//   };

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="name"
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//         <button>
//           {auth.registerStatus === "pending" ? "Submitting" : "Register"}
//         </button>
//         {auth.registerStatus === "rejected" ? (
//           <p>{auth.registerError}</p>
//         ) : null}
//       </StyledForm>
//     </>
//   );
// };

// export default Register;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { StyledForm } from "./StyledForm";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      toast.success("Registration successful!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button type="submit">
        {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
      </button>
      {auth.registerStatus === "rejected" ? <p>{auth.registerError}</p> : null}
      <a href="/login" className="already-have-account">
        Already have an account? Login here
      </a>
    </StyledForm>
  );
};

export default Register;
