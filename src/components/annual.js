import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import MoreEvents from "./moreevent";
import Pagination from "./pagination";

function AnnualEvent() {
  const [Event, setEvent] = useState([]);
  const [otherBlog, setOtherBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const { type } = useParams();

  useEffect(async () => {
      const EventList = await axios.get(
        `http://localhost:5000/blog/get_event_Bytype/${type}`
      );
      console.log(EventList.data);
      setEvent(EventList.data);
  }, []);

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
          <h1>{type.toUpperCase()}</h1>
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

export default AnnualEvent;
