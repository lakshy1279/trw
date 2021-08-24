import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios";
import renderHTML from 'react-render-html';
import MoreEvents from './moreevent';
import Progrow from './progrow';
import { useParams } from "react-router-dom";
function Organisation(props) {
  const { id } = useParams();
    const [organisation,setOrganisation]=useState({});
    const [programs,setPrograms]=useState([]);
    const [Events,setEvents]=useState([]);
    const [facilitator,setFacilitator]=useState([]);
    const [flag,setFlag]=useState(0);
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch/${id}`).then((res)=>{
            console.log(res.data);
            setOrganisation(res.data);
            setEvents(res.data.events);
            setPrograms(res.data.program);
            setFacilitator(res.data.facilitator);
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
                <span id="link-blue"><a target="_blank" style={{color:'blue'}} href={organisation.url}>{organisation.url}</a></span>
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
        <h1 id="see-all">Events by {organisation.name}</h1>
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
      {/* <section class="see-all-events">
        <h1 id="see-all">Facilitators with {organisation.name}</h1>
        <div class="partners">
              {flag>0&&facilitator.length>0&&facilitator.slice(0,4).map((data)=>{
                return (  <div class="fac">
                <img src={data.photo} alt="" />
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '14px', fontWeight: '700'}}
                    >{data.firstname}{" "}{data.lastname}</span
                  ><br />
                  <span style={{fontSize: '10px', opacity: '0.5'}}>{data.country}</span
                  ><br />
                  <span
                    class="profile"
                    style={{
                      position: 'relative',
                      top: '31px',
                      fontWeight: '700',
                      fontSize: '12px'}}
                    >View Profile</span
                  >
                </div>
              </div>)
              })}
            </div>
      </section> */}
      <section class="see-all-events mt">
        <h1 id="see-all">Programs by {organisation.name}</h1>
        <div class="more">
        {flag>0&&programs.length>0&&programs.slice(0, 4).map((item, index) => {
                    return (
                      <Progrow
                        key={index}
                        image={item.photo}
                        title={item.heading}
                        facilitator={item.facilitator}
                        date={item.date}
                        _id={item._id}
                      />
                    );
                  })}
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