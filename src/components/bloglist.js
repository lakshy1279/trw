import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import PostRow from "./postrow";
import Pagination from "./pagination";

function BlogList() {
  const [blog, setBlog] = useState([]);
  const [otherBlog, setOtherBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const { category } = useParams();

  useEffect(() => {
    async function getBlogs() {
      const blogList = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setBlog(
        blogList.data.filter((Blog) => {
          return Blog.category.toLowerCase() === category.toLowerCase();
        })
      );
      setOtherBlog(
        blogList.data.filter((Blog) => {
          return (
            Blog.category.toLowerCase() !== "healing" &&
            Blog.category.toLowerCase() !== "leading"
          );
        })
      );
    }
    getBlogs();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = [];
  if (blog.length > 0) {
    currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);
  } else if (otherBlog.length > 0) {
    currentPosts = otherBlog.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="bloglist-heading">
          <h1>{category.toUpperCase()}</h1>
        </div>
        <div className="healing-card" style={{ marginBottom: "3rem" }}>
          {blog.length > 0
            ? currentPosts.map((item, index) => {
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
              })
            : currentPosts.map((item, index) => {
                return (
                  <PostRow
                    key={index}
                    img={item.image}
                    title={item.title}
                    date={item.date}
                    author={item.author}
                    description={item.description}
                    buttonClass="button-healing"
                    _id={item._id}
                  />
                );
              })}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={blog.length>0?blog.length:otherBlog.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default BlogList;
