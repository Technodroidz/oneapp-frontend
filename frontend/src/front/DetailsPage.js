import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const DetailsPage = () => {
   const {id} = useParams(); 

   const[allusers, setUsers] = useState([]);

   const fetchAllUsers = () => {
      setUsers(id);
        console.log(id);
  }
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row">
         {allusers.map((alluser,index)=>(
            <div className="radioiframe">
               <iframe title="Radio Channels" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" src="https://www.youtube.com/embed/Dg_L-q3caA8"></iframe>
            </div>
         ))} 
         </div>
      </div>
   </section>
</div>
)
}
export default DetailsPage;