import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg"
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log("logged in user", user);
  console.log("user is Authenticated", isAuthenticated);
  //console.log("logged in user", user);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/Weather" activeClassName="active" >Weather</Link>
            </li>
            <li>
            <Link to="/Information" activeClassName="active" >Information</Link>
            </li>
            <li>
              <a href="=Home">About us</a>
            </li>
            <li>
              <a href="/Premium">Premium</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul>
            {isAuthenticated && (
              <li>
                <p> {user.name} </p>
              </li>
            )}
            &nbsp;
            {isAuthenticated ? (
              <li>
                <button className="log" style={{ marginRight: 20 }} 
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="log" style={{ marginRight: 10 }}  onClick={() => loginWithRedirect()}>User Login</button>
              </li>
            )}
           
            <li>
              <button className="log" style={{ marginRight: 20 }}  onClick={() => loginWithRedirect()}>Admin Login</button>
            </li>
          </ul>

          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
