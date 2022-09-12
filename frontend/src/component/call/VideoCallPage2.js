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
import http from '../http'
export const VideoCallPage2 = () => {  
     const navigate = useNavigate();
     const {id} = useParams(); 
      
      const[allusers, setUsers] = useState([]);
      const[allvideos, setVideos] = useState([]);
      const[allstart, setStart] = useState([]);
         useEffect(()=>{
            fetchAllUsers();
         },[]);

         useEffect(()=>{
            fetchAgoraToken();
         },[]);

      const config = {mode: "rtc", codec: "vp8"}  
      const useClient = createClient(config);
      const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks({
         
      });
     // console.log(useMicrophoneAndCameraTracks); 
      const client = useClient();
      const { ready, tracks } = useMicrophoneAndCameraTracks({});
      console.log(tracks);
     
     
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
      const channelName = 'DemoChannel';   
      const fetchAgoraToken = () => {
         const userString = sessionStorage.getItem('user');
         const user_details = JSON.parse(userString);
         //console.log(user_details.id);
         if(user_details !== null){
            const username = user_details.name;
            http.post('/agora/token',{channelName:channelName,user:username}).then(res=>{
               try{
                  console.log(res.data);
                  console.log(tracks);
               }catch(e){
                  console.log('error', e);        
               }
            })
         }   
      } 
      
      // useEffect(() => {
      //    // function to initialise the SDK
      //    let init = async (name: string = "") => {
      //      console.log("init", name);
      //      client.on("user-published", async (user, mediaType) => {
      //        await client.subscribe(user, mediaType);
      //        console.log("subscribe success");
      //        if (mediaType === "video") {
      //          setUsers((prevUsers) => {
      //            return [...prevUsers, user];
      //          });
      //        }
      //       //  if (mediaType === "audio") {
      //       //    user.audioTrack?.play();
      //       //  }
      //      });
     
      //      client.on("user-unpublished", (user, type) => {
      //        console.log("unpublished", user, type);
      //       //  if (type === "audio") {
      //       //    user.audioTrack?.stop();
      //       //  }
      //        if (type === "video") {
      //          setUsers((prevUsers) => {
      //            return prevUsers.filter((User) => User.uid !== user.uid);
      //          });
      //        }
      //      });
     
      //      client.on("user-left", (user) => {
      //        console.log("leaving", user);
      //        setUsers((prevUsers) => {
      //          return prevUsers.filter((User) => User.uid !== user.uid);
      //        });
      //      });
     
      //      await client.join(config.appId, name, config.token, null);
      //      if (tracks) await client.publish([tracks[0], tracks[1]]);
      //      setStart(true);
     
      //    };
     
      //    if (ready && tracks) {
      //      console.log("init ready");
      //      init(channelName);
      //    }
     
      //  }, [channelName, client, ready, tracks]);
return (
<>
<section>
   <div className="video-call-section">
            <div className="card">
               <div className="chat">
                  <div className="clearfix">
                     <div className="col-12">
                        <div className="video-call">
                           {ready && (<AgoraVideoPlayer videoTrack={tracks[0]} style={{height:'50vh',width:'100vw'}}/>)}
                        
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
export default VideoCallPage2;