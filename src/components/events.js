import React, { useEffect, useState } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';
import MoreEvents from './moreevent';
function Event()
{
  const [moreEvents,setMoreEvents]=useState([]);
  const [recEvents,setRecEvents]=useState([]);
  function sortFunction(a,b){  
    var dateA = new Date(a.fromdate).getTime();
    var dateB = new Date(b.fromdate).getTime();
    return dateA > dateB ? 1 : -1;  
};
  useEffect(()=>{
    axios.get('https://trw-backend-api.herokuapp.com/blog/get_all_events').then(async (res)=>{
        //  console.log(res.data);
        const sorteddata=await res.data.sort(sortFunction);
        console.log("sorted data",sorteddata);
         let temp=sorteddata;
         console.log(temp);
         setMoreEvents(temp);
         setRecEvents(temp);
    })
  },[]);
    return (
        <div>
        <div className="container">
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
              <span className="button-font-margin">See All Events </span
              ><i className="fas fa-chevron-right"></i
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

      {/* <!-- More Events --> */}
      <MoreEvents/>
      {/* <!-- Recently Added Events --> */}
      <section className="recently-events">
        <h1>Recently Added Events</h1>
        <div className="more">
          {recEvents.length>0&&recEvents.slice(4,8).map((item)=>{
            return (<div className="more-img1">
              <div className="recent-event-img">
            <img src={item.image} alt="" />
            </div>
            <div
              style={{color: '#18a558', backgroundColor: 'white'}}
              className="top-right"
            >
              {item.category}
            </div>
            <div className="img-bottom">
              <div>
                <time datetime="2014-09-20" className="icon">
                  <strong>{new Date(item.fromdate).toLocaleDateString('default',{month:'long'})}</strong>
                  <span>{new Date(item.fromdate).getDate()}</span>
                </time>
              </div>
              <div style={{textAlign: 'left', paddingLeft: '14px'}}>
                <span className="invisible"
                  >{item.title}: {renderHTML(item.description)}</span
                ><br />
                <span className="pierce">By{" "}{item.eventby}</span
                ><br />
                <span className="date">{new Date(item.fromdate).getDate()}-{new Date(item.enddate).getDate()} {new Date(item.fromdate).toLocaleDateString('default',{month:'long'})} ,{new Date(item.fromdate).getHours()}:{new Date(item.fromdate).getMinutes()}- {new Date(item.enddate).getHours()}:{new Date(item.enddate).getMinutes()} CET</span>
              </div>
            </div>
          </div>)
          })}
        </div>
      </section>
    </div>
    <section class="humanity">
      <div class="humanity-cont">
        <div>
          <img src="/assests/images/image.png" alt="" />
        </div>
        <div style={{paddingRight: '50px' ,paddingLeft: '20px'}}>
          <h2>
            Time for Humanity to step into the New Age of a world that works for
            all
          </h2>
          <br />
          <p class="para">
            A in pellentesque morbi elementum convallis maecenas. Facilisis
            viverra ac sagittis, habitasse morbi maecenas purus. Sed egestas
            donec a mauris.
          </p>
          <br />
          <p class="bell">Get Notifications for latest events</p>
          <button style={{marginLeft:'50px', marginTop: '15px'}} class="button">
            <span class="button-font-margin">See All Events</span>
            <i class="fas fa-chevron-right"></i
            ><i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
    </div>)
}

export default Event;