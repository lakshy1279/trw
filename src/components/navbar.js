import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Navbar()
{
  const [socialmedia,setMedia]=useState({});
  useEffect(()=>{
    axios.get('https://trw-backend-api.herokuapp.com/social/fetch_socialmedia').then((res)=>{
         console.log(res.data);
         setMedia(res.data[0]);
    })
  },[]);
  console.log(socialmedia);
    return (<div>
        <div class="container">
        <div class="menu-btn">
          <i class="fas fa-bars fa-2x"></i>
        </div>
        <nav class="main-nav">
          <img src="/assests/images/logo.png" alt="Logo" />
          <ul class="main-menu">
            <li>
              <a href="/" className="border-bottom: 2px solid #262626">Home</a>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="">Offerings</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
          <ul class="right-menu">
            <li>
              <a href={socialmedia.facebook}><img src="/assests/images/Facebook.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.twitter}><img src="/assests/images/Twitter.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.instagram}><img src="/assests/images/Instagram.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.youtube}><img src="/assests/images/Youtube.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.linkedIn}><img src="/assests/images/Linkedin.svg" alt="" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>)
}

export default Navbar;