import React from "react";
import { Link } from "react-router-dom";

function PostRow(props) {
  
  let date = new Date(Number(props.date)).toLocaleDateString();

  return (
    <div key={props.key}>
      <div className="card-1-healing">
        <div className="img-main">
          <img src={props.img} alt="" />
        </div>
        <div className="detail-main">
          <div className="time">
            <div>
              <p>{date}</p>
            </div>
            <div>
              <p>{props.author}</p>
            </div>
          </div>
          <div className="heading-healing-body">
            <h1>{props.title.substring(0, 30)}...</h1>
          </div>
          <div className="para-healing-body">
            <p>
              {props.description.replace(/(<([^>]+)>)/gi, "").substring(0, 200)}
            </p>
          </div>
          <div className={props.buttonClass}>
            <a href={`/blog/${props._id}`}>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostRow;
