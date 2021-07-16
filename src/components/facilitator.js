import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Facilitator()
{
    const [faciliator,setFacilitator]=useState([]);
    useEffect(()=>{
      axios.get('https://lakshy12.herokuapp.com/facilitator/fetch').then((res)=>{
           console.log(res.data);
           setFacilitator(res.data);
      })
    },[]);
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
                  {faciliator.length>0&&faciliator.map((data)=>{
                      return (<div class="fac1">
                      <div>
                        <img src={data.photo} alt="" />
                      </div>
                      <div class="img-bottom-card1">
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
              
              {/* <div class="fac">
                <img src="./Images/f2.jpg" alt="" />
                <div class="img-bottom-card">
                    <div>
                      <span style={{fontSize: "14px" ,fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px" ,opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div> */}
              {/* <div class="fac">
                <img src="./Images/f4.jpg" alt="" />
                <div class="img-bottom-card">
                    <div>
                      <span style={{fontSize: "14px" ,fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px" ,opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div> */}
              {/* <div class="fac">
                <img src="./Images/f4.jpg" alt="" />
                <div class="img-bottom-card">
                    <div>
                      <span style={{fontSize: "14px" ,fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px" ,opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div> */}
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