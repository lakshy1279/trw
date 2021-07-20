import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel, { consts } from "react-elastic-carousel"; 
function Facilitator()
{
    const [faciliator,setFacilitator]=useState([]);
    useEffect(()=>{
      axios.get('https://lakshy12.herokuapp.com/facilitator/fetch').then((res)=>{
           console.log(res.data);
           setFacilitator(res.data);
      })
    },[]);
    let breakPoints = [
      { width: 1, itemsToShow: 1,itemsToScroll:1, pagination: false },
      { width: 550, itemsToShow: 2,itemsToScroll:2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3,itemsToScroll:3, pagination: false },
      { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 6, pagination: false },
      { width: 1750, itemsToShow: 7, pagination: false },
    ];
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
    return ( <div>
        <section class="members">
        <div class="community-body">
          <div class="fact-sec">
            <div>
              <h1>Faciliators</h1>
            </div>
            <br />
            <div class="flex-members-main">
              <div class="button-chevron-main">
                <button class="button-chevron"><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>
              </div>
              <div class="partners">
             
              {/* <Carousel
            itemsToShow={3}
            itemsToScroll={1}
            breakPoints={breakPoints}
            renderArrow={customArrow}
          > */}
                  {faciliator.length>0&&faciliator.slice(0,4).map((data,index)=>{
                      return (
                      <div key={index} className="fac1">
                      <div>
                        <img src={data.photo} alt="" />
                      </div>
                      <div className="img-bottom-card1">
                        <div>
                          <span style={{fontSize: "14px" ,fontWeight: "700"}}
                          >{data.firstname} {data.lastname}</span>
                        </div>
                        <div>
                          <span style={{fontSize: "10px" ,opacity: "0.5"}}>{data.country}</span>
                        </div>
                        <div class="profile">
                          <span>View Profile</span>
                        </div>
                      </div>
                    </div>)
                  })}

              {/* </Carousel> */}
            </div> 
            <div class="button-chevron-main justify">
              <button class="button-chevron"><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></button>
            </div>
          </div>
        </div>
            </div>
      </section>
</div>)
}

export default Facilitator;