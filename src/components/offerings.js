import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import { Link, useHistory } from 'react-router-dom';
import MoreEvents from './moreevent';
import { useAlert } from 'react-alert';
import { func } from 'prop-types';
function Offering()
{
  const [moreEvents,setMoreEvents]=useState([]);
  const [healingEvents,setHealingEvents]=useState([]);
  const [leadingEvents,setLeadingEvents]=useState([]);
  const [category,setCategory]=useState([]);
  const [query,setQuery]=useState("");
  const [flag,setFlag]=useState(false);
  function sortFunction(a,b){  
    var dateA = new Date(a.fromdate).getTime();
    var dateB = new Date(b.fromdate).getTime();
    return dateA > dateB ? 1 : -1;  
};
const history = useHistory();
const alert = useAlert();
  useEffect(async ()=>{
    const eventlist=await axios.get('https://trw-backend-api.herokuapp.com/blog/get_all_events');
        //  console.log(res.data);
        const sorteddata=await eventlist.data.sort(sortFunction);
        console.log("sorted data",sorteddata);
         let temp=sorteddata;
         console.log(temp);
         setMoreEvents(temp);
         const healingevent=eventlist.data.filter((item)=>{
             if(item.category.toLowerCase()==='healing')
             {
               return item;
             }
         });
         setHealingEvents(healingevent);
         const leadingEvent=await eventlist.data.filter((item)=>{
          if(item.category.toLowerCase()==='leading')
          {
            return item;
          }
      });
      setLeadingEvents(leadingEvent);
      axios
      .get(`https://lakshy12.herokuapp.com/blog/get_event_cat`)
      .then((res) => {
        const eventCategories = res.data;
        console.log(eventCategories);
         setCategory(eventCategories);
      });
  },[]);
  function handleQuery(e)
  {
     setQuery(e.target.value.trim());
  }
  function searchResult()
  {
    console.log(query);
    if (!query) {
      alert.show("Please Enter Something To Search");
    } else {
      const result = moreEvents.filter((event) => {
        if (
          event.title.toLowerCase() === query.toLowerCase() ||
          event.category.toLowerCase() === query.toLowerCase() ||
          (event.facilitator.length>0&&event.facilitator.map((data)=>{
            if(data===query.toLowerCase())
              return true;
          }))||(event.organisation.length>0&&event.organisation.map((data)=>{
            if(data===query.toLowerCase())
              return true;
          }))||(event.speaker.length>0&&event.speaker.map((data)=>{
            if(data===query.toLowerCase())
              return true;
          }))
        ) {
          return event;
        }
      });
      localStorage.setItem("searcheventResult", JSON.stringify(result));
      history.push("/searchevent");
    }
  }
  function changeFlag()
  {
    if(!flag)
    setFlag(true);
    else
    setFlag(false);
  }
  function togglebtn() {
    if (_hide.innerText === "Hide") {
      _filter.className="fadeOut"
      _hide.innerText = "Filter";
    } else {
      _filter.className="fadeIn"
      _hide.innerText = "Hide";
    }
    console.log("button clicked");
    console.log(_hide.innerText);
    console.log(_filter.className);
  }
  let _hide=React.createRef();
  let _filter=React.createRef();
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
          <div class="search-bar1">
            <div class="bar">
              <input
                type="text"
                placeholder="search for events"
                class="input-text"
                onChange={(e)=>handleQuery(e)}
              />
            </div>
            <div class="btn-class">
              <button class="search-btn" onClick={searchResult}>
                <img src="/assests/images/Vector1.svg" alt="" /> Search
              </button>
            </div>
            <div class="filter">
              <button class="search-btn" onClick={togglebtn} id="hide">
                <img src="/assests/images/Vector2.svg" alt="" /><span id="hide-text" ref={function(el)
                {
                   _hide=el;
                }}>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* filters */}
      <section className="fadeOut" id="filter" ref={function(el)
                {
                   _filter=el;
                }} >
        <div class="filters-main">
          <div class="dropdown-div one">
            <ul>
            <li class="dropdown">
                <a data-toggle="dropdown"
                  onClick={changeFlag}> <span class="lan"> Category </span> <img src="/assests/images/Arrow.svg" class="icon-arrow" alt=""/></a>
                <hr class="line-one" />
                <ul class={"dropdown-menu "+(flag?'show':'hide')}>
                {category.length>0&&category.map((data)=>{
                return (
                  <li>
                  <a href="#"
                    ><input type="checkbox" name="" id="check" /><span
                      >{data.event_category}</span>
                    <hr class="line"
                  /></a>
                </li>
                )
              })}
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
        <div className="more">
        {moreEvents.slice(0, 4).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.facilitator[0]}
                        _id={item._id}
                      />
                    );
                  })}
                  </div>
      </section>
      <hr style={{border: "1px solid #CBCBD4", marginTop:"44px", marginBottom: "40px"}}/>
        <div className="more">
        {healingEvents.slice(0, 4).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.facilitator[0]}
                        _id={item._id}
                      />
                    );
                  })}
                  </div>
      <hr style={{border: "1px solid #CBCBD4", marginTop:"44px", marginBottom: "40px"}}/>
        <div className="more">
        {leadingEvents.slice(0, 4).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.facilitator[0]}
                        _id={item._id}
                      />
                    );
                  })}
                  </div>
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