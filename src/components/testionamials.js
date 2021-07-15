import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Testinomial()
{
  const [testmonials,setTestmonials]=useState([]);
  useEffect(()=>{
    axios.get('https://lakshy12.herokuapp.com/testimonial/fetch').then((res)=>{
         console.log(res.data);
         setTestmonials(res.data);
    })
  },[]);
    return ( <div >
          <section class="testmonials">
        <h1>Testimonials</h1>
        <p>Rhoncus tempor nunc, praesent amet eu hac tortor malesuada tellus</p>
        {testmonials.length>0&&testmonials.slice(0,1).map((data)=>{
          return(<div>
              <div class="test-main">
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-left"></i
              ><i class="fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="main-test">
            <div class="body-main-test">
              <div>
                <img src={data.photo} style={{width: '100%'}} alt="" />
              </div>
              <div>
                <p>
                  {data.content}
                </p>
                <h3>{data.name}</h3>
                <h4>{data.location}</h4>
              </div>
            </div>
          </div>
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-right"></i
              ><i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div>
          <img
            src="/assests/images/Carousel Dots.svg"
            style={{marginTop: '94px'}}
            alt=""
          />
        </div>
          </div>)
        })}
        {/* <div class="test-main">
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-left"></i
              ><i class="fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="main-test">
            <div class="body-main-test">
              <div>
                <img src="/assests/images/Group.svg" style={{width: '100%'}} alt="" />
              </div>
              <div>
                <p>
                  "Quam ullamcorper morbi ut metus quisque morbi. Pretium platea
                  vehicula semper feugiat sagittis, sapien. Accumsan accumsan
                  eget in bibendum. Non, mi feugiat nulla ipsum quisque erat.
                  Lorem sagittis mauris ni."
                </p>
                <h3>Semper phasellus</h3>
                <h4>Nibh ut</h4>
              </div>
            </div>
          </div>
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-right"></i
              ><i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div>
          <img
            src="/assests/images/Carousel Dots.svg"
            style={{marginTop: '94px'}}
            alt=""
          /> */}
        {/* </div> */}
      </section>
</div>)
}

export default Testinomial;