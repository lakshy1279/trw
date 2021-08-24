import React from 'react';
import { Link } from 'react-router-dom';

function Progrow(props) {
    return (
        <div>
            <Link to={`/program/${props._id}`}>
             <div class="more-img1" key={props.key}>
            <img src={props.image} alt="" />
            <div class="img-bottom">
              <div class="img-text">
                <h1>
                 {props.title}
                </h1>
                <p id="date">{new Date(props.date).getDate()} {new Date(props.date).toLocaleDateString('default',{month:'long'})} {new Date(props.date).getFullYear()}</p>
                <p id="time">IST: 8:00, CET: 12:00, EST: 19:00</p>
                <p id="by">{props.facilitator!=null&&props.facilitator.toString()}</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
    );
}

export default Progrow;