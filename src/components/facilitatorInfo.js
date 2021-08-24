import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios";
import renderHTML from 'react-render-html';
import MoreEvents from './moreevent';
import { useParams } from "react-router-dom";
function FacilitatorInfo(props) {
  const { id } = useParams();
    const [facilitator,setFacilitator]=useState({});
    const [Events,setEvents]=useState([]);
    const [flag,setFlag]=useState(0);
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/facilitator/fetch/${id}`).then((res)=>{
            console.log(res.data);
            setFacilitator(res.data);
            setEvents(res.data.events);
            setFlag(1);
        });
    },[])
    return (
        <div>
            <div className="container">
            <section>
           <Navbar/>
           </section>
           <section class="org-details">
        <div class="org-main">
          <div style={{display: "flex",
    flexDirection: "column",
    gridGap: "4.5rem",
    alignItems: "center"}}>
            <div  style={{background: "#ffffff",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    flexShrink: "1"}}>
              <img src={facilitator.photo} style={{width: "100%",
    height: "100%",
    boxShadow: "1px 1px 16px rgb(0 0 0 / 25%)",
    borderRadius: "12px"}} />
            </div>
            <div class="org-details-info">
              <div class="header" style={{marginBottom:"24px"}}>
                <h1>{facilitator.firstname}{' '}{facilitator.lastname}</h1>
              </div>

              <div className="link" style={{marginBottom:"24px"}}>
                <i class="fas fa-phone-alt"></i>
                <span id="link-blue">{facilitator.contactno}</span>
              </div>
              <div className="link" style={{marginBottom:"24px"}}>
                <span class="envelope">{facilitator.email}</span>
              </div>
              <div class="para">
                <p>
                {flag>0&&renderHTML(facilitator.profile)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="see-all-events">
        <h1 id="see-all">Events by {facilitator.firstname}{' '}{facilitator.lastname}</h1>
        <div class="more">
        {flag>0&&Events.length>0&&Events.slice(0, 4).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.facilitator[0]}
                        _id={item._id}
                      />
                    );
                  })}
        </div>
      </section>

      <section class="see-all-events mt">
        <h1 id="see-all">Programs by {facilitator.firstname}{' '}{facilitator.lastname}</h1>
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

export default FacilitatorInfo;