import axios from "axios";
import React, { useEffect, useState } from "react";
function Testinomial() {
  const [testmonials, setTestmonials] = useState([]);
  const [data,setData]=useState({});
  const [current,setCurrent]=useState(0);
  const [length,setLength]=useState(0);
  useEffect(() => {
    axios
      .get("https://lakshy12.herokuapp.com/testimonial/fetch")
      .then((res) => {
        console.log(res.data);
        setTestmonials(res.data);
        setLength(res.data.length);
        setData(res.data[0]);
      });
  }, []);
  const nextSlide=()=>{
    let index=current===length-1?0:current+1;
    setCurrent(index);
    setData(testmonials[index]);
}
const prevSlide=()=>{
    let index=current===0?length-1:current-1;
    setCurrent(index);
    if(index>=0&&index<length)
    setData(testmonials[index]);
}
  return (
    <div>
      <section class="testmonials">
        <h1>Testimonials</h1>
        <p>Rhoncus tempor nunc, praesent amet eu hac tortor malesuada tellus</p>
              <div>
                <div class="test-main">
                  <div style={{ alignSelf: "center" }}>
                    <button class="arrows" onClick={prevSlide}>
                      <i class="fas fa-chevron-left"></i>
                      <i class="fas fa-chevron-left"></i>
                    </button>
                  </div>
                  <div class="main-test">
                    <div class="body-main-test">
                      <div>
                        <img
                          src={data.photo}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{data.content}</p>
                        <h3>{data.name}</h3>
                        <h4>{data.location}</h4>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }} onClick={nextSlide}>
                    <button class="arrows">
                      <i class="fas fa-chevron-right"></i>
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="/assests/images/Carousel Dots.svg"
                    style={{ marginTop: "94px" }}
                    alt=""
                  />
                </div>
              </div>
      </section>
    </div>
  );
}

export default Testinomial;
