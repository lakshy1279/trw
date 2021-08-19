
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
function Facilitator() {
  const [faciliator, setFacilitator] = useState([]);
  let breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    {
      width: 550,
      itemsToShow: 2,
      pagination: false,
    },
    { width: 850, itemsToShow: 4, pagination: false },
    { width: 1150, itemsToShow: 5 },
    { width: 1450, itemsToShow: 6, pagination: false },
    { width: 1750, itemsToShow: 7, pagination: false },
  ];

  useEffect(() => {
    axios
      .get("https://lakshy12.herokuapp.com/facilitator/fetch")
      .then((res) => {
        console.log(res.data);
        setFacilitator(res.data);
      });
  }, []);

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
      <section class="members">
        <div class="community-body">
          <div class="fact-sec">
            <div>
              <h1>Faciliators</h1>
            </div>
            <br />
            <div>
              <div>
                <Carousel
                  itemsToShow={4}
                  itemsToScroll={1}
                  breakPoints={breakPoints}
                  renderArrow={customArrow}
                >
                  {faciliator.length > 0 &&
                    faciliator.map((data) => {
                      return (
                        <div className="faciliator-card">
                          <div className="faciliator-img">
                            <img src={data.photo} alt="faciliator-image" />
                          </div>
                          <div className="faciliator-details">
                            <div className="faciliator-info">
                              <span>
                              <span
                                style={{ fontSize: "14px", fontWeight: "700" }}
                              >
                                {data.firstname} {data.lastname}
                              </span>
                              </span>
                              <span
                                style={{ fontSize: "10px", opacity: "0.5" }}
                              >
                                {data.country}
                              </span>
                            </div>
                            <div className="profile" style={{marginRight:"0.5rem"}}>
                              <span>View Profile</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilitator;
