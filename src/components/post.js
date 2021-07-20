import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { useHistory } from "react-router-dom";
function Post() {
  const [article, setArticle] = useState([]);
  const history = useHistory();

  let breakPoints = [
    { width: 1, itemsToShow: 1,itemsToScroll:1, pagination: false },
    { width: 550, itemsToShow: 2,itemsToScroll:2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3,itemsToScroll:3, pagination: false },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6, pagination: false },
    { width: 1750, itemsToShow: 7, pagination: false },
  ];

  useEffect(() => {
    async function getAticles() {
      const article = await axios.get(
        "https://trw-backend-api.herokuapp.com/blog/Blog1s"
      );
      setArticle(article.data);
    }

    getAticles();
  }, []);

  function routeChange(blogId) {
    history.push(`blog/${blogId}`);
  }

  function customArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <div style={{ alignSelf: "center" }}>
          <button className="arrows">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      ) : (
        <button className="arrows">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </button>
      );
    return (
      <p style={{ alignSelf: "center" }} onClick={onClick} disabled={isEdge}>
        {pointer}
      </p>
    );
  }
  return (
    <div>
      <section className="recentpost">
        <h1>Recent Posts</h1>
        <p>Rhoncus tempor nunc, praesent amet eu hac tortor malesuada tellus</p>
        <div className="recentpost-main">
          <Carousel
            itemsToShow={3}
            itemsToScroll={3}
            breakPoints={breakPoints}
            renderArrow={customArrow}
          >
            {article.map((data, index) => {
              return (
                <div key={index} className="card">
                  <div>
                    <img src={data.image} alt="" />
                  </div>
                  <div className="content-card">
                    <div>
                      <span className="ali">{data.title}</span>
                      <span className={data.category==="Healing"?"head":"lead"}>{data.category}</span>
                    </div>
                    <div>
                      <p>
                        {data.description
                          .replace(/(<([^>]+)>)/gi, "")
                          .substring(0, 200)}
                        ...
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
                      onClick={() => routeChange(data._id)}
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
          </Carousel>
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
