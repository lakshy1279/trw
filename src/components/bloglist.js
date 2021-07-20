import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import PostRow from "./postrow";

function BlogList() {
  const [blog, setBlog] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function getBlogs() {
      const blogList = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setBlog(
        blogList.data.filter((Blog) => {
          return Blog.category === category;
        })
      );
    }
    getBlogs();
  }, []);
  console.log(blog);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="bloglist-heading">
          <h1>{category.toUpperCase()}</h1>
        </div>
        <div className="healing-card" style={{marginBottom:"3rem"}}>
          {blog.map((item, index) => {
            return (
              <PostRow
                key={index}
                img={item.image}
                title={item.title}
                date={item.date}
                author={item.author}
                description={item.description}
                buttonClass={
                  category !== "Healing"
                    ? "button-healing leading-but"
                    : "button-healing"
                }
                    _id={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
