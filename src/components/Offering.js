import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Find_event from './find_event';
import Post from './post';
function Offering(props) {
    return (
        <div>
            <section class="off-sec1" id="sec1">
              <Navbar/>
              <header class="showcase">
        <div class="offering-showcase-main">
          <div class="offering-content">
            <div class="container">
              <div class="offering-main-content-showcase">
                <div class="show-box1">
                  <h1>TRW 2021</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi arcu, ut sem at dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
            </section>
            <div className="container">
                <Find_event/>
                <div style={{marginTop:"10px"}}>
                <Post/>
                </div>
                <section class="programs">
        <div class="program-main">
          <div class="heading-prog">
            <h1>Programs</h1>
          </div>
          <div class="card-prog-sec-1">
            <div class="card-prog">
              <div class="img-card-1">
                <img src="/assests/images/prog-2.jpg" alt="" />
              </div>
              <div class="text-card-1">
                <h3>Monthly Programs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales libero tempus, diam feugiat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sodales libero tempus, diam
                  feugiat.
                </p>
              </div>
            </div>
            <div class="card-prog">
              <div class="img-card-1">
                <img src="/assests/images/prog-1.jpg" alt="" />
              </div>
              <div class="text-card-1">
                <h3>Monthly Programs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales libero tempus, diam feugiat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sodales libero tempus, diam
                  feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="past-event">
        <div class="program-main">
          <div class="heading-prog">
            <h1>Past Events</h1>
          </div>
          <div class="card-prog-sec-1">
            <div class="card-prog">
              <div class="img-card-1">
                <img src="/assests/images/pastevent-1.jpg" alt="" />
              </div>
              <div class="text-card-1">
                <h3>Speacial/Annual Events</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales libero tempus, diam feugiat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sodales libero tempus, diam
                  feugiat.
                </p>
              </div>
            </div>
            <div class="card-prog">
              <div class="img-card-1">
                <img src="/assests/images/pastevent-2.jpg" alt="" />
              </div>
              <div class="text-card-1">
                <h3>TBD - Other/Standalone Events</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales libero tempus, diam feugiat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sodales libero tempus, diam
                  feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
            <div style={{marginTop:"152px",background:"#fcf6f1"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default Offering;