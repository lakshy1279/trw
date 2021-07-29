import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Organisation from './organisation';
import Pagination from './pagination';
function Organisation_landing(props) {
    const [organisation,setOrganisation]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [OrganisationPerPage] = useState(6);
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch`).then((res)=>{
            console.log(res.data);
              setOrganisation(res.data);
        })
    },[]);
    const indexOfLastOrganisation = currentPage * OrganisationPerPage;
  const indexOfFirstOrganisation = indexOfLastOrganisation - OrganisationPerPage;
  let currentOrganisation = [];
  if (organisation.length > 0) {
    currentOrganisation = organisation.slice(indexOfFirstOrganisation, indexOfLastOrganisation);
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);
    return (
        <div>
            <section class="offering-sec1" id="sec1">
            <Navbar/>
            <header class="showcase">
        <div class="offering-showcase-main">
          <div class="offering-content">
            <div class="container">
              <div class="offering-main-content-showcase">
                <div class="show-box1">
                  <h1>Organisations</h1>
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
         <div className="container">
         <section class="presented-partners">
        <div class="partners-main">
          <div class="dropdown-button-sec">
            <label class="dropdown-button">

              <div class="dd-button">
                View 6 Profiles
              </div>
            
              <input type="checkbox" class="dd-input" id="test"/>
            
              <ul class="dd-menu">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
                <li class="divider"></li>
                <li>
                  <a href="http://rane.io">Link to Rane.io</a>
                </li>
              </ul>
              
            </label>
          </div>
            <div class="group-cards sec-1 ">
              <div class="org-group-cards-sec-1">
                {currentOrganisation.length>0&&currentOrganisation.slice(0,3).map((item)=>{
                    return (<Link to={`/organisation/${item._id}`}><div class="card">
                    <div class="div-img">
                      <img src={item.logo} alt="" />
                      <div>
                        <span><p id="even">{item.name}</p></span>
                      </div>
                    </div>
                  </div>
                  </Link>)
                })}
              </div>
              <div class="org-group-cards-sec-2">
              {currentOrganisation.length>3&&currentOrganisation.slice(3,currentOrganisation.length).map((item)=>{
                    return (<Link to={`/organisation/${item._id}`}><div class="card">
                    <div class="div-img">
                      <img src={item.logo} alt="" />
                      <div>
                        <span><p id="even">{item.name}</p></span>
                      </div>
                    </div>
                  </div>
                  </Link>)
                })}
              </div>
            </div>
        </div>
        <div style={{marginTop:"2%",display:'flex',justifyContent:'center'}}>
         <Pagination
          postsPerPage={OrganisationPerPage}
          totalPosts={organisation.length}
          paginate={paginate}
        />
        </div>
      </section>
         </div>
        
         <div style={{marginTop:"70px"}}>
    <Footer/>
    </div>
        </div>
    );
}

export default Organisation_landing;