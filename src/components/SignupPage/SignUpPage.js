import React from "react";
import { useState } from "react";
import "./Signup.css";
import Logo from "../Logo/logo";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../utils/UserAuthContext";


function Sign_up() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [emailError, setEmailError] = useState('');
  const [acc_number, setAcc_number] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const [error, setError] = useState("");

  const { signUp } = useUserAuth()

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login")
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    
    <div className="form-container">
      <Logo />
      
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Enter your name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />
        </label>
        <br />
        <br />

        <label>
          Enter your email:&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />{" "}
        </label>
        <br />
        <br />

        <label>
          Enter your access number:&nbsp;&nbsp;
          <input
            type="text"
            name="acc_number"
            className="border-2 border-gray-200 py-1 rounded-lg"
            value={acc_number}
            onChange={(e)=>setAcc_number(e.target.value)} 
          />{" "}
        </label>
        <br />
        <br />

        <label>
          Enter your course:&nbsp;&nbsp;
          <input
            type="text"
            name="course"
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />{" "}
        </label>
        <br />
        <br />

        <label>
          Confirm your password:&nbsp;&nbsp;
          <input
            type="password"
            name="confirm_password"
            value={confirm_password}
            onChange={(e)=>setConfirm_password(e.target.value)}
            className="border-2 border-gray-200 py-1 rounded-lg"
          />{" "}
        </label>
        <br />
        <br />

        <center>
          {error && <p>{error}</p>}
          <button
            className="submit-btn"
            style={{
              margin: "0 20px",
              backgroundColor: "blue",
              color: "white",
            }}
            // onClick={() => navigate("/")}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
    //  <div>
    //    <Logo/>
    //    <form onSubmit={handleSubmit}>
    //     <label>
    //       Enter your name:
    //       <input
    //         type="text"
    //         name="username"
    //         value={name}
    //         onChange={(event)=>{setName(event.target.value)}}
    //       />
    //     </label>
    //     <br />
    //     <br />

    //     <label>
    //       Enter your email:
    //       <input
    //         type="text"
    //         name="email_input"
    //         value={email}
    //         onChange={(event)=>{ setEmail(event.target.value) }}
    //       />{" "}
    //     </label>
    //     <br />
    //     <br />

    //     <label>
    //       Enter your access number:
    //       <input
    //         type="text"
    //         name="access number"
    //         value={acc_number}
    //         onChange={(event)=>{setAcc_number(event.target.value)}}
    //       />{" "}
    //     </label>
    //     <br />
    //     <br />

    //     <label>
    //       Enter your course:
    //       <input
    //         type="text"
    //         name="course"
    //         value={course}
    //         onChange={(event)=>{setCourse(event.target.value)}}
    //       />{" "}
    //     </label>
    //     <br />
    //     <br />

    //     <label>
    //       Enter your password:
    //       <input
    //         type="text"
    //         name="password"
    //         // value={password}
    //         onChange={(event)=>{setPassword(event.target.value)}}
    //       />{" "}
    //     </label>
    //     <br />
    //     <br />

    //     <label>
    //       Confirm password:
    //       <input
    //         type="text"
    //         name="confirm_password"
    //         // value={confirm_password}
    //         onChange={(event)=>{setConfirm_password(event.target.value)}}
    //       />{" "}
    //     </label>

    //     <br /><br />
    //     <input type="submit" value="Submit" />
    //   </form>
    //  </div>
  );
}

export default Sign_up;
