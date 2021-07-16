import React from 'react';
import Navbar from './navbar';
import MoreEvents from './moreevent';
import Facilitator from './facilitator';
import Speaker from './speaker';
import Footer from './footer';
function EventsInternal()
{
    return ( <div className="temp">
        <section>
    <Navbar />
    </section>
    <div class="container">
    <section class="event-details">
        <div class="event-main">
          <div class="event-sec1">
            <iframe
              width="100%"
              height="350"
              class="frame"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            >
            </iframe>
          </div>
          <div class="event-sec2">
            <div><h3 id="main">Event Details</h3></div>
            <div class="event-details-sec2">
                <div class="event-box">
                    <div><h3>Event</h3></div>
                    <div><p>: Tempor posuere imperdiet consequat est et feugiat.</p></div>
                </div>
                <div class="event-box" style={{marginTop: "6px"}}>
                    <div><h3>Date</h3></div>
                    <div><p>: 19th July 2021</p></div>
                </div>
                <div class="event-box" style={{marginTop: "6px"}}>
                    <div><h3>Time</h3></div>
                    <div><p>: IST: 8:00, CET: 12:00, EST: 19:00</p></div>
                </div>
                <div class="event-box" style={{marginTop: "6px"}}>
                    <div><h3>Link</h3></div>
                    <div> <a href=""><p id="link">: https://registrationlink.com/</p></a></div>
                </div>
            </div>
            <div style={{alignSelf: "flex-end",marginTop: "10px"}}>
                <input type="button" value="Register" class="button1"/>
            </div>
          </div>
        </div>
      </section>
      <Facilitator/>
      <Speaker/>
      <section class="partners-grp">
          <h1>Organsiations</h1>
          <div class="flex-members-main slideshow-container">
            <div class="button-class justify-start">
              <button class="button-chevron" onclick="plusSlides(-1)">
                  <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div class="main-partners sec-1 mySlides fade" style={{display: "grid"}}>
                <div class="card1">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                </div>
                <div class="card1">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                </div>
                <div class="card1">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                </div>
                <div class="card1">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                </div>
            </div>
            <div class="button-class justify">
              <button class="button-chevron" onclick="plusSlides(1)">
                  <i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i>
              </button>
            </div>
            </div>
            </section>
            <section class="description">
          <div class="description-main">
              <div class="row-1">
                  <div class="row-sec-1">
                      <img src="/assests/images/video1.jfif" alt=""/>
                  </div>
                  <div class="row-sec-2">
                      <div class="row-sec-heading">
                          <div class="heading-text">
                              <h1>Tempor posuere imperdiet consequat est et feugiat.</h1>
                          </div>
                          <div class="heading-label">
                              <button class="label">Heading</button>
                          </div>
                      </div>
                      <div class="row-sec-para">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim, maecenas vitae.
                          </p>
                      </div>
                  </div>
              </div>
              <div class="row-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim, maecenas vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim, maecenas vitae.
                  </p>
              </div>
              <div class="row-3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit. luctus tellus arcu eget eu velit et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim, maecenas vitae.</p>
              </div>
              <div class="row-4">
                  <button class="button" id="padding-button">Register Now</button>
              </div>
          </div>
      </section>
      <div style={{marginTop:"109px",borderTop:"1px solid #cbcbd4"}}>
      <MoreEvents/>
      </div>
      <hr style={{border: "1px solid #CBCBD4" ,
        marginTop: "68px",
        marginBottom:"23px"}}/>
        {/* <!-- Next-prev --> */}
      <section class="next-prev">
        <div class="next-prev-main">
          <div class="previous">
            <span class="pre">Previous</span>
          </div>
          <div class="trw">
            <a href=""><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i><span id="trw">TRW 2021</span ></a>
          </div>
          <div class="next">
            <span class="nex">Next</span>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</div>)
}

export default EventsInternal;