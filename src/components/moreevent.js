import React, { useEffect, useState } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';
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
         <section className="more-events">
        <h1>More Events</h1>
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
</div>)
}

export default MoreEvents;