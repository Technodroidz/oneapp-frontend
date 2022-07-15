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
      
      const[allusers, setUsers] = useState([]);
      const[allstart, setStart] = useState([]);
      const[allchatusers, setChatusers] = useState([]);
         useEffect(()=>{
            fetchAllUsers();
         },[]);

         const rtc = [];

         const initClientEvents = () => {
            rtc.current.client.on("user-published", async (user, mediaType) => {
              // New User Enters
              await rtc.current.client.subscribe(user, mediaType);
              if (mediaType === "video") {
                const remoteVideoTrack = user.videoTrack;
                setUsers((prevUsers) => {
                  return [...prevUsers, { uid: user.uid, audio: user.hasAudio, video: user.hasVideo, client: false, videoTrack: remoteVideoTrack }]
                })
              }
        
              if (mediaType === "audio") {
                const remoteAudioTrack = user.audioTrack;
                remoteAudioTrack.play();
                setUsers((prevUsers) => {
                  return (prevUsers.map((User) => {
                    if (User.uid === user.uid) {
                      return { ...User, audio: user.hasAudio }
                    }
                    return User
                  }))
                })
              }
            });
        
            rtc.current.client.on("user-unpublished", (user, type) => {
              //User Leaves
              if (type === 'audio') {
                setUsers(prevUsers => {
                  return (prevUsers.map((User) => {
                    if (User.uid === user.uid) {
                      return { ...User, audio: !User.audio }
                    }
                    return User
                  }))
                })
              }
              if (type === 'video') {
                setUsers((prevUsers) => {
                  return prevUsers.filter(User => User.uid !== user.uid)
                })
              }
            });
          }   

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
              let options = {
               'appId' : 'f31feed969ef438b8f501a27c3b73ce6',
               'name' : 'DemoChannel',
               'token' : '006f31feed969ef438b8f501a27c3b73ce6IAAgb7sjhILLZWkuWrUpR1q+pbtDzale2h9LnnqobnUAPvSoF24JSNIaIgCUcgEAly7RYgQAAQAn689iAwAn689iAgAn689iBAAn689i'
             };
             
             let init = async (name) => {
               rtc.current.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
               initClientEvents()
               const uid = await rtc.current.client.join(options.appId, name, options.token, null);
               console.log(uid);
               // Create an audio track from the audio sampled by a microphone.
               rtc.current.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
               // Create a video track from the video captured by a camera.
               rtc.current.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
               //Adding a User to the Users State
               setUsers((prevUsers) => {
               return [...prevUsers, { uid: uid, audio: true, video: true, client: true, videoTrack: rtc.current.localVideoTrack }]
               })
               //Publishing your Streams
               await rtc.current.client.publish([rtc.current.localAudioTrack, rtc.current.localVideoTrack]);
               setStart(true)
            }
               
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
                           <img src="/img/user1.jpg" className="img-fluid" alt="img"/>
                        </div>
                        <div class="video-sm">
                           <img src="/img/rita-img.jpg" className="rounded img-fluid" alt="img"/>
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