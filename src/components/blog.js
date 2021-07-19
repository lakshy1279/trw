import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Post from "./post";
import PostRow from "./postrow";

function Blog() {
  let cardData = [
    {
      cardTitle: "Aliquam auctor",
      cardPill: "Healing",
      cardDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.In doloribus, accusantium, exercitationem velit hic etconsequatur aperiam qui cupiditate, similique alias remquas aliquam eligendi quam quibusdam unde minima vitae.",
      cardAuth: "by Thomas Ulfa",
      cardPublish: "4th July",
    },
    {
      cardTitle: "Aliquam auctor",
      cardPill: "Leading",
      cardDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.In doloribus, accusantium, exercitationem velit hic etconsequatur aperiam qui cupiditate, similique alias remquas aliquam eligendi quam quibusdam unde minima vitae.",
      cardAuth: "by Thomas Ulfa",
      cardPublish: "4th July",
    },
    {
      cardTitle: "Aliquam auctor",
      cardPill: "Healing",
      cardDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.In doloribus, accusantium, exercitationem velit hic etconsequatur aperiam qui cupiditate, similique alias remquas aliquam eligendi quam quibusdam unde minima vitae.",
      cardAuth: "by Thomas Ulfa",
      cardPublish: "4th July",
    },
  ];
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
                  <button className="view-all">View all</button>
                </div>
              </div>
              <div className="healing-card">
                {cardData.map((cardItem, index) => {
                  return (
                    <PostRow
                      key={index}
                      img="/assests/images/card-1.jfif"
                      title={cardItem.cardTitle}
                      date={cardItem.cardData}
                      author={cardItem.cardAuth}
                      description={cardItem.cardDesc}
                      buttonclassName="button-healing"
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
                {cardData.map((cardItem, index) => {
                  return (
                    <PostRow
                      key={index}
                      img="/assests/images/card-6.jfif"
                      title={cardItem.cardTitle}
                      date={cardItem.cardData}
                      author={cardItem.cardAuth}
                      description={cardItem.cardDesc}
                      buttonclassName="button-healing leading-but"
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
