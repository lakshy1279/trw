import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Footer()
{
  const [socialmedia,setMedia]=useState({});
  useEffect(()=>{
    axios.get('https://trw-backend-api.herokuapp.com/social/fetch_socialmedia').then((res)=>{
         console.log(res.data);
         setMedia(res.data[0]);
    })
  },[]);
    return ( <div>
         <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="fo-sec1">
            <img src="/assests/images/logo.png" alt="Logo" />
            <ul>
            <li>
              <a href={socialmedia.facebook} target="_blank" rel="noopener noreferrer"><img src="/assests/images/Facebook.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.twitter} target="_blank" rel="noopener noreferrer"><img src="/assests/images/Twitter.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.instagram} target="_blank" rel="noopener noreferrer"><img src="/assests/images/Instagram.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.youtube} target="_blank" rel="noopener noreferrer"><img src="/assests/images/Youtube.svg" alt="" /></a>
            </li>
            <li>
              <a href={socialmedia.linkedIn} target="_blank" rel="noopener noreferrer"><img src="/assests/images/Linkedin.svg" alt="" /></a>
            </li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul class="quicklinks">
              <li><a href="/" class="a">Home</a></li>
              <li><a href="/about" class="a">About</a></li>
              <li><a href="/offering" class="a">Offerings</a></li>
              <li><a href="/blog" class="a">Blog</a></li>
              <li><a href="/contactus" class="a">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Other Links</h3>
            <ul class="quicklinks">
              <li><a href="" class="a">Terms and Conditions</a></li>
              <li><a href="" class="a">Privacy and policy</a></li>
              <li><a href="" class="a">Support</a></li>
              <li><a href="" class="a">Community</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{border: '1px solid white'}} />
      <div class="container">
        <div class="fot-flex">
          <div style={{flexGrow: '1', textAlign: 'center'}}>
            <p style={{color: 'grey', paddingTop: '20px', paddingBottom: '20px'}}>
              All Rights Reserved 2021
            </p>
          </div>
          <div style={{justifySelf: 'flex-end', width: '40px', height: '40px'}}>
            <a href="#sec1">
              <img src="/assests/images/Vector.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
</div>)
}

export default Footer;