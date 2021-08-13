import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
function Home1()
{
  const [banner_deatil,setDetail]=useState({});
  const [banner_image,setBannerImage]=useState("");
  useEffect(()=>{
    axios.get("https://lakshy12.herokuapp.com/home/fetch_home").then((res)=>{
      console.log("banner",res.data);
      setDetail(res.data[0]);
      setBannerImage(res.data[0].image[0]);
    })
  },[]);
  const nextSlide=()=>{
    setBannerImage(banner_deatil.image[1]);
}
const prevSlide=()=>{
  setBannerImage(banner_deatil.image[0]);
}
    return (
         <div>
            <section style={{background:`url(${banner_image}) no-repeat center center/cover`}}>
              <Navbar/>
             <header className="showcase">
        <div className="showcase-main">
          <div className="content">
            <div className="container">
              <div className="main-content-showcase">
                <h1>{banner_deatil.heading}</h1>
                <h3>{banner_deatil.subtext}</h3>
              <Link to={(`/${banner_deatil.buttonurl}`)}>
                <button className="button">
                  <span className="button-font-margin"> {banner_deatil.buttonname} </span>
                  <i className="fas fa-chevron-right"></i
                  ><i className="fas fa-chevron-right"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container" style={{textAlign: 'center', paddingBottom: '37px'}}>
        {/* <img src="/assests/images/Dot.svg" className="dot" alt="" onClick={prevSlide} />
        <img src="/assests/images/Dot.svg" className="dot" alt="" onClick={nextSlide}/> */}
      </div>
      </section>
         </div>)
}

export default Home1;