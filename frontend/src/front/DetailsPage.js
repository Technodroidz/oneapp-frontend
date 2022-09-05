import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const DetailsPage = () => {
   const {id} = useParams(); 

   const[allvideos, setVideos] = useState([]);
   useEffect(()=>{
      fetchAllUsers();
   },[]);

   const fetchAllUsers = () => {
     // setVideos(id);
       // alert(id);
        console.log(id);
        var site = 'https://www.youtube.com/embed/'+id;
       // alert(site);
        document.getElementById('youtubevideos').src = site;
  }
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row">
            <div className="radioiframe">
               <iframe title="Radio Channels" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="youtubevideos" src="https://www.youtube.com/embed/Dg_L-q3caA8"></iframe>
            </div>  
         </div>
      </div>
   </section>
</div>
)
}
export default DetailsPage;