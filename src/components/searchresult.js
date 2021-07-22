import React from "react";
import Navbar from "./navbar";
import PostRow from "./postrow";

function SearchResult() {
  let blogs = JSON.parse(localStorage.getItem("searchResult") || "[]");

  return (
    <div>
      <section>
        <div className="container">
          <Navbar />
          <div className="search-result">
            <div className="search-result-heading">
              <h1>Blogs</h1>
            </div>
            <div className="healing-card" style={{ marginBottom: "3rem" }}>
              {blogs.length > 0 ? (
                blogs.map((item, index) => {
                  return (
                    <PostRow
                      key={index}
                      title={item.title}
                      author={item.author}
                      description={item.description}
                      date={item.date}
                      img={item.image}
                      buttonClass={
                        item.category === "Healing"
                          ? "button-healing"
                          : "button-healing leading-but"
                      }
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

export default SearchResult;
