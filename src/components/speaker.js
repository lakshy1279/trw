import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Speaker()
{
    return ( <div>
          <section class="members speak">
        <div class="community-body">
          <div class="fact-sec">
            <div>
              <h1>Speakers</h1>
            </div>
            <br />
            <div class="flex-members-main">
              <div class="button-chevron-main">
                <button class="button-chevron"><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>
            </div>
              <div class="partners">
              <div class="fac1">
                <img src="/assests/images/f1.jpg" alt="" />
                <div class="img-bottom-card1">
                  <div>
                    <span style={{fontSize: "14px", fontWeight: "700"}}
                    >Beatrace Wade</span>
                  </div>
                  <div>
                    <span style={{fontSize: "10px", opacity: "0.5"}}>Switzerland</span>
                  </div>
                  <div class="profile">
                    <span>View Profile</span>
                  </div>
                </div>
              </div>
              <div class="fac1">
                <img src="/assests/images/f2.jpg" alt="" />
                <div class="img-bottom-card1">
                    <div>
                      <span style={{fontSize: "14px", fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px", opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div>
              <div class="fac1">
                <img src="/assests/images/f4.jpg" alt="" />
                <div class="img-bottom-card1">
                    <div>
                      <span style={{fontSize: "14px", fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px", opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div>
              <div class="fac1">
                <img src="/assests/images/f4.jpg" alt="" />
                <div class="img-bottom-card1">
                    <div>
                      <span style={{fontSize: "14px", fontWeight: "700"}}
                      >Beatrace Wade</span>
                    </div>
                    <div>
                      <span style={{fontSize: "10px", opacity: "0.5"}}>Switzerland</span>
                    </div>
                    <div class="profile">
                      <span>View Profile</span>
                    </div>
                  </div>
              </div>
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

export default Speaker;