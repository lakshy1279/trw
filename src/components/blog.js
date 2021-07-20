import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Post from "./post";
import PostRow from "./postrow";

function Blog() {
  const [healing, setHealing] = useState([]);
  const [leading, setLeading] = useState([]);
  const history = useHistory();
  useEffect(() => {
    async function getAticles() {
      const article = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setHealing(
        article.data.filter((singleArticle) => {
          return singleArticle.category === "Healing";
        })
      );
      setLeading(
        article.data.filter((singleArticle) => {
          return singleArticle.category === "Leading";
        })
      );
    }
    getAticles();
  }, []);

  function changeRoute(blogCategory) {
    history.push(`/blogs/${blogCategory}`);
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
              name=""
              id=""
            />
          </div>
          <div className="blog-btn-className">
            <button className="blog-search-btn">
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
            <div className="blog-main-sec-1">
              <div className="healing-header">
                <div className="healing-text">
                  <h1>Healing</h1>
                </div>
                <div className="healing-button">
                  <button
                    className="view-all"
                    onClick={() => changeRoute("healing")}
                  >
                    View all
                  </button>
                </div>
              </div>
              <div className="healing-card">
                {healing.map((item, index) => {
                  return (
                    <PostRow
                      key={index}
                      img={item.image}
                      title={item.title}
                      date={item.date}
                      author={item.author}
                      description={item.description}
                      buttonClass="button-healing"
                    />
                  );
                })}
              </div>
            </div>
            <div className="blog-main-sec-2">
              <div className="healing-header">
                <div className="healing-text">
                  <h1>Leading</h1>
                </div>
                <div className="healing-button leading">
                  <button className="view-all">View all</button>
                </div>
              </div>
              <div className="healing-card">
                {leading.map((item, index) => {
                  return (
                    <PostRow
                      key={index}
                      img={item.image}
                      title={item.title}
                      date={item.date}
                      author={item.author}
                      description={item.description}
                      buttonClass="button-healing leading-but"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
