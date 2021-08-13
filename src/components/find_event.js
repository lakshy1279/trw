import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Find_event(props) {
  const [Event_Data,setEventData]=useState({})
  useEffect(()=>{
    axios.get('https://lakshy12.herokuapp.com/home/fetch_section1').then((res)=>{
      console.log("find_event",res.data);
        setEventData(res.data[0]);
    })
  },[]);
    return (
        <div>
            <section className="findevent">
        <div className="event">
          <div>
            <h2>{Event_Data.heading}</h2>
            <p className="para">
             {Event_Data.subtext}
            </p>
            <p class="star">{Event_Data.buttontext}</p>
            <button class="button" style={{marginLeft: '52px', marginTop: '24px'}}>
              <Link to="/find_event"><span className="button-font-margin" style={{color:"white"}}>{Event_Data.buttonname} </span
              ></Link><i className="fas fa-chevron-right"></i
              ><i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="grid">
            <img className="img-1" src={Event_Data.image} alt="" />
            {/* <img className="img-3" src="/assests/images/gridimg2.jpg" alt="" /> */}
            {/* <img className="img-2" src="/assests/images/gridimg1.jpg" alt="" /> */}
          </div>
        </div>
      </section>
        </div>
    );
}

export default Find_event;