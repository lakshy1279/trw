import React from 'react';
import { Link } from 'react-router-dom';

function Find_event(props) {
    return (
        <div>
            <section className="findevent">
        <div className="event">
          <div>
            <h2>Find the right event that fits your interests</h2>
            <p className="para">
              A in pellentesque morbi elementum convallis maecenas. Facilisis
              viverra ac sagittis, habitasse morbi maecenas purus. Sed egestas
              donec a mauris.
            </p>
            <p class="star">Interested in our events?</p>
            <button class="button" style={{marginLeft: '52px', marginTop: '24px'}}>
              <Link to="/find_event"><span className="button-font-margin" style={{color:"white"}}>See All Events </span
              ></Link><i className="fas fa-chevron-right"></i
              ><i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="grid">
            <img className="img-1" src="/assests/images/gridimg3.jpg" alt="" />
            <img className="img-3" src="/assests/images/gridimg2.jpg" alt="" />
            <img className="img-2" src="/assests/images/gridimg1.jpg" alt="" />
          </div>
        </div>
      </section>
        </div>
    );
}

export default Find_event;