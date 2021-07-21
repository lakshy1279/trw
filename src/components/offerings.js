import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import MoreEvents from './moreevent';
function Offering()
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
         <section class="offering-sec1" id="sec1">
            <Navbar/>
            <header class="showcase">
        <div class="offering-showcase-main">
          <div class="offering-content">
            <div class="container">
              <div class="offering-main-content-showcase">
                <div class="show-box1">
                  <h1>TRW 2021</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi arcu, ut sem at dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
         </section>
         <div class="container">
         <section class="sec-1-text">
        <div class="sec-1-main">
          <div>
            <h1>Quam tristique vestibulum nulla</h1>
          </div>
          <div>
            <h3>Proin vitae justo, venenatis velit arcu</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
              justo, facilisis consectetur euismod. Non vulputate ultrices
              venenatis felis, id platea platea nibh natoque. Venenatis
              pellentesque blandit enim turpis sagittis enim, felis dictum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
              justo, facilisis consectetur euismod. Non vulputate ultrices
              venenatis felis, id platea. pellentesque blandit enim turpis
              sagittis enim, felis dictum.
            </p>
          </div>
        </div>
      </section>
     <section class="presented-partners">
        <div class="partners-main">
          <div>
            <h1>Presented with our partners</h1>
          </div>
          <div class="partner-group slideshow-container">
            <div class="button-rotate">
              <button class="button btn-animation prev" onclick="plusSlides(-1)">
                <i class="fas fa-chevron-right"> </i
                ><i class="fas fa-chevron-right"> </i>
              </button>
            </div>
            <div class="group-cards sec-1 mySlides fade">
              <div class="group-cards-sec-1">
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">AEIOU1</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Elisa Tawil</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Tiara</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Unburn</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
              </div>
              <div class="group-cards-sec-2">
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Elisa Tawil</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Unburn</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">AEIOU</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
                <div class="card">
                  <div class="div-img">
                    <img src="/assests/images/Image-3.png" alt="" />
                  </div>
                  <div>
                    <span><p id="even">Tiara</p></span>
                    <span><p id="odd">Lorem ipsum</p></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button class="button rotate-90 n" onclick="plusSlides(1)" style={{float: "right"}}>
                <i class="fas fa-chevron-left"> </i
                ><i class="fas fa-chevron-left"> </i>
              </button>
            </div>
          </div>
        </div>
        <div class="group-svg">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
      </section>
      <section class="search-filter">
        <div class="search-filter-main">
          <div class="search-bar">
            <div class="bar">
              <input
                type="text"
                placeholder="search for events"
                class="input-text"
                name=""
                id=""
              />
            </div>
            <div class="btn-class">
              <button class="search-btn">
                <img src="/assests/images/Vector1.svg" alt="" /> Search
              </button>
            </div>
            <div class="filter">
              <button class="search-btn" onclick="togglebtn()" id="hide">
                <img src="/assests/images/Vector2.svg" alt="" /><span id="hide-text">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* filters */}
      <section class="filters" id="filter">
        <div class="filters-main">
          <div class="dropdown-div one">
            <ul>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown"
                  > <span class="lan"> Category </span> <img src="/assests/images/Arrow.svg" class="icon-arrow" alt=""/></a>
                <hr class="line-one" />
                <ul class="dropdown-menu">
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Healing</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Healing</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="dropdown-div two">
            <ul>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown"
                  > <span class="lan"> Theme </span><img src="/assests/images/Arrow.svg" class="icon-arrow" alt=""/></a>
                <hr class="line-one" />
                <ul class="dropdown-menu">
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" />
                      <span>Colonisation and Geopolitics</span>
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Slavery</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Genocide / Ethnic Cleansing</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Castesim</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#">
                      <input type="checkbox" name="" id="check" /><span>
                        Religious Divisons</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Gender-based Oppression</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span>
                        Environmental Degradation</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span>
                        Economic Disparity</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Other</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="dropdown-div one">
            <ul>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown"
                  > <span class="lan"> Time Zone </span><img src="/assests/images/Arrow.svg" class="icon-arrow" alt=""/></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#"
                      ><input type="radio" name="a" id="check" /><span
                        >IST</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="radio" name="a" id="check" /><span
                        >CET</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="radio" name="a" id="check" /><span
                        >EST</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="dropdown-div one">
            <ul>
              <li class="dropdown">
                <a href="#" data-toggle="dropdown"
                  > <span class="lan"> Language </span><img src="/assests/images/Arrow.svg" class="icon-arrow" alt=""/></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span>English</span>
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Spanish</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >French</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >German</span
                      >
                      <hr class="line"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><input type="checkbox" name="" id="check" /><span
                        >Hindi</span
                      ></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="calendar">
            <div class="calendar-div1">
              <span class="month">July</span>
            </div>
            <div class="calendar-div">
              <span class="calender-date">19</span>
            </div>
            <div class="calendar-div">
              <span class="calender-date">20</span>
            </div>
            <div class="calendar-div">
              <span class="calender-date">21</span>
            </div>
            <div class="calendar-div">
              <span class="calender-date">22</span>
            </div>
            <div>
              <span class="calender-date">23</span>
            </div>
          </div>
        </div>
      </section>
        {/* See all events */}
        <section class="see-all-events">
        <h1 id="see-all">See All Events</h1>
        <MoreEvents/>
        {/* <div class="more">
          {moreEvents.length>0&&moreEvents.slice(0,4).map((data)=>{
            return (  <div class="more-img1">
            <img src={data.image} alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              {data.category}
            </div>
            <div class="img-bottom">
              <div class="img-text">
              <Link to={`/events/${data._id}`}>
                <h1>
                 {data.title}
                </h1>
                </Link>
                <p id="date">{new Date(data.fromdate).getDate()} {new Date(data.fromdate).toLocaleDateString('default',{month:'long'})} {new Date(data.fromdate).getFullYear()}</p>
                <p id="time">IST: {new Date(data.fromdate).getHours()}:{new Date(data.fromdate).getUTCMinutes()}, CET: {new Date(data.enddate).getHours()}:{new Date(data.fromdate).getUTCMinutes()}, EST: 19:00</p>
                <p id="by">{data.eventby}</p>
              </div>
            </div>
          </div>)
          })}
      </div> */}
      </section>
      <hr style={{border: "1px solid #CBCBD4", marginTop:"44px", marginBottom: "40px"}}/>
      <section class="see-all-events">
        <h1 id="see-all">See All Events</h1>
        <MoreEvents/>
         {/* <div class="more"> */}
          {/* <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
              
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-3.jpg" alt="" />
            <div
              style={{color: "#4269f2" ,backgroundColor:"white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-4.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
          </div>
        </div>*/ }
      {/* </div> */}
      </section>
      <hr style={{border: "1px solid #CBCBD4", marginTop:"44px", marginBottom: "40px"}}/>
      <section class="see-all-events">
        <h1 id="see-all">See All Events</h1>
        <MoreEvents/>
        {/* <div class="more">
          <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-1.jpg" alt="" />
            <div
              style={{color: "#18a558", backgroundColor: "white"}}
              class="top-right"
            >
              Healing
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-3.jpg" alt="" />
            <div
              style={{color: "#4269f2" ,backgroundColor:"white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
            </div>
          </div>
          <div class="more-img1">
            <img src="/assests/images/event-4.jpg" alt="" />
            <div
              style={{color: "#4269f2", backgroundColor: "white"}}
              class="top-right"
            >
              Leading
            </div>
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                  Lorem ipsum dolor sit amet, elit con sectetur aliquam ipsum
                </h1>
                <p id="date">19th July 2021</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">by Pierce Starre & Nicholas Ball</p>
              </div>
          </div>
        </div>
      </div>  */}
      </section>
      <hr style={{border: "1px solid #CBCBD4", marginTop:"44px", marginBottom: "40px"}}/>
      <section class="next-prev">
        <div class="next-prev-main">
          <div class="previous">
            <span class="pre">Previous</span>
          </div>
          <div class="numbers">
            <span class="actives">1</span>
            <span class="non-active">2</span>
            <span class="non-active">3</span>
            <span class="non-active">4</span>
            <span class="non-active">5</span>
            <span class="non-active">.....</span>
            <span class="non-active">Last</span>
          </div>
          <div class="next">
            <span class="nex">Next</span>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</div>)
}

export default Offering;