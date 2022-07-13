import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk";
import { AGORA_APP_ID } from "../agora.config";
import http from '../http'
export const VideoCallPage = () => {  
     const navigate = useNavigate();
     const {id} = useParams(); 
     useEffect(()=>{

         const rtc = [];
         rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
         rtc.client.on("user-published", async (user, mediaType) => {
         console.log('published');
         })
      }, []) 
      
      const[allchatusers, setChatusers] = useState([]);
         useEffect(()=>{
            fetchAllUsers();
         },[]);

      const fetchAllUsers = () => {
            const tokenString = sessionStorage.getItem('token');
           // const userToken = JSON.stringify(tokenString);
            //console.log(userToken);
            if(tokenString === null){
               alert('Please Login!')
               navigate('/Login');
            }
   
         http.get('/userdetails/'+id).then(res=>{
           try{
            //setChatusers(res.data);
              console.log(res.data);
            }catch(e){
              console.log('error', e);        
            }
   
         })
   
        }   
return (
<>
<section>
   <div className="video-call-section">
            <div className="card">
               <div className="chat">
                  <div className="clearfix">
                     <div className="col-12">
                        <div className="video-call">
                           <img src="img/user1.jpg" className="img-fluid" alt="img"/>
                        </div>
                        <div class="video-sm">
                           <img src="img/rita-img.jpg" className="rounded img-fluid" alt="img"/>
                        </div>
                     </div>
                  </div>
                  <div className="chat-i-refresh">
                     <Link to="/VideoChat">
                     <i className="fa fa-refresh "></i></Link>
                  </div>
                  <div className="videocall-btn-section">
                     <Link to="/VideoCallPage">
                     <span className="btn3"><i className="fa fa-microphone"></i></span></Link>
                     <Link to="/VideoCallPage">
                     <span className="btn3">Hold</span></Link>
                     <Link to="/Chat">
                     <span className="btn2"><i className="fa fa-phone icon-rotate"></i></span></Link>
                     <Link to="/VideoCallPage">
                     <span className="btn3"><i className="fa fa-user-plus"></i></span></Link>
                     <Link to="/VideoCallPage">
                     <span className="btn3"><i className="fa fa-video-camera"></i></span></Link>
                  </div>
               </div>
            </div>
         </div>
   </section>
</>
)
}
export default VideoCallPage;