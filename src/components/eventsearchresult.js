import React from "react";
import Navbar from "./navbar";
import MoreEvents from "./moreevent";

function EventSearchResult() {
  let events = JSON.parse(localStorage.getItem("searcheventResult") || "[]");

  return (
    <div>
      <section>
        <div className="container">
          <Navbar />
          <div className="search-result">
            <div className="search-result-heading">
              <h1>Events</h1>
            </div>
            <div className="more">
              {events.length > 0 ? (
                events.map((item, index) => {
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
                })
              ) : (
                <h1>No Result Found ...</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventSearchResult;
