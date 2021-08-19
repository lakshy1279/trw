
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel, { consts } from "react-elastic-carousel";
import renderHTML from "react-render-html";
import Navbar from './navbar';
import MoreEvents from './moreevent';
import Facilitator from './facilitator';
import Speaker from './speaker';
import Footer from './footer';
function EventsInternal({match})
{
  const [event,setEvent]=useState({});
  const [flag,setFlag]=useState(0);
  const [description,setDescription]=useState([]);
  const [organisation, setOrganisation] = useState([]);
  const [moreEvents,setMoreEvents]=useState([]);
  let breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    {
      width: 550,
      itemsToShow: 2,
      pagination: false,
    },
    { width: 850, itemsToShow: 4, pagination: false },
    { width: 1150, itemsToShow: 5 },
    { width: 1450, itemsToShow: 6, pagination: false },
    { width: 1750, itemsToShow: 7, pagination: false },
  ];

  
  useEffect(async ()=>{
    console.log(match.params);
    const { id } = match.params;
    console.log(id);
    axios

      .get(
        `https://lakshy12.herokuapp.com/blog/get_event_ById/${id}`
      )
      .then(async (res) => {
        console.log(res.data);
        const temp=await res.data.description.split('</p>');
        console.log("temp",temp);
        setEvent(res.data);
        setDescription(temp);
        setFlag(1);
      });
    async function getOrganisation() {
      const org = await axios.get(`https://lakshy12.herokuapp.com/organisation/fetch`);
      setOrganisation(org.data);
    }
    getOrganisation();
    const eventlist=await axios.get('https://trw-backend-api.herokuapp.com/blog/get_all_events');
    const sorteddata=await eventlist.data;
    console.log("sorted data",sorteddata);
     let temp=sorteddata;
     console.log(temp);
     setMoreEvents(temp);
  }, []);

  function customArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <div style={{ alignSelf: "center" }}>
          <button className="arrows">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
          </button>
          </div>
      ) : (
        <button className="arrows">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </button>
      );
    return (
      <p style={{ alignSelf: "center" }} onClick={onClick} disabled={isEdge}>
        {pointer}
      </p>
    );
  }

  return (<div className="temp">
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
              <div><p>:{flag>0&&event.title}.</p></div>
          </div>
          <div class="event-box" style={{marginTop: "6px"}}>
              <div><h3>Date</h3></div>
              <div><p>: {flag>0&&new Date(event.fromdate).getDate()} {new Date(event.fromdate).toLocaleDateString('default',{month:'long'})} {new Date(event.fromdate).getFullYear()}</p></div>
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
        <Facilitator />
        <Speaker />
        <section class="partners-grp">
          <h1>Organsiations</h1>
          <div className="logo-slider">
            <Carousel
              itemsToShow={4}
              itemsToScroll={1}
              breakPoints={breakPoints}
              renderArrow={customArrow}
            
            >
              {organisation.map((org, index) => {
                return (
                  <div className="logo-card">
                    <div className="logo-container">
                      <img src={org.logo} alt="logo" />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
        <section class="description">
          <div class="description-main">

              <div class="row-1">
                  <div class="row-sec-1">
                      <img src={event.image} alt=""/>
                  </div>
                  <div class="row-sec-2">
                      <div class="row-sec-heading">
                          <div class="heading-text">
                              <h1>{event.title}</h1>
                          </div>
                          <div class="heading-label">
                              <button class="label">{flag>0&&event.category}</button>
                          </div>
                      </div>
                      <div class="row-sec-para">
                          {flag>0&&renderHTML(event.description
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(0, 675))}
                      </div>
                  </div>
              </div>
               <div class="row-2">
               {flag>0&&renderHTML(event.description
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(675))}
              </div>
              <div class="row-4">
                  <button class="button" id="padding-button">Register Now</button>
              </div>
          </div>
        </section>
        <div style={{ marginTop: "109px", borderTop: "1px solid #cbcbd4" }}>
        <h1 style={{marginTop:"50px",marginBottom:"30px"}}>More Events</h1>
        <div className="more">
        {moreEvents.slice(0, 4).map((item, index) => {
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
        </div>
        <hr
          style={{
            border: "1px solid #CBCBD4",
            marginTop: "68px",
            marginBottom: "23px",
          }}
        />
        {/* <!-- Next-prev --> */}
        <section class="next-prev">
          <div class="next-prev-main">
            <div class="previous">
              <span class="pre">Previous</span>
            </div>
            <div class="trw">
              <a href="">
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-left"></i>
                <span id="trw">TRW 2021</span>
              </a>
            </div>
            <div class="next">
              <span class="nex">Next</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default EventsInternal;
