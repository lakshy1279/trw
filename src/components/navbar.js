import React, { useEffect, useState } from "react";
import axios from "axios";
function Navbar() {
  const [socialmedia, setMedia] = useState({});
  const [EventType,setEventType]=useState([]);
  useEffect(() => {
    axios
      .get("https://trw-backend-api.herokuapp.com/social/fetch_socialmedia")
      .then((res) => {
        setMedia(res.data[0]);
      });
      axios
      .get(`https://lakshy12.herokuapp.com/blog/get_event_type`)
      .then((res) => {
        const eventTypes = res.data;
        console.log("types",eventTypes);
        setEventType(eventTypes);
      });
  }, []);

  return (
      <nav>
        <div class="container navbar">
          <input type="checkbox" name="" id="check"/>
          <div class="logo-container">
            <img src="/assests/images/logo.png" alt="" />
          </div>
          <div class="nav-btn">
            <div class="nav-links">
              <ul>
                <li class="nav-link">
                <a href="/" >
               Home
               </a>
                </li>
                <li class="nav-link">
                  <a href="/about">About</a>
                </li>
                <li class="nav-link">
                  <a href="/offering">Offerings</a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <a href="/all_event">Events</a>
                        <div class="dropdown second">
                          <ul>
                            {EventType.length>0&&EventType.map((item)=>{
                              return (
                                  <li class="dropdown-link">
                                  <a href={`/event_type/${item.event_type}`} style={{fontSize:"12px"}}>{item.event_type}</a>
                                </li>)
                            })}
                          </ul>
                        </div>
                      </li>
                      <li class="dropdown-link">
                        <a href="/all_program">Programs</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <a href="/blog">Blog</a>
                </li>
                <li class="nav-link">
                  <a href="contactus">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="log-sign">
              <div>
              <a
                href={socialmedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Facebook.svg" alt="" />
              </a>
              </div>
              <div>
              <a
                href={socialmedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Twitter.svg" alt="" />
              </a>
              </div>
              <div>
              <a
                href={socialmedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Instagram.svg" alt="" />
              </a>
              </div>
              <div>
              <a
                href={socialmedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Youtube.svg" alt="" />
              </a>
              </div>
              <div>
              <a
                href={socialmedia.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assests/images/Linkedin.svg" alt="" />
              </a>
              </div>
            </div>
          </div>
          <div class="hamburger-menu-container">
            <div class="hamburder-menu">
              <div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    // <div>
    //   <div className="container">
    //     <div className="menu-btn">
    //       <i className="fas fa-bars fa-2x"></i>
    //     </div>
    //     <nav className="main-nav">
    //       <img src="/assests/images/logo.png" alt="Logo" />
    //       <ul className="main-menu">
    //         <li>
    //           <a href="/" className="border-bottom: 2px solid #262626">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/about">About</a>
    //         </li>
    //         <li>
    //           <a href="/offering">Offerings</a>
    //         </li>
    //         <li>
    //           <a href="/blog">Blog</a>
    //         </li>
    //         <li>
    //           <a href="/contactus">Contact Us</a>
    //         </li>
    //       </ul>
    //       <ul className="right-menu">
    //         <li>
    //           <a
    //             href="/facilitator_landing"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img src="/assests/images/Facebook.svg" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/program"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img src="/assests/images/Twitter.svg" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href={socialmedia.instagram}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img src="/assests/images/Instagram.svg" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href={socialmedia.youtube}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img src="/assests/images/Youtube.svg" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href={socialmedia.linkedIn}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img src="/assests/images/Linkedin.svg" alt="" />
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Navbar;
