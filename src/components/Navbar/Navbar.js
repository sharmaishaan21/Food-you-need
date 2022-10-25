import React from "react";
import "./Navbar.css";
import Login from "../Modals/Login";
import SignUp from "../Modals/Signup";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
          alt="Netflix Logo"
        />
        <div className="btn-container">
          <Login />
          <SignUp />
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Netflix_logo.png"
            alt="Smaller Logo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
