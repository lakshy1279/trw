import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import PostRow from "./postrow";
import { useParams } from "react-router-dom";

function BlogInternal() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [healing, setHealing] = useState([]);
  const [leading, setLeading] = useState([]);
  const [otherBlog, setOtherBlog] = useState([]);

  useEffect(() => {
    async function getSingleArticle() {
      const article = await axios.get(
        `https://trw-backend-api.herokuapp.com/blog/update_blog1/${id}`
      );

      setArticle(article.data);
    }
    async function getAticles() {
      const article = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
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
    getSingleArticle();
    getAticles();
  }, []);
  console.log(article);
  return (
    <div>
      <div className="container">
        <section className="blog-internal-sec1" id="sec1">
          <Navbar />
        </section>

        {/* Sec-2 Event Details*/}
        <section className="event-details">
          <div className="flex-event-details">
            <div className="blog-internal-row">
              <div className="blog-img-container">
                <img src={article.image} alt="" />
              </div>
              <div className="blog-container">
                <div className="blog-heading-container">
                  <div className="heading-text">
                    <h1>{article.title}</h1>
                  </div>
                  <div className="heading-label">
                    <button
                      className={
                        article.category === "Leading" ? "lead-label" : "label"
                      }
                    >
                      {article.category}
                    </button>
                  </div>
                </div>
                <div className="para-desc">
                  <p id="one">By {article.author}</p>
                  <p>{new Date(Number(article.date)).toLocaleDateString()}</p>
                </div>
                <div className="row-sec-para">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Posts */}
        <section className="related-posts">
          <div className="blog-main-sec-1">
            <div className="healing-header">
              <div className="healing-text">
                <h1>Related Posts</h1>
              </div>
              <div className="healing-button">
                <button className="view-all">{article.category}</button>
              </div>
            </div>
            <div className="healing-card">
              {(() => {
                if (article.category?.toLowerCase() === "healing")
                  return healing.map((item, index) => {
                    return (
                      <PostRow
                        key={index}
                        title={item.title}
                        date={item.date}
                        author={item.author}
                        description={item.description}
                        img={item.image}
                        buttonClass="button-healing"
                      />
                    );
                  });
                if (article.category?.toLowerCase() === "leading")
                  return leading.map((item, index) => {
                    return (
                      <PostRow
                        key={index}
                        title={item.title}
                        date={item.date}
                        author={item.author}
                        description={item.description}
                        img={item.image}
                        buttonClass="button-healing leading-but"
                      />
                    );
                  });
                else;
                return  otherBlog.map((item, index) => {
                  return (
                    <PostRow
                      key={index}
                      title={item.title}
                      date={item.date}
                      author={item.author}
                      description={item.description}
                      img={item.image}
                      _id={item._id}
                      buttonClass="button-healing"
                    />
                  );
                });
              })()}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BlogInternal;
