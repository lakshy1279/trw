import axios from "axios";
import React, { useEffect, useState } from "react";
function Post() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function getAticles() {
      const article = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setArticle(article.data);
    }

    getAticles();
  }, []);
  return (
    <div>
      <section className="recentpost">
        <h1>Recent Posts</h1>
        <p>Rhoncus tempor nunc, praesent amet eu hac tortor malesuada tellus</p>
        <div className="recentpost-main">
          <div style={{ alignSelf: "center" }}>
            <button className="arrows">
              <i className="fas fa-chevron-left"></i>
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          {article.map((data) => {
            return (
              <div className="card">
                <div>
                  <img src={data.image} alt="" />
                </div>
                <div className="content-card">
                  <div>
                    <span className="ali">{data.title}</span>
                    <span className="head">{data.category}</span>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In doloribus, accusantium, exercitationem velit hic et
                      consequatur aperiam qui cupiditate, similique alias rem
                      quas aliquam eligendi quam quibusdam unde minima vitae.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="button"
                    style={{
                      borderRadius: "0",
                      width: "100%",
                      margin: "0",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    Read More
                    <i
                      className="fas fa-chevron-right"
                      style={{ float: "right" }}
                    ></i>
                    <i
                      className="fas fa-chevron-right"
                      style={{ float: "right" }}
                    ></i>
                  </button>
                </div>
              </div>
            );
          })}
          <div style={{ alignSelf: "center" }}>
            <button className="arrows">
              <i className="fas fa-chevron-right"></i>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div>
          <img
            style={{ marginTop: "80px" }}
            src="/assests/images/Group1.svg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Post;
