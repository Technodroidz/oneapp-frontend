import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import http from '../http'
import { $ }  from 'react-jquery-plugin'
export const RadioChannels = () => {
   const navigate = useNavigate();
   const {id} = useParams(); 

   //const[allaudios, setAudios] = useState([]);
   useEffect(()=>{
      fetchAllFMChannels();
   },[]);

   const fetchAllFMChannels = () => {
     // alert(id);
      http.get('/fetchfmchannels/'+id).then(res=>{
         try{
            const result = JSON.stringify(res.data);
          //  alert(result);
          //  console.log(result);
           let newString = result.replace('"', '');
           let newStrings = newString.replace('"', '');
          // alert(newStrings);
            document.getElementById('audio').src = newStrings; 
          }catch(e){
            console.log('error', e); 
           // swal("Something Wrong");
           // navigate('/');         
          }
 
       })
    
   }
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row">
            <div className="radioiframe">
               <iframe title="Radio Channels" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" id="audio" src="https://technodroidz.in/"></iframe>
            </div>
         </div>
      </div>
   </section>
</div>
)
}
export default RadioChannels;