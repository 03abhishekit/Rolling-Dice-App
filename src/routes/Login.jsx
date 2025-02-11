import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      setError("Please enter correct email  and password");
      return;
    }

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        const user = response.user;
        navigate("/StartGame");
      })
      .catch((error) => {
        setError("User not registered"); 
      });
  };

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={data.email}
          onChange={(e)=>setData({...data, email : e.target.value})}
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
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
