import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios";
import renderHTML from 'react-render-html';
function Organisation(props) {
    const [organisation,setOrganisation]=useState({});
    const [flag,setFlag]=useState(0);
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch/6100f95a19cf874fe487f846`).then((res)=>{
            console.log(res.data);
            setOrganisation(res.data);
            setFlag(1);
        });
    })
    return (
        <div>
            <div className="container">
            <section>
           <Navbar/>
           </section>
           <section class="org-details">
        <div class="org-main">
          <div class="org-main-sec-1">
            <div class="org-image">
              <img src={organisation.logo} alt="" />
            </div>
            <div class="org-details-info">
              <div class="header">
                <h1>{organisation.name}</h1>
              </div>
              <div class="link">
                <i class="fas fa-external-link-alt"></i>
                <span id="link-blue">{organisation.url}</span>
              </div>
              <div class="para">
                <p>
                {flag>0&&renderHTML(organisation.profile
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(0, 691))}
                </p>
              </div>
            </div>
          </div>
          <div class="org-main-sec-2">
            <div class="paragraphtwo">
              <p>
              {flag>0&&renderHTML(organisation.profile
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(691))}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="see-all-events">
        <h1 id="see-all">Events by ‘{organisation.name}’</h1>
        <div class="more">
          <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-girl.jfif" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-img-5.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-4.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
        </div>
        <div class="next-prev-main" style={{paddingBottom:"24px",borderBottom: "1px solid #cbcbd4"}}>
          <div class="previous">
            <span class="pre">Previous</span>
          </div>
          <div class="next">
            <span class="nex">Next</span>
          </div>
        </div>
      </section>

      <section class="see-all-events mt">
        <h1 id="see-all">Programs by ‘Organisation name’</h1>
        <div class="more">
          <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-girl.jfif" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-img-5.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-4.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
        </div>
        <div class="next-prev-main" style={{paddingBottom:"24px",borderBottom: "1px solid #cbcbd4"}}>
          <div class="previous">
            <span class="pre">Previous</span>
          </div>
          <div class="next">
            <span class="nex">Next</span>
          </div>
        </div>
      </section>
           </div>
           <div style={{marginTop:"152px"}}>
    <Footer/>
    </div>
        </div>
    );
}

export default Organisation;