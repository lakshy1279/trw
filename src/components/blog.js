import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Post from "./post";
import PostRow from "./postrow";
import { useAlert } from "react-alert";

function Blog() {
  const [healing, setHealing] = useState([]);
  const [leading, setLeading] = useState([]);
  const [otherBlog, setOtherBlog] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  const [query, setQuery] = useState("");
  const history = useHistory();
  const alert = useAlert();

  useEffect(() => {
    async function getAticles() {
      const article = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setAllBlog(article.data);
      setHealing(
        article.data.filter((singleArticle) => {
          return singleArticle.category.toLowerCase() === "healing";
        })
      );
      setLeading(
        article.data.filter((singleArticle) => {
          return singleArticle.category.toLowerCase() === "leading";
        })
      );
      setOtherBlog(
        article.data.filter((singleArticle) => {
          return (
            singleArticle.category.toLowerCase() !== "leading" &&
            singleArticle.category.toLowerCase() !== "healing"
          );
        })
      );
    }
    getAticles();
  }, []);

  function changeRoute(blogCategory) {
    history.push(`/blogs/${blogCategory}`);
  }
  function handelQuery(e) {
    setQuery(e.target.value.trim());
  }

  function searchResult() {
    if (!query) {
      alert.show("Please Enter Something To Search");
    } else {
      const result = allBlog.filter((blog) => {
        if (
          blog.title.toLowerCase() === query.toLowerCase() ||
          blog.category.toLowerCase() === query.toLowerCase() ||
          blog.author?.toLowerCase() === query.toLowerCase()
        ) {
          return blog;
        }
      });
      localStorage.setItem("searchResult", JSON.stringify(result));
      history.push("/search");
    }
  }
  return (
    <div>
      <section className="blog-sec1" id="blog-sec1">
        <div className="container">
          <Navbar />
        </div>
        <header className="showcase">
          <div className="showcase-main">
            <div className="content">
              <div className="container">
                <div className="main-content-showcase">
                  <div className="show-box1">
                    <h1>Blogs.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisi arcu, ut sem at dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      {/* search bar */}
      <section className="blog-search-bar">
        <div className="blog-search-main">
          <div className="blog-bar">
            <input
              type="text"
              placeholder="Search by keywords, articles, blogs"
              className="input-text"
              name="search"
              id=""
              value={query}
              onChange={(e) => handelQuery(e)}
            />
          </div>
          <div className="blog-btn-className">
            <button className="blog-search-btn" onClick={searchResult}>
              <img src="/assests/images/Vector1.svg" alt="" /> Search
            </button>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Recent Posts */}
        <Post />
        {/* Blog */}
        <section className="blogs">
          <div className="blogs-main">
            {healing.length > 0 ? (
              <div className="blog-main-sec-1">
                <div className="healing-header">
                  <div className="healing-text">
                    <h1>Healing</h1>
                  </div>
                  <div className="healing-button">
                    <button
                      className="view-all"
                      onClick={() => changeRoute("Healing")}
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="healing-card">
                  {healing.slice(0, 3).map((item, index) => {
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
              </div>
            ) : (
              ""
            )}
            {leading.length > 0 ? (
              <div className="blog-main-sec-2">
                <div className="healing-header">
                  <div className="healing-text">
                    <h1>Leading</h1>
                  </div>
                  <div className="healing-button leading">
                    <button
                      className="view-all"
                      onClick={() => changeRoute("Leading")}
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="healing-card">
                  {leading.slice(0, 3).map((item, index) => {
                    return (
                      <PostRow
                        key={index}
                        img={item.image}
                        title={item.title}
                        date={item.date}
                        author={item.author}
                        description={item.description}
                        buttonClass="button-healing leading-but"
                        _id={item._id}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}

            {otherBlog.length > 0 ? (
              <div className="blog-main-sec-2">
                <div className="healing-header">
                  <div className="healing-text">
                    <h1>Other</h1>
                  </div>
                  <div className="healing-button leading">
                    <button
                      className="view-all"
                      onClick={() => changeRoute("Other")}
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="healing-card">
                  {otherBlog.slice(0, 3).map((item, index) => {
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
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
