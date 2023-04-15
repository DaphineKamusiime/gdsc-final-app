import { Link, useNavigate } from "react-router-dom";
import "./navigationBar.css";
import Logo from "../Logo/logo";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div>
        {/* logo  */}
        <Logo />
      </div>
      <div className="navlinks-container">
        {/* links  */}
        <Link to="/" style={{ margin: "0 20px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 20px" }}>
          About
        </Link>
        <Link to="/images" style={{ margin: "0 20px" }}>
          Images
        </Link>
      </div>
      <div className="navbtns-container">
        {/* <buttons  */}
        <button
          style={{ margin: "0 20px", backgroundColor: "blue", color: "white" }}
          onClick={() => navigate("/sign_up")}
        >
          Sign Up
        </button>
        <button
          style={{ margin: "0 20px", backgroundColor: "white", color: "blue" }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
