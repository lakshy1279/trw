import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import PostRow from "./postrow";

function BlogInternal() {
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
            <div className="row-1">
              <div className="event-sec1">
                <img src="/assests/images/long-image.jfif" alt="" />
              </div>
              <div className="row-sec-2">
                <div className="row-sec-heading">
                  <div className="heading-text">
                    <h1>Tempor posuere imperdiet consequat est et feugiat.</h1>
                  </div>
                  <div className="heading-label">
                    <button className="label">Healing</button>
                  </div>
                </div>
                <div className="para-desc">
                  <p id="one">By Theresa Ulfa</p>
                  <p>9th August 2021</p>
                </div>
                <div className="row-sec-para">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget eu velit et facilisi faucibus luctus tellus. Arcu enim,
                    maecenas vitae eget turpis. Imperdiet congue viverra blandit
                    diam dolor. Id venenatis velit eu in commodo venenatis cras
                    vulputate. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Eget eu velit et facilisi faucibus luctus
                    tellus. Arcu enim, maecenas vitae eget turpis. Imperdiet
                    congue viverra blandit diam dolor. Id venenatis velit eu in
                    commodo venenatis cras vulputate. Arcu enim, maecenas vitae
                    eget turpis. Imperdiet congue viverra blandit. Id venenatis
                    velit eu in commodo venenatis cras vulputate. Lorem ipsum
                    dolor sit. luctus tellus arcu enim, maecenas vitae.
                  </p>
                </div>
              </div>
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
            </div>
            <div className="sec-4-img-event-details">
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
                    buttonclassName="button-healing"
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
