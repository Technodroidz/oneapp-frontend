import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import http from '../http'

export const PeopleConnect = () => {

   const[allusers, setUsers] = useState([]);
      useEffect(()=>{
         fetchAllUsers();
      },[]);

   const fetchAllUsers = () => {
      http.get('/allusers').then(res=>{
          setUsers(res.data);
        //console.log(res.data);
      })
     }
return (
<>
<section className="masthead">
   <div className="container">      
      <div className="row">
      <div className="col-md-12 mt-2 text-center">
            <h6>All People on OneApp </h6>
        </div>
         <div className="col-md-12 mt-2">
         <div className="chat-section mt-2">
                {allusers.map((alluser,index)=>(
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-9">
                                 <Link to="/">
                                    <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>{alluser.name}</h6>
                                    {/* <small className="font-12">Last seen: 2 hours ago</small> */}
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-3">
                                 <Link to="/">
                                 <div className="chat-follow-btn">
                                    Follow
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                ))}       
                        {/* <div className="chat-list">
                           <div className="row">
                              <div className="col-9">
                                 <Link to="/">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-3">
                                 <Link to="/">
                                 <div className="chat-follow-btn">
                                    Follow
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-9">
                                 <Link to="/">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-3">
                                 <Link to="/">
                                 <div className="chat-follow-btn">
                                    Follow
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-9">
                                 <Link to="/">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-3">
                                 <Link to="/">
                                 <div className="chat-follow-btn">
                                    Follow
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div> */}
                     </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default PeopleConnect;