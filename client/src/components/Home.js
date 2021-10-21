import React, { useState } from "react";
import bgImg from "../assets/bg-img.png";
import bg from "../assets/bg.png";
import Chat from "../assets/chat.svg";
import Login from "./Home/Login";
import SignUp from "./Home/SignUp";
import "./Home.scss";
const Home = () => {
  const [signUpToggle, setSignUpToggle] = useState(false);
  return (
    <div id="home">
      <div className="side-banner">
        <img className="background" src={bgImg} alt="backgroundImage" />
        <img className="layer" src={bg} alt="layerImage" />
        <div className="side-banner-body">
          <img src={Chat} alt="" />
          <p>Converse with anyone</p>
          <p>with any language</p>
        </div>
      </div>
      <div className="main-container">
        <div className="header">
          <p className="message">
            {signUpToggle
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
          <div className="btn" onClick={() => setSignUpToggle(!signUpToggle)}>
            <p>{signUpToggle ? "Login" : "Create account"} </p>
          </div>
        </div>
        <div className="form-container">
          {signUpToggle ? <SignUp /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default Home;
