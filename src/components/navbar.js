import React, { useEffect, useState } from "react";
import axios from "axios";
function Navbar() {
  const [socialmedia, setMedia] = useState({});
  useEffect(() => {
    axios
      .get("https://trw-backend-api.herokuapp.com/social/fetch_socialmedia")
      .then((res) => {
        setMedia(res.data[0]);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="menu-btn">
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <nav className="main-nav">
          <img src="/assests/images/logo.png" alt="Logo" />
          <ul className="main-menu">
            <li>
              <a href="/" className="border-bottom: 2px solid #262626">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="">Offerings</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/offering">Offerings</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
          <ul className="right-menu">
            <li>
              <a
                href={socialmedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href={socialmedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href={socialmedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href={socialmedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href={socialmedia.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Linkedin.svg" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
