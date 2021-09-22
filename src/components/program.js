import React,{useEffect, useState} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios'
import { useParams } from 'react-router';
import { ListItem } from '@material-ui/core';
import renderHTML from 'react-render-html';
function Program(props) {
  const [program,setProgram]=useState({});
  const [flag,setFlag]=useState(0);
  const [organisation,setOrganisation]=useState({});
  const {id}=useParams();
  useEffect(()=>{
      axios.get(`https://lakshy12.herokuapp.com/program/fetch/${id}`).then((res)=>{
        console.log(res.data);
        setProgram(res.data);
        axios.get(`http://localhost:5000/organisation/data/${res.data.organisation[0]}`).then((res)=>{
          console.log("organisation",res.data);
          setOrganisation(res.data[0]);
        })
        setFlag(1);
      });
      
  },[]);
  var weekday=new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
    return (
        <div>
            <div className="container">
                <Navbar/>
                {/* <!-- Prog Details --> */}
      <section class="prog-details">
        <div class="prog-main">
          <div class="prog-heading">
            <h1>{flag>0&&program.heading}</h1>
          </div>
          <div class="prog-img">
            <img src={flag>0&&program.photo} alt="" />
          </div>
          <div class="prog-para">
            <p>
             {flag>0&&renderHTML(program.description)}
            </p>
          </div>
          <div class="when">
            <p class="prog-date">{new Date(program.date).getDate()} {new Date(program.date).toLocaleDateString('default',{month:'long'})} {new Date(program.date).getFullYear()},{weekday[new Date(program.date).getDay()]} </p>
            <p class="prog-time">IST: 8:00, CET: 12:00, EST: 19:00</p>
          </div>
        </div>
      </section>
      <section class="prog-org-details">
        <div class="prog-org-main">
          <div class="header-org-main">
            <h1>Organizer</h1>
          </div>
          <div class="org-main-sec-1">
            <div class="org-image">
              <img src={organisation.logo} alt="" />
            </div>
            <div class="org-details-info">
              <div class="header">
                <h1>{organisation.name}</h1>
              </div>
              <div class="link">
                <i class="fas fa-external-link-alt"></i>
                <span id="link-blue">{organisation.url}</span>
              </div>
              <div class="link">
                <i class="fas fa-phone-alt"></i>
                <span class="number">1800-666-999</span>
              </div>
              <div class="link">
                <span class="envelope">myemail@address.com</span>
              </div>
              <div class="para">
                <p>
                {flag>0&&renderHTML(organisation.profile)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- How to apply --> */}
      <section class="how-to-apply">
        <div class="main-apply">
          <div class="header-apply">
            <h1>How to apply?</h1>
          </div>
          <div class="lists-apply">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
              </li>
              <li>
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis.
              </li>
              <li>
                Imperdiet congue viverra blandit diam dolor. Id venenatis velit
                eu in commodo venenatis cras vulputate. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit.
              </li>
              <li>
                Id venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate.
              </li>
            </ul>
          </div>
          <div class="apply-button">
            <a href={flag>0?program.apply:''} target="_blank" style={{color:"whitesmoke"}}><button>Apply Now</button></a>
          </div>
        </div>
      </section>
            </div>
            <div style={{marginTop:"104px",background:"#fcf6f1"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default Program;