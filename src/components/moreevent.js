import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MoreEvents(props)
{
 
  const item=props;
    return ( <div key={item.key}>
      
            <div className="more-img1">
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
        </div>
</div>)
}

export default MoreEvents;