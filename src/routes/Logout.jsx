import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; 

function Logout() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        console.error("Sign out error:", error.message);
      });
  };

  return (
    <> 
    <h3>Please Logout</h3>
    <div className="logout-container">
      <button onClick={handleSignOut} className="logout-button">Logout Out</button>
    </div>
    </>
  );
}

export default Logout;
