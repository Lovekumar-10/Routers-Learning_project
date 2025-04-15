import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  const [isLogin , setIsLogin] = useState(false);

  const navigate =  useNavigate();

  const login = ()=>{
    setIsLogin(true)
    navigate(`/dashboard`)
  }
  const logOut = ()=>{
    setIsLogin(false);
  }


  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">App-X</h2>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>

          {!isLogin && (
            <>  
              <Link to={`/`}>Home</Link>
              <Link to={`/about`}>About</Link>
              <Link to={`/product`}>Product</Link>
              <Link to={`/contact`}>Contact</Link>
              <button to={`sinup`} onClick={login} className="signup-btn">Log-In</button>

            </>
          )}
          
          {isLogin &&  (
          <>
          <Link to={`/dashboard`}>Dashboard</Link>
          <Link to={`/profile`}>Profile</Link>
          <button to={`sinup`} onClick={logOut} className="signup-btn">Log-Out</button>
          </>
          )}
          
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
