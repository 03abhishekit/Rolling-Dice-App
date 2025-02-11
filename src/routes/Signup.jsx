import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; 

function Signup({ setIsSignIn }) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      setError("Please enter valid mail and password ");
      return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        const user = response.user;
        setIsSignIn(true);
        navigate("/Login");
      })
      .catch((error) => {
        setError("Already Registered User"); 
      });
  };

  return (
    <div className="signup-container">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={data.email}
          onChange={(e)=>setData({...data, email: e.target.value})}
          className="input-field"
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={data.password}
          onChange={(e)=>setData({...data, password:e.target.value})}
          className="input-field"
        />
        <br /><br />
        {error && <p className="error-message">{error}</p>} 
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
