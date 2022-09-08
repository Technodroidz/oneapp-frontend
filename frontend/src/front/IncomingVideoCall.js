import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { $ }  from 'react-jquery-plugin'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig,
   IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
import { AGORA_APP_ID } from "../agora.config";
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import http from '../http'


export const IncomingVideoCall = () => {  
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
                 const uid = null;
                 const channelname = user_detailsss.data[0].channelname;
                   client.join(user_detailsss.data[0].token, "channelname", null, (uid)=>{
                      // Create a local stream
                      let localStream = client.createStream({
                         audio: true,
                         video: true,
                     });
                     // Initialize the local stream
                     localStream.init(()=>{
                         // Play the local stream
                        // localStream.play("me");
                         // Publish the local stream
                         client.publish(localStream);
                     },)
                      //alert("hello");
                      }, function(err) {
                         console.error("client join failed ", err)
                         // Error handling
                      });
               }
             }catch(e){
               console.log('error', e)       
             }
          })
      
      }
  }
 
  const leaveChannel = () => {
      client.leave();
      client.removeAllListeners();
     // tracks[1].close();
      swal("Call Disconnected..!");
      navigate('/');
 };

    $(document).ready(function(){
        $("#myModal").modal('show');
        $("#cancel").on('click', function(){ 
        $("#myModal").modal('hide');
        })
    });
return (
<>
<div id="myModal" className="modal ">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="card call-section text-center">
      <div className="card-body">
         <div className="call-img-section"> 
            <img className="bg-img" src="img/user1.jpg" alt="audiocall" style={{width: "150px", height:"150px"}}/>
         </div>
         <div className="text-center">
            <div className="title2">Jane Jannet</div>
            <h6>Incoming Video Call</h6>
         </div>
         <div className="call-btn-section">         
        
            <span className="btn2"  onClick={leaveChannel}><i className="fa fa-phone icon-rotate"></i></span>
            <spam className="close" id='cancel' data-dismiss="modal">
            <span className="btn-pic "><i className="fa fa-phone icon-rotate"></i></span>
            </spam>
         </div>
      </div>
   </div>
          
        </div>
    </div>
</div>
<section>
   <div className="video-call-section">
      <div className="card">
         <div className="chat">
            <div className="clearfix">
               <div className="col-12">
                  <div className="video-call">
                     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className="player" width="100%"/>
                  </div>
                  <div class="video-sm">
                     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="100%" />
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
export default IncomingVideoCall;