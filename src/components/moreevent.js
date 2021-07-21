import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MoreEvents()
{
    const [moreEvents,setMoreEvents]=useState([]);
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
    })
  },[]);
    return ( <div>
        <div className="more">
          {moreEvents.length>0&&moreEvents.slice(0,4).map((item)=>{
            return (<div className="more-img1">
            <img src={item.image} alt="" />
            <div
              style={{color: '#18a558', backgroundColor: 'white'}}
              className="top-right"
            >
              {item.category}
            </div>
            <div class="img-bottom">
              <div class="img-text">
              <Link to={`/events/${item._id}`}>
                <h1>
                 {item.title}
                </h1>
                </Link>
                <p id="date">{new Date(item.fromdate).getDate()} {new Date(item.fromdate).toLocaleDateString('default',{month:'long'})} {new Date(item.fromdate).getFullYear()}</p>
                <p id="time">IST: {new Date(item.fromdate).getHours()}:{new Date(item.fromdate).getUTCMinutes()}, CET: {new Date(item.enddate).getHours()}:{new Date(item.fromdate).getUTCMinutes()}, EST: 19:00</p>
                <p id="by">{item.eventby}</p>
              </div>
              </div>
          </div>)
          })}
        </div>
</div>)
}

export default MoreEvents;