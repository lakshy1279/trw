import React from 'react';
import Navbar from './navbar';
import Community from './community';
import Contact from './contact';
import Footer from './footer';
function About()
{
    return ( <div>
         <section class="sec" id="sec">
        <Navbar/>
        <header class="showcase">
        <div class="showcase-main">
          <div class="content">
            <div class="container">
              <div class="main-content-showcase">
                <div class="show-box1">
                  <h1>Truth Reconciliation Work</h1>
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
                Lacus ullamcorper pretium viverra in vestibulum lectus vehicula
                eu. Quis imperdiet etiam molestie enim morbi ut lorem malesuada
                viverra. Cras bibendum sit dui interdum porttitor malesuada
                morbi sagittis odio. Enim ultricies suspendisse netus eu,
                ultrices.
              </p>
            </div>
            <div>
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
            </div>
          </div>
          <div class="obj-sec2">
            <div>
              <h1>Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                massa malesuada placerat cras ornare sit cras. Elit praesent
                placerat facilisi ut consectetur amet, sit.
              </p>
            </div>
            <div class="hand">
              <img src="/assests/images/hand.png" alt="" />
            </div>
            <div>
              <h1>Vision</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                massa malesuada placerat cras ornare sit cras. Elit praesent
                placerat facilisi ut consectetur amet, sit.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Community/>
      <Contact/>
      <Footer/>
</div>)
}

export default About;