import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk";
import { AGORA_APP_ID } from "../agora.config";
import swal from 'sweetalert';
import http from '../http'

export const ChatPage = () => {  
const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
const [isOpen2, setIsOpen2] = React.useState(false);
const showModal2 = () => { setIsOpen2(true);};
const hideModal2 = () => { setIsOpen2(false);};
const [isOpen3, setIsOpen3] = React.useState(false);
const showModal3 = () => { setIsOpen3(true);};
const hideModal3 = () => { setIsOpen3(false);};
const [isOpen4, setIsOpen4] = React.useState(false);
const showModal4 = () => { setIsOpen4(true);};
const hideModal4 = () => { setIsOpen4(false);};
const [isOpen5, setIsOpen5] = React.useState(false);
const showModal5 = () => { setIsOpen5(true);};
const hideModal5 = () => { setIsOpen5(false);};

      const navigate = useNavigate();
      const {id} = useParams(); 
      //console.log(id);

      const[allchatusers, setChatusers] = useState([]);
         useEffect(()=>{
            fetchAllUsers();
         },[]);


      const fetchAllUsers = () => {
         const tokenString = sessionStorage.getItem('token');
         if(tokenString === null){
           // alert('Please Login!');
            swal("Please Login!");
            navigate('/Login');
         }

      http.get('/userdetails/'+id).then(res=>{
        try{
         setChatusers(res.data);
           //console.log(res.data);
         }catch(e){
           console.log('error', e);        
         }

      })

     }
return (
<>
<div className="masthead">
   <section>
      <div className="container">
         <div className="row">
            <div className="chat-section mt-2">
               <div className="card chat-app">
                  <div className="chat">
                  {allchatusers.map((allchat,index)=>(
                     <div className="chat-header1 clearfix">
                      
                        <div className="row">
                       
                           <div className="col-8 d-flex">
                              <Link to="/">
                              <img src="../img/euronews.png" alt="avatar"/>
                              </Link>
                              <div className="chat-about">
                                 <h6 class="m-b-0">{allchat.name}</h6> 
                                 <small className="font-12">Last seen: 2 hours ago</small>
                              </div>
                           </div>
                           
                           <div className="col-4 col-lg-2">
                              <div className="d-flex ml--5">
                                 <Link to={{ pathname: "/AudioCallPage/" + allchat.id }}>
                                 <img className="chat-img" src="/img/phone-call.png" alt=""/></Link>
                                 <Link to={{ pathname: "/VideoCallPage/" + allchat.id }}>
                                 <img className="chat-img" src="/img/video.png" alt=""/></Link>
                                 <div className="dropdown">
                                    <button type="button" className="bb-n" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className="chat-img" src="/img/more-vertical.png" alt="euronews"/>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                                       <div className="row">
                                          <div className="col-12 mt-2 mb-2">
                                             <Link to="/ViewContact" className="text-reset notification-item">
                                             <div className="d-flex align-items-baseline">
                                                <div className="flex-1">
                                                   <h6 className="mt-0 mb-1 font-12">View Contact</h6>
                                                </div>
                                             </div>
                                             </Link>
                                             <Link to="/Viewdocs" className="text-reset notification-item">
                                             <div className="d-flex align-items-baseline">
                                                <div className="flex-1">
                                                   <h6 className="mt-0 mb-1 font-12">Media, Links, and docs </h6>
                                                </div>
                                             </div>
                                             </Link>                                            
                                             <div className="text-reset notification-item">
                                                <div className="d-flex align-items-baseline">
                                                   <div className="flex-1">
                                                      <h6 className="mt-0 mb-1 font-12" onClick={showModal}>Mute notifications</h6>
                                                   </div>
                                                </div>
                                             </div>
                                             <Modal show={isOpen} onHide={hideModal}>
                                                <Modal.Body className="p_50">
                                                   <div className="row">
                                                      <div>
                                                         <h6 className="font-14">Mute notifications for...</h6>
                                                      </div>
                                                      <div className="container">
                                                         <div class="mt-2">
                                                            <label className="font-14" for="8 Hours"><input type="radio"  id="8Hours" name="mute_notifications"/> 8 Hours</label>
                                                         </div>
                                                         <div class="mt-2">
                                                            <label className="font-14" for="1 Week"><input type="radio"  id="1Week" name="mute_notifications"/> 1 Week</label>
                                                         </div>
                                                         <div className="mt-2">
                                                            <label className="font-14" for="Always"><input type="radio"  id="always" name="mute_notifications"/> Always</label>
                                                         </div>
                                                         <hr>
                                                         </hr>
                                                         <div class="mt-2 d-flex float-r">
                                                            <h6 onClick={hideModal}  className="mr-2 text-right font-14">Cancel </h6>
                                                            <h6  className="font-14 ms-4">ok</h6>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Modal.Body>
                                             </Modal>
                                             <div className="text-reset notification-item">
                                                <div className="d-flex align-items-baseline">
                                                   <div className="flex-1">
                                                      <h6 className="mt-0 mb-1 font-13" onClick={showModal2}>Report</h6>
                                                   </div>
                                                </div>
                                             </div>
                                             <Modal show={isOpen2} onHide={hideModal2}>
                                                <Modal.Body className="p_50">
                                                   <div className="row">
                                                      <div>
                                                         <h6>Report <b>username</b> ...</h6>
                                                      </div>
                                                      <div className="container">
                                                         <div class="mt-2">
                                                           <h6 className="font-13 line-height20">The last 5 messages from this contact will be forwarded to oneApp. If you block this contact and delete the chat, messages will only be removed from this device and your devices on the newer versions of oneApp.</h6>
                                                           <h6 className="mt-4 font-13">This contact will not be notified.</h6>
                                                           <div class="mt-4">
                                                            <label className="font-13" for="Always"><input type="radio"  id="always"/> Block contact and delete chat</label>
                                                         </div>
                                                         </div>
                                                         <hr>
                                                         </hr>
                                                         <div class="mt-2 d-flex float-r">
                                                            <h6 onClick={hideModal2}  className="mr-2 text-right font-14">Cancel </h6>
                                                            <h6 className="ms-4 font-14">Report</h6>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Modal.Body>
                                             </Modal>
                                             <div className="text-reset notification-item">
                                                <div className="d-flex align-items-baseline">
                                                   <div className="flex-1">
                                                      <h6 className="mt-0 mb-1 font-12" onClick={showModal3}>Block</h6>
                                                   </div>
                                                </div>
                                             </div>
                                             <Modal show={isOpen3} onHide={hideModal3}>
                                                <Modal.Body className="p_50">
                                                   <div className="row">
                                                      <div>
                                                         <h6 className="font-14">Block <b>username ?</b></h6>
                                                      </div>
                                                      <div className="container">
                                                      <div class="mt-2">
                                                           <h6 className="font-13 line-height20">Blocked contacts cannot call or send you messages. This contact will not be notified.</h6>          
                                                           <div class="mt-4">
                                                            <label for="Always" className="font-13"><input type="radio"  id="always"/> <b>Report contact</b><br></br>The last 5 messages will be forwarded to oneApp.</label>
                                                         </div>
                                                         </div>
                                                         <hr>
                                                         </hr>
                                                         <div class="mt-2 d-flex float-r">
                                                            <h6 onClick={hideModal3}  className="mr-2 text-right font-14">Cancel </h6>
                                                            <h6 className="ms-4 font-14">Block </h6>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Modal.Body>
                                             </Modal>
                                             <div className="text-reset notification-item">
                                                <div className="d-flex align-items-baseline">
                                                   <div className="flex-1">
                                                      <h6 className="mt-0 mb-1 font-12" onClick={showModal4}>Clear Chat</h6>
                                                   </div>
                                                </div>
                                             </div>
                                             <Modal show={isOpen4} onHide={hideModal4}>
                                                <Modal.Body className="p_50">
                                                   <div className="row">
                                                      <div>
                                                         <h6 className="font-14">Clear this chat?</h6>
                                                      </div>
                                                      <div className="container">
                                                      <div class="mt-2">
                                                           <h6 className="font-13 line-height20">Messages will only be removed from this device and your devices on the newer versions of oneApp.</h6>          
                                                           <div class="mt-4">
                                                            <label for="Always" className="font-13"><input type="radio"  id="always"/> Also delete media received in this chat from the phone gallery</label>
                                                         </div>
                                                         </div>
                                                         <hr>
                                                         </hr>
                                                         <div class="mt-2 d-flex float-r">
                                                            <h6 onClick={hideModal4}  className="mr-2 text-right font-14">Cancel </h6>
                                                            <h6 className="ms-4 font-14">ClearChat</h6>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Modal.Body>
                                             </Modal>
                                             <div className="text-reset notification-item">
                                                <div className="d-flex align-items-baseline">
                                                   <div className="flex-1">
                                                      <h6 className="mt-0 mb-1 font-12" onClick={showModal5}>Export</h6>
                                                   </div>
                                                </div>
                                             </div>
                                             <Modal show={isOpen5} onHide={hideModal5}>
                                                <Modal.Body className="p_50">
                                                   <div className="row">
                                                      <div>
                                                         <h6 className="font-14">Export</h6>
                                                      </div>
                                                      <div className="container">
                                                      <div class="mt-2">
                                                           <h6 className="font-13 line-height20">Including media will increase the size of the chat export.</h6>
                                                         </div>
                                                         <hr>
                                                         </hr>
                                                         <div class="mt-2 d-flex float-r">                                                            
                                                            <h6 className="mr-2 font-14">Without Media</h6>
                                                            <h6 className="ms-4 font-14">Include Media</h6>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Modal.Body>
                                             </Modal>
                                             <div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     ))}
                     <div className="chat-history">
                        <ul className="m-b-0">
                           <li className="clearfix">
                              <div className="message my-message">Are we meeting today?</div>
                              <div className="message-data">
                                 <span className="message-data-time">10:12 AM</span>
                              </div>
                           </li>
                           <li className="clearfix">
                              <div className="message other-message float-right"> Hi Aiden, how are you?</div>
                              <div className="message-data text-right">
                                 <span className="message-data-time">10:15 AM</span>
                              </div>
                           </li>
                           <li className="clearfix">
                              <div className="message my-message">Project has been already finished.</div>
                              <div className="message-data">
                                 <span className="message-data-time">10:15 AM</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="chat-box-tray">
               <input type="text" placeholder="Type your message here..."/>
               <div className="chat-icon-box">
                  <ul className="d-flex">
                     <li>
                        <div className="dropdown">
                           <button type="button" className="bb-n" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="img/frame.png" alt="euronews"/>
                           </button>
                           <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end width-100 p-0" aria-labelledby="page-header-notifications-dropdown" >
                              <div className="row width-100 padding-comstom">
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128517;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128512;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128513;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128514;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128515;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128516;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128517;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128512;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128513;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128514;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128515;</span></h6>
                                    </Link>
                                 </div>
                                 <div className="col-1 mt-2 mb-2">
                                    <Link to="/">
                                    <h6 className="mb-1 font-16"><span>&#128516;</span></h6>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li>
                        <label>
                        <input type="file" id="myfile" className="d-none" name="myfile"/>
                        <img src="img/paperclip.png" alt=""/>
                        </label>
                     </li>
                     <li><img src="img/send.png" alt=""/></li>
                  </ul>
               </div>
            </div>
            <div className="oneApp-ad mt-3">
               <h6 className="text-center">oneApp Ad</h6>
               <img src="img/banner-ad.png" alt=""/>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default ChatPage;