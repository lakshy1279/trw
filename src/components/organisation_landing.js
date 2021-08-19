import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Org from './organisation';
import axios from 'axios';

import Pagination from './pagination';
import SearchBar from "material-ui-search-bar";
import {Grid,Button} from '@material-ui/core';
function Organisation_landing(props) {
    const [organisation,setOrganisation]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [banner,setBanner]=useState({});
    const [OrganisationPerPage,setOrganisationPage] = useState(6);
    const [query,setQuery]=useState({
      keyword:""
    })
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch`).then((res)=>{
            console.log(res.data);
              setOrganisation(res.data);
        })
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch_banner`).then((res)=>{
          console.log(res.data);
             setBanner(res.data[0]);
      })
    },[]);
     useEffect(()=>{
       searchOrgo()
    },[query]);
   const searchOrgo=()=>{
        axios.post("https://lakshy12.herokuapp.com/organisation/search",query).then((res)=>{
            console.log(res.data);
              setOrganisation(res.data);
        })
    }
    const indexOfLastOrganisation = currentPage * OrganisationPerPage;
  const indexOfFirstOrganisation = indexOfLastOrganisation - OrganisationPerPage;
  let currentOrganisation = [];
  if (organisation.length > 0) {
    currentOrganisation = organisation.slice(indexOfFirstOrganisation, indexOfLastOrganisation);
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);
  function handleChange(e)
  {
      const no=e.target.innerText;
      const records=no.slice(5,no.length);
      setOrganisationPage(records);
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
                        <Org/>
         </div>
        
         <div style={{marginTop:"70px"}}>
    <Footer/>
    </div>
        </div>
    );
}

export default Organisation_landing;