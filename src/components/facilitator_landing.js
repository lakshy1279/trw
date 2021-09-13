import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import facilitator from './facilitator';
import Pagination from './pagination';
import SearchBar from "material-ui-search-bar";
import {Grid,Button} from '@material-ui/core';
function Facilitator_landing(props) {
    const [facilitator,setFacilitator]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [banner,setBanner]=useState({});
    const [facilitatorPerPage,setFacilitatorPage] = useState(6);const [query,setQuery]=useState({
      keyword:""
    })
    useEffect(()=>{
      searchOrgo()
   },[query]);
  const searchOrgo=()=>{
       axios.post("https://lakshy12.herokuapp.com/facilitator/search",query).then((res)=>{
           console.log(res.data);
             setFacilitator(res.data);
       })
   }
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/facilitator/fetch`).then((res)=>{
            console.log(res.data);
              setFacilitator(res.data);
        })
        axios.get(`https://lakshy12.herokuapp.com/facilitator/fetch_banner`).then((res)=>{
          console.log(res.data);
            setBanner(res.data[0]);
      })
    },[]);
    const indexOfLastfacilitator = currentPage * facilitatorPerPage;
  const indexOfFirstfacilitator = indexOfLastfacilitator - facilitatorPerPage;
  let currentfacilitator = [];
  if (facilitator.length > 0) {
    currentfacilitator = facilitator.slice(indexOfFirstfacilitator, indexOfLastfacilitator);
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);
  function handleChange(e)
  {
      const no=e.target.innerText;
      const records=no.slice(5,no.length);
      setFacilitatorPage(records);
  }
    return (
        <div>
            <section class="offering-sec1" id="sec1" style={{background:`url(${banner.image}) no-repeat center center/cover`}}>
            <Navbar/>
            <header class="showcase">
        <div class="offering-showcase-main">
          <div class="offering-content">
            <div class="container">
              <div class="offering-main-content-showcase">
                <div class="show-box1">
                  <h1>{banner.heading}</h1>
                  <p>
                   {banner.subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
         </section>
         <div className="container">
         <Grid container  style={{marginTop:50,marginBottom:50}} spacing={2}>
                              <Grid item xs={12} md={9} lg={9} xl={9} sm={9}  >
                          <SearchBar
             
               placeholder="Search here..."
                value={query.keyword}
                onChange={(newValue) => 
                  setQuery({...query,
                    keyword:newValue

                  })
                }
                
              />
               </Grid>
               <Grid item xs={12} md={3} lg={3} xl={3} sm={3}  container alignItems='center'>
              <Button color='primary' variant='contained' fullWidth onClick={searchOrgo}>Search</Button>
              </Grid>
                            


                       
                        </Grid>
         <section >
        <div class="partners-main">
          <div class="dropdown-button-sec">
            <label class="dropdown-button">

              <div class="dd-button">
                View {facilitatorPerPage} Profiles
              </div>
            
              <input type="checkbox" class="dd-input" id="test"/>
            
              <ul class="dd-menu">
              <li onClick={(e)=>handleChange(e)}>View 6</li>
                <li onClick={(e)=>handleChange(e)}>View 12</li>
                <li  onClick={(e)=>handleChange(e)}>View 18</li>
                <li  onClick={(e)=>handleChange(e)}>View 24</li>
              </ul>
              
            </label>
          </div>
            <div class="group-cards sec-1 ">
              <div class="org-group-cards-sec-1">
                {currentfacilitator.length>0&&currentfacilitator.slice(0,currentfacilitator.length).map((item)=>{
                    return (<Link to={`/facilitator/${item._id}`}><div style={{display: "grid",
                    gridTemplateRows: "repeat(1, 1fr)"}}>
                    <div>
                      <img src={item.photo} alt="" style={{
    width: "100%",
    minHeight: "240px",
    maxWidth: "334.60px",
    maxHeight: "240px",
    height: "100%",
    boxShadow: "1px 1px 16px rgb(0 0 0 / 25%)",
    borderRadius: "12px",}} />
                    </div>
                    <div>
                        <span style={{textAlign:"center"}}><p id="even">{item.firstname}</p></span>
                      </div>
                  </div>
                  </Link>)
                })}
              </div>
            </div>
        </div>
        <div style={{marginTop:"2%",display:'flex'}}>
         <Pagination
          postsPerPage={facilitatorPerPage}
          totalPosts={facilitator.length}
          paginate={paginate}
        />
        </div>
      </section>
         </div>
        
         <div style={{marginTop:"70px"}}>
    <Footer/>
    </div>
        </div>
    );
}

export default Facilitator_landing;