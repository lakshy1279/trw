import Navbar from './navbar';
import Community from './community';
import Contact from './contact';
import Footer from './footer';
import axios from "axios";
import renderHTML from "react-render-html";
import React, { useEffect, useState, setState } from "react";
function About()
{
    const [about, setAbout] = useState({});
    const [flag,setFlag]=useState(0);
  useEffect( async() => {
    axios
      .get(`https://lakshy12.herokuapp.com/about1/fetch_about`)
      .then((res) => {
        //   const blogs = res.data.reverse();
        console.log(res.data[0]);
        setAbout(res.data[0]);
        setFlag(1);
        //   console.log(people);
      });
  }, []);
    return ( <div>
         <section class="sec" id="sec">
        <Navbar/>
        <header class="showcase">
        <div class="showcase-main">
          <div class="content">
            <div class="container">
              <div class="main-content-showcase">
                <div class="show-box1">
                  <h1>{flag>0&&about.heading}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    curabitur nisi, egestas consectetur sed faucibus leo,
                    consequat. Leo, habitasse adipiscing convallis ac. Dictumst
                    arcu quam dolor urna adipiscing quam eget nibh. Eget nunc
                    aliquet ut id at quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        </section>
        <div class="container">
      <section class="objectives">
        <div class="group">
          <div class="obj-sec1">
            <div>
              <h1>Our Objectives</h1>
            </div>
            <div>
              <p>
              {flag>0&&renderHTML(about.ourObjective)}
              </p>
            </div>
            {/* <div>
              <ul class="obj-list">
                <li>
                  A in pellentesque morbi elementum convallis maecenas. Molestie
                  enim morbi ut.
                </li>
                <li>
                  Facilisis viverra ac sagittis, habitasse morbi maecenas purus.
                  Morbi elementum.
                </li>
                <li>
                  Sed egestas donec a mauris. Viverra in vestibulum lectus
                  vehicula eu.
                </li>
              </ul>
            </div> */}
          </div>
          <div class="obj-sec2">
            <div>
              <h1>Mission</h1>
              <p>
                {flag>0&&about.Mission}
              </p>
            </div>
            <div class="hand">
              <img src="/assests/images/hand.png" alt="" />
            </div>
            <div>
              <h1>Vision</h1>
              <p>
                {flag>0&&about.Vision}
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div class="container">
      <Community/>
      </div>
      <Contact/>
      <Footer/>
</div>)
}

export default About;