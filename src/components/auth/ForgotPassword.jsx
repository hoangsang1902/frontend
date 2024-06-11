import { useState } from "react";
import { StyledForm } from "./StyledForm";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button type="submit">Send Reset Link</button>
    </StyledForm>
  );
};

export default ForgotPassword;
