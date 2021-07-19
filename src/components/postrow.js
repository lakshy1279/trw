import React from "react";

function PostRow(props) {
  return (
    <div key={props.key}>
      <div className="card-1-healing">
        <div className="img-main">
          <img src={props.img} alt="" />
        </div>
        <div className="detail-main">
          <div className="time">
            <div>
              <p>
                {props.date}
                <span style={{ marginLeft: "10px" }}>2020</span>
              </p>
            </div>
            <div>
              <p>{props.author}</p>
            </div>
          </div>
          <div className="heading-healing-body">
            <h1>{props.title}</h1>
          </div>
          <div className="para-healing-body">
            <p>{props.description}</p>
          </div>
          <div className={props.buttonClass}>
            <button className="button">
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
      </div>
    </div>
  );
}

export default PostRow;
