import React from 'react';

function Navbar()
{
    return (<div>
        <div class="container">
        <div class="menu-btn">
          <i class="fas fa-bars fa-2x"></i>
        </div>
        <nav class="main-nav">
          <img src="/assests/images/logo.png" alt="Logo" />
          <ul class="main-menu">
            <li>
              <a href="" className="border-bottom: 2px solid #262626">Home</a>
            </li>
            <li><a href="">About</a></li>
            <li><a href="">Offerings</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
          <ul class="right-menu">
            <li>
              <a href=""><img src="/assests/images/Facebook.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/assests/images/Twitter.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/assests/images/Instagram.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/assests/images/Youtube.svg" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="/assests/images/Linkedin.svg" alt="" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>)
}

export default Navbar;