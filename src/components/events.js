import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoreEvents from './moreevent';
import SearchBar from "material-ui-search-bar";
import {Grid,Button,Typography,CircularProgress} from '@material-ui/core';
import Find_event from './find_event';
function Event()
{
  const [moreEvents,setMoreEvents]=useState([]);
  const [recEvents,setRecEvents]=useState([]);
  const [humanity_data,setHumanity]=useState([]);
  const [query,setQuery]=useState({
      keyword:""
    })
  function sortFunction(a,b){  
    var dateA = new Date(a.fromdate).getTime();
    var dateB = new Date(b.fromdate).getTime();
    return dateA > dateB ? 1 : -1;  
};
  useEffect(()=>{
       searchOrgo()
    },[query]);
   const searchOrgo=()=>{
        axios.post("https://lakshy12.herokuapp.com/blog/search",query).then((res)=>{
            console.log(res.data);
              setMoreEvents(res.data);
        })
    }
  useEffect(()=>{
    axios.get('https://lakshy12.herokuapp.com/blog/get_all_events').then(async (res)=>{
        //  console.log(res.data);
        const sorteddata=await res.data.sort(sortFunction);
        console.log("sorted data",sorteddata);
         let temp=sorteddata;
         console.log(temp);
       
         setRecEvents(temp);
    })
    axios.get('https://lakshy12.herokuapp.com/blog/featured_event').then((res)=>{
           console.log("featured",res.data);
          setMoreEvents(res.data);
    })
    axios.get('https://lakshy12.herokuapp.com/home/fetch_section2').then((res)=>{
      setHumanity(res.data[0]);
    })
  },[]);
    return (
        <div>
        <div className="container">
      <Find_event/>

      {/* <!-- More Events --> */}
      <section className="more-events">
      <h1>Featured Events</h1>
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
                            
{moreEvents===null?
  <Grid item xs={12} md={12} lg={12} xl={12} sm={12}  container alignItems='center' justify='center' style={{marginTop:50}}>
    <CircularProgress />
    </Grid>:
    <>
{moreEvents.length>0?
                       
                       
      <div className="more" style={{marginTop:50}}>
        {moreEvents.slice(0, 4).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.eventby}
                        _id={item._id}
                      />
                    );
                  })}
                  </div>
                  :
                   <Grid item xs={12} md={12} lg={12} xl={12} sm={12}  container alignItems='center' justify='center' style={{marginTop:50}}>
                    <Typography variant='h5'> No Events Found</Typography>
                    </Grid>
}
</>
}

                   </Grid>
      </section>
      {/* <!-- Recently Added Events --> */}
      <section className="recently-events">
        <h1>Recently Added Events</h1>
        <div className="more">
        {recEvents.slice(4, recEvents.length).map((item, index) => {
                    return (
                      <MoreEvents
                        key={index}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        fromdate={item.fromdate}
                        enddate={item.enddate}
                        eventby={item.eventby}
                        _id={item._id}
                      />
                    );
                  })}

                  </div>
      </section>
    </div>
    <section class="humanity">
      <div class="humanity-cont">
        <div>
          <img src={humanity_data.image} alt="" />
        </div>
        <div style={{paddingRight: '50px' ,paddingLeft: '20px'}}>
          <h2>
           {humanity_data.heading}
          </h2>
          <br />
          <p class="para">
           {humanity_data.subtext}
          </p>
          <br />
          <p class="bell">{humanity_data.buttontext}</p>
          <button style={{marginLeft:'50px', marginTop: '15px'}} class="button">
            <span class="button-font-margin">{humanity_data.buttonname}</span>
            <i class="fas fa-chevron-right"></i
            ><i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
    </div>)
}

export default Event;