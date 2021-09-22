import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Progrow from './progrow';
import Pagination from './pagination';
function All_Programs(props) {
    const [Programs,setPrograms]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    function sortFunction(a,b){  
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA > dateB ? 1 : -1;  
    };
    useEffect(()=>{
        axios
            .get(`https://lakshy12.herokuapp.com/program/fetch`)
            .then((res) => {
                const fetchedData = res.data.sort(sortFunction);
                setPrograms(fetchedData);
            });
    },[]);
    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = [];
  if (Programs.length > 0) {
    currentPosts = Programs.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
            <div>
      <Navbar />
      <div className="container">
        <div className="bloglist-heading">
          <h1>Programs</h1>
        </div>
        <div  style={{ marginBottom: "3rem",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridGap:"1.3rem" }}>
          {currentPosts.length > 0
            && currentPosts.map((item, index) => {
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

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={Event.length}
          paginate={paginate}
        />
      </div>
    </div>
    );
}
export default All_Programs;