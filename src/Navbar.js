import React, { useState } from "react";
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
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">


        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>gro
            <span>w</span>eather
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="=Home">Home</a>
            </li>
            <li>
              <a href="=Home">Weather</a>
            </li>
            <li>
              <a href="=Home">Information</a>
            </li>
            <li>
              <a href="=Home">About us</a>
            </li>
            <li>
              <a href="premium">Premium</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul>
              <li>{isAuthenticated && (
              <li>
                <p> {user.name} </p>
              </li>
            )}
            </li>
            &nbsp;
             {isAuthenticated ? (
              <li>
                <button className="log"
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="log" onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section 
       <section className="hero-section">
        <p>Welcome to </p>
        <h1>Agro Weather</h1>
      </section>  */}
    </>
  );
};

export default Navbar;