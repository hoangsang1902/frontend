// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../slices/authSlice";
// import { StyledForm } from "./StyledForm";

// const Login = () => {
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
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(loginUser(user));
//   };

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit}>
//         <h2>Login</h2>
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
//           {auth.loginStatus === "pending" ? "Submitting" : "Login"}
//         </button>
//         {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
//       </StyledForm>
//     </>
//   );
// };

// export default Login;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { StyledForm } from "./StyledForm";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      toast.success("Login successful!", {
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
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="rememberMe"
          checked={user.rememberMe}
          onChange={(e) => setUser({ ...user, rememberMe: e.target.checked })}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit">
        {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
      </button>
      {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      <a href="/register" className="register-link">
        No account? Register now
      </a>
      <a href="/forgot-password" className="forgot-password">
        Forgot password?
      </a>
    </StyledForm>
  );
};

export default Login;
