import React, { useEffect, useState } from 'react';
import Pagination from './pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Org(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [organisation,setOrganisation]=useState([]);
    const [OrganisationPerPage,setOrganisationPage] = useState(6);
    useEffect(()=>{
        axios.get(`https://lakshy12.herokuapp.com/organisation/fetch`).then((res)=>{
            console.log(res.data);
            const sortedData=res.data.sort((a,b)=>{if(a.name<b.name){
                return -1;
              }else
             {
               return 1;
             }})
              setOrganisation(sortedData);
        })
    },[]);
    const indexOfLastOrganisation = currentPage * OrganisationPerPage;
  const indexOfFirstOrganisation = indexOfLastOrganisation - OrganisationPerPage;
  let currentOrganisation = [];
  if (organisation.length > 0) {
    currentOrganisation = organisation.slice(indexOfFirstOrganisation, indexOfLastOrganisation);
  }
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);
  function handleChange(e)
  {
      const no=e.target.innerText;
      const records=no.slice(5,no.length);
      setOrganisationPage(records);
  }
    return (
        <div>
              <section >
        <div class="partners-main">
          <div class="dropdown-button-sec">
            <label class="dropdown-button">

              <div class="dd-button">
                View {OrganisationPerPage} Profiles
              </div>
            
              <input type="checkbox" class="dd-input" id="test"/>
            
              <ul class="dd-menu">
                <li onClick={(e)=>handleChange(e)}>View 6</li>
                <li onClick={(e)=>handleChange(e)}>View 12</li>
                <li  onClick={(e)=>handleChange(e)}>View 18</li>
                <li  onClick={(e)=>handleChange(e)}>View 24</li>
              </ul>
              
            </label>
          </div>
            <div class="group-cards sec-1 ">
              <div class="org-group-cards-sec-1">
                {currentOrganisation.length>0&&currentOrganisation.slice(0,currentOrganisation.length).map((item)=>{
                    return (<Link to={`/organisation/${item._id}`}><div style={{display: "grid",
                      gridTemplateRows: "repeat(1, 1fr)"}}>
                    <div style={{background: "#ffffff",
    boxShadow: "1px 1px 16px rgb(0 0 0 / 25%)",
    borderRadius: "12px",
    textAlign: "center"}}>
                      <img src={item.logo} alt="" style={{padding: "28px 38px",
    width: "100%",
    minHeight: "240px",
    maxWidth: "264px",
    maxHeight: "240px",
    height: "100%",
    objectFit: "contain"}} />
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
    );
}

export default Org;