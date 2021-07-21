import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import PostRow from "./postrow";
import { useParams } from "react-router-dom";

function BlogInternal() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function getArticle() {
      const article = await axios.get(
        `https://trw-backend-api.herokuapp.com/blog/update_blog1/${id}`
      );

      setArticle(article.data);
    }
    getArticle();
  }, []);
  console.log(article);
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
                    <button className="label">{article.category}</button>
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
            {/* <div className="row-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis. Imperdiet congue viverra blandit diam dolor. Id
                venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim,
                maecenas vitae. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Eget eu velit et facilisi faucibus luctus
                tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue
                viverra blandit diam dolor. Id venenatis velit eu in commodo
                venenatis cras vulputate. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Eget eu velit et facilisi faucibus
                luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet
                congue viverra blandit diam dolor. Id venenatis velit eu in
                commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget
                turpis. Imperdiet congue viverra blandit. Id venenatis velit eu
                in commodo venenatis cras vulputate. Lorem ipsum dolor sit.
                luctus tellus arcu enim, maecenas vitae.
              </p>
            </div>
            <div className="row-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis. Imperdiet congue viverra blandit diam dolor. Id
                venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim,
                maecenas vitae.
              </p>
            </div> */}
            {/* <div className="sec-4-img-event-details">
              <img src="/assests/images/another-long.jfif" alt="" />
            </div>
            <div className="row-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis. Imperdiet congue viverra blandit diam dolor. Id
                venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim,
                maecenas vitae. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Eget eu velit et facilisi faucibus luctus
                tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet congue
                viverra blandit diam dolor. Id venenatis velit eu in commodo
                venenatis cras vulputate. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Eget eu velit et facilisi faucibus
                luctus tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet
                congue viverra blandit diam dolor. Id venenatis velit eu in
                commodo venenatis cras vulputate. Arcu enim, maecenas vitae eget
                turpis. Imperdiet congue viverra blandit. Id venenatis velit eu
                in commodo venenatis cras vulputate. Lorem ipsum dolor sit.
                luctus tellus arcu enim, maecenas vitae.
              </p>
            </div>
            <div className="row-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis. Imperdiet congue viverra blandit diam dolor. Id
                venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim,
                maecenas vitae.
              </p>
            </div> */}
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
                <button className="view-all">Healing</button>
              </div>
            </div>
            <div className="healing-card">
              {cardData.map((cardItem, index) => {
                return (
                  <PostRow
                    key={index}
                    title={cardItem.cardTitle}
                    date={cardItem.cardPublish}
                    author={cardItem.cardAuth}
                    description={cardItem.cardDesc}
                    img="/assests/images/card-1.jfif"
                    buttonClass="button-healing"
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BlogInternal;
