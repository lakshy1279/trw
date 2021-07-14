import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Community()
{
  const [faciliator,setFacilitator]=useState([]);
  useEffect(()=>{
    axios.get('https://lakshy12.herokuapp.com/facilitator/fetch').then((res)=>{
         console.log(res.data);
         setFacilitator(res.data);
    })
  },[]);
    return ( <div>
        <section class="community">
        <div class="community-head">
          <div><h2>Our Community</h2></div>
          <div>
            <button class="button" style={{marginTop: '0'}}>
              <span class="button-font-margin">View all</span>
              <i class="fas fa-chevron-right"></i
              ><i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="community-body">
          <div class="part-sec">
            <div>
              <h1>Partners</h1>
            </div>
            <br />
            <div class="partners">
              <div class="par">
                <img src="/assests/images/p1.png" style={{width: '100%'}} alt="" />
              </div>
              <div class="par">
                <img src="/assests/images/p2.png" style={{width: '50%'}} alt="" />
              </div>
              <div class="par">
                <img src="/assests/images/p3.png" style={{width: '38%'}} alt="" />
              </div>
              <div class="mem">
                <h1>+250</h1>
                <p>Members in the community</p>
              </div>
            </div>
          </div>
          <div class="fact-sec">
            <div>
              <h1>Faciliators</h1>
            </div>
            <br />
            <div class="partners">
              {faciliator.length>0&&faciliator.map((data)=>{
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
               <div class="fac">
                <img src="/assests/images/f4.jpg" alt="" />
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '14px', fontWeight: '700'}}
                    >Beatrace Wade</span
                  ><br />
                  <span style={{fontSize: '10px', opacity: '0.5'}}>Switzerland</span
                  ><br />
                  <span
                    class="profile"
                    style={{
                      position: 'relative',
                      top: '31px',
                      fontWeight: '700',
                      fontSize: '12px'
                    }}
                    >View Profile</span
                  >
                </div>
              </div>
             {/* <div class="fac">
                <img src="/assests/images/f4.jpg" alt="" />
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '14px', fontWeight: '700'}}
                    >Beatrace Wade</span
                  ><br />
                  <span style={{fontSize: '10px', opacity: '0.5'}}>Switzerland</span
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
              </div>
              <div class="fac">
                <img src="/assests/images/f4.jpg" alt="" />
                <div style={{padding: '22px'}}>
                  <span style={{fontSize: '14px', fontWeight: '700'}}
                    >Beatrace Wade</span
                  ><br />
                  <span style={{fontSize: '10px', opacity:'0.5'}}>Switzerland</span
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
</div>)
}

export default Community;