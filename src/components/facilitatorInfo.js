import React, { useEffect, useState} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from "axios";
import renderHTML from 'react-render-html';
import MoreEvents from './moreevent';
import Progrow from './progrow';
import { useParams,useHistory } from "react-router-dom";
import Carousel, { consts } from "react-elastic-carousel";
function sortFunction(a,b){  
  var dateA = new Date(a.fromdate).getTime();
  var dateB = new Date(b.fromdate).getTime();
  return dateA > dateB ? 1 : -1;  
};
function sortProgram(a,b)
{
   var date1=new Date(a.date);
   var date2=new Date(a.date);
   return date1>date2?1:-1;
}
function FacilitatorInfo(props) {
  const { id } = useParams();
    const [facilitator,setFacilitator]=useState({});
    const [Events,setEvents]=useState([]);
    const [blogs,setBlogs]=useState([]);
    const [programs,setPrograms]=useState([]);
    const [flag,setFlag]=useState(0);
    const history = useHistory();
    useEffect( ()=>{
         axios.get(`https://lakshy12.herokuapp.com/facilitator/fetch/${id}`).then(async (res)=>{
            console.log(res.data);
            setFacilitator(res.data);
            // if(res.data.events.length>0)
            // {
            //   const sortedData=await sortFunction(res.data.events);
            //   setEvents(sortedData);
            // }
            setBlogs(res.data.blogs);
            const sortedProgram=await sortProgram(res.data.program);
            setPrograms(sortedProgram);
            setFlag(1);
        });
    },[]);
    let breakPoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
      {
        width: 550,
        itemsToShow: 2,
        itemsToScroll: 2,
        itemsToScroll: 2,
        pagination: false,
      },
      { width: 850, itemsToShow: 3, itemsToScroll: 3, pagination: false },
      { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 6, pagination: false },
      { width: 1750, itemsToShow: 7, pagination: false },
    ];
    function routeChange(blogId) {
      history.push(`blog/${blogId}`);
    }
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
    return (
        <div>
            <div className="container">
            <section>
           <Navbar/>
           </section>
           <section class="org-details">
        <div class="org-main">
          <div style={{display: "flex",
    flexDirection: "column",
    gridGap: "4.5rem",
    alignItems: "center"}}>
            <div  style={{background: "#ffffff",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    flexShrink: "1"}}>
      <a href={`mailto:${facilitator.email}}`} target="_blank">
              <img src={facilitator.photo} style={{width: "100%",
    height: "100%",
    boxShadow: "1px 1px 16px rgb(0 0 0 / 25%)",
    borderRadius: "12px",
    maxHeight:"400px"}} />
    </a>
            </div>
            <div class="org-details-info">
              <div class="header" style={{marginBottom:"24px"}}>
                <h1>{facilitator.firstname}{' '}{facilitator.lastname}</h1>
              </div>

              <div className="link" style={{marginBottom:"24px"}}>
                <i class="fas fa-phone-alt"></i>
                <span id="link-blue">{facilitator.contactno}</span>
              </div>
              <div className="link" style={{marginBottom:"24px"}}>
                <span class="envelope">{facilitator.email}</span>
              </div>
              <div class="para">
                <p>
                {flag>0&&renderHTML(facilitator.profile)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="see-all-events">
        <h1 id="see-all">Events by {facilitator.firstname}{' '}{facilitator.lastname}</h1>
        <div class="more">
        {flag>0&&Events.length>0&&Events.slice(0, 4).map((item, index) => {
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
      <section class="see-all-events">
        <h1 id="see-all">Blogs by {facilitator.firstname}{' '}{facilitator.lastname}</h1>
        <div className="recentpost-main">
          <Carousel
            itemsToShow={3}
            itemsToScroll={3}
            breakPoints={breakPoints}
            renderArrow={customArrow}
          >
            {blogs.length>0&&blogs.map((data, index) => {
              return (
                <div key={index} className="card">
                  <div className="card-container">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="content-card">
                    <div>
                      <span className="ali">
                        {data.title.substring(0, 15)}...
                      </span>
                      <span
                        className={
                          data.category === "Healing" ? "head" : "lead"
                        }
                      >
                        {data.category}
                      </span>
                    </div>
                    <div>
                      <p style={{marginTop:"28px"}}>
                        {data.description
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(0, 100)}
                        ...
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="button"
                      style={{
                        borderRadius: "0",
                        width: "100%",
                        margin: "0",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                      onClick={() => routeChange(data._id)}
                    >
                      Read More
                      <i
                        className="fas fa-chevron-right"
                        style={{ float: "right" }}
                      ></i>
                      <i
                        className="fas fa-chevron-right"
                        style={{ float: "right" }}
                      ></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* <div style={{alignItems:"center"}}>
          <img
            style={{ marginTop: "80px" }}
            src="/assests/images/Group1.svg"
            alt=""
          />
        </div> */}
      </section>
      <section class="see-all-events mt" style={{marginTop:"70px"}}>
        <h1 id="see-all">Programs by {facilitator.firstname}{' '}{facilitator.lastname}</h1>
        <div class="more">
        {flag>0&&programs.length>0&&programs.slice(0, 4).map((item, index) => {
                    return (
                      <Progrow
                        key={index}
                        image={item.photo}
                        title={item.heading}
                        facilitator={item.facilitator}
                        date={item.date}
                        _id={item._id}
                      />
                    );
                  })}
        </div>
      </section>
           </div>
           <div style={{marginTop:"152px"}}>
    <Footer/>
    </div>
        </div>
    );
}

export default FacilitatorInfo;