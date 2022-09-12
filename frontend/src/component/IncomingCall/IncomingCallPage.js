import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig,
   IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
import { AGORA_APP_ID } from "../agora.config";
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import http from '../http'
export const IncomingCallPage = () => {  

   const navigate = useNavigate();
   useEffect(()=>{
      fetchCallDetails();
   },[]);
   
   const config = {mode: "rtc", codec: "vp8"}  
   const useClient = createClient(config);
   const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks({

   });
  // console.log(useMicrophoneAndCameraTracks); 
   const client = useClient();
   const { ready, tracks } = useMicrophoneAndCameraTracks({});

   const fetchCallDetails = () => {
      const tokenString = sessionStorage.getItem('token');
      if(tokenString != null){
         const userString = sessionStorage.getItem('user');
         const user_details = JSON.parse(userString);
         const userid = user_details.id;
         //console.log(user_details.id);
         http.get('/fetchcalldetails').then(res=>{
            try{
             //setChatusers(res.data);
             const user_details = JSON.stringify(res);
             const user_detailsss = JSON.parse(user_details);
             //  console.log(user_detailsss.data[0].personcalledid);
               if(userid == user_detailsss.data[0].personcalledid){
                 // swal("Call Joined..!");
                  //    client.join(user_detailsss.data[0].token, "1024", null, function(uid) {
                  //       console.log("client" + user_detailsss.data[0] + "joined channel")
                  //       // Create a local stream
                  //       //……
                  //   }, function(err) {
                  //       console.error("client join failed ", err)
                  //       // Error handling
                  //   });
               }
             }catch(e){
               console.log('error', e)       
             }
          })
      
      }
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
export default IncomingCallPage;