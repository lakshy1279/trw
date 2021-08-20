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

  useEffect(async () => {
    let article2;
    async function getSingleArticle() {
      const article = await axios.get(
        `https://trw-backend-api.herokuapp.com/blog/update_blog1/${id}`
      );

      setArticle(article.data);
      article2=article.data;
    }
    async function getAticles() {
      const article1 = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      // setHealing(
      //   article1.data.filter((singleArticle) => {
      //     return singleArticle.category.toLowerCase() === "healing";
      //   })
      // );
      // setLeading(
      //   article1.data.filter((singleArticle) => {
      //     return singleArticle.category.toLowerCase() === "leading";
      //   })
      // );
      setOtherBlog(
        article1.data.filter((singleArticle) => {
          return (
            singleArticle.category.toLowerCase() === article2.category.toLowerCase()
          );
        })
      );
    }
   await getSingleArticle();
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
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{width:"100%",textAlign:"center"}}>
                <img src={article.image} alt=""  style={{ width: "100%",
    height: "100%",
    maxWidth: "650px",
    maxHeight: "450px",
    objectFit: "cover",
    paddingRight: "1.5rem"}} />
              </div>
              <div style={{width:"100%"}}>
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
