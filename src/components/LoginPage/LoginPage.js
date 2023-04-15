import React from "react";
import { useState } from "react";
import "./login.css";
import Logo from "../Logo/logo";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../utils/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { logIn } = useUserAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/content");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="form-container">
      <Logo />
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Enter your Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />{" "}
        </label>
        <br />
        <br />
        <label>
          Enter your password:&nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />
        </label>
        <br />
        <br />
        <center>
        </center>
        <br />
        <br />
        <center>
        {error && <p className="text-red-500">{error}</p>}
          <button
          type="submit"
            className="submit-btn"
            style={{
              margin: "0 20px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;
