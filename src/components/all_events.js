import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import MoreEvents from './moreevent';
import Pagination from './pagination';
function All_Events(props) {
    const [Event,setEvents]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    function sortFunction(a,b){  
        var dateA = new Date(a.fromdate).getTime();
        var dateB = new Date(b.fromdate).getTime();
        return dateA > dateB ? 1 : -1;  
    };
    useEffect(()=>{
        axios.get('https://lakshy12.herokuapp.com/blog/get_all_events').then(async (res)=>{
            //  console.log(res.data);
            const sorteddata=await res.data.sort(sortFunction);
            console.log("sorted data",sorteddata);
             let temp=sorteddata;
             console.log(temp);
             setEvents(temp);
        })
    },[]);
    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = [];
  if (Event.length > 0) {
    currentPosts = Event.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
            <div>
      <Navbar />
      <div className="container">
        <div className="bloglist-heading">
          <h1>All Events</h1>
        </div>
        <div  style={{ marginBottom: "3rem",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridGap:"1.3rem" }}>
          {currentPosts.length > 0
            && currentPosts.map((item, index) => {
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

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={Event.length}
          paginate={paginate}
        />
      </div>
    </div>
    );
}
export default All_Events;