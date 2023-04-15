import { Link, useNavigate } from "react-router-dom";
import "./navigationBar.css";
import Logo from "../Logo/logo";
import { useUserAuth } from "../../utils/UserAuthContext";

function NavigationBar() {
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
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
        {user ? (
          <button
            style={{
              margin: "0 20px",
              backgroundColor: "white",
              color: "blue",
            }}
            onClick={handleLogOut}
          >
            Log out
          </button>
        ) : (
          <>
            <button
              style={{
                margin: "0 20px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => navigate("/sign_up")}
            >
              Sign Up
            </button>
            <button
              style={{
                margin: "0 20px",
                backgroundColor: "white",
                color: "blue",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
