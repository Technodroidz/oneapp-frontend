import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import http from '../http'
export const Chat = () => {
   const navigate = useNavigate();
   
   const[allusers, setUsers] = useState([]);
      useEffect(()=>{
         fetchAllUsers();
      },[]);

   const fetchAllUsers = () => {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.stringify(tokenString);
      //console.log(userToken);
      if(tokenString === null){
         alert('Please Login!')
         navigate('/Login');
      }
      const userString = sessionStorage.getItem('user');
      const user_details = JSON.parse(userString);
      //console.log(user_details.id);
      const userID = user_details.id;

      http.get('/chatusers/'+userID).then(res=>{
        try{
            setUsers(res.data);
         //console.log(res.data);
         }catch(e){
            console.log('error', e);        
         }
      })
     }

const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
return (
<>
<section className="masthead">
   <div className="container">      
      <div className="row">
      {/* <div class="col-12 mt-4" className="text-center">
         <Link to="/PeopleConnect" className="text-center"> People Connect</Link>
         </div> */}
         <div className="col-md-12 mt-2">
            <div className="chat-tabs">
               <Tabs>
                  <TabList>
                     <Tab>
                        <h5><i className="fa fa-user mr-2"></i> Chat</h5>
                     </Tab>
                     <Tab>
                        <h5><i className="fa fa-users mr-2"></i>Group chat </h5>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     <div className="chat-section mt-4">
                      {allusers.map((alluser,index)=>(  
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to={{ pathname: "/ChatPage/" + alluser.id }}>
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>{alluser.name}</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to={{ pathname: "/ChatPage/" + alluser.id }}>
                                 <div className="chat-number-count">
                                    <p>12</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                      ))} 
                        {/* <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                  
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>12</p>
                                 </div>
                                 </Link> 
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>12</p>
                                 </div>
                                 </Link> 
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>4</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>34</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>12</p>
                                 </div>
                                 </Link> 
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Euro News</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="group-chat-section mt-3">
                        <div className="col-12 mb-3">
                           <h5 className="btn-group-chat" onClick={showModal}> Create New Group </h5>
                           <Modal show={isOpen} onHide={hideModal}>
                              <Modal.Body className="p_50">
                                 <span onClick={hideModal} className="clos"><i className="fa fa-times-circle-o"></i></span>       
                                 <div className="row">
                                    <div>
                                       <h6>Add Group Participants</h6>
                                    </div>
                                    <div className="container">
                                       <div class="bar mt-1">
                                          <label><input type="text" placeholder="Type contact name"/></label>
                                       </div>
                                    </div>
                                    <div className="chat-list mt-2">
                                       <div className="row">
                                          <div className="col-10">
                                             <Link to="/ChatPage">
                                             <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                             <div className="chat-user-des">
                                                <h6>Euro News</h6>
                                                <small className="font-12">Last seen: 2 hours ago</small>
                                             </div>
                                             </Link>
                                          </div>
                                          <div className="col-1">
                                             <Link to="/ChatPage">
                                             <img src="img/puls.png" alt="img"></img>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="chat-list mt-2">
                                       <div className="row">
                                          <div className="col-10">
                                             <Link to="/ChatPage">
                                             <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                             <div className="chat-user-des">
                                                <h6>Euro News</h6>
                                                <small className="font-12">Last seen: 2 hours ago</small>
                                             </div>
                                             </Link>
                                          </div>
                                          <div className="col-1">
                                             <Link to="/ChatPage">
                                             <img src="img/puls.png" alt="img"></img>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="chat-list mt-2">
                                       <div className="row">
                                          <div className="col-10">
                                             <Link to="/ChatPage">
                                             <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                             <div className="chat-user-des">
                                                <h6>Euro News</h6>
                                                <small className="font-12">Last seen: 2 hours ago</small>
                                             </div>
                                             </Link>
                                          </div>
                                          <div className="col-1">
                                             <Link to="/ChatPage">
                                             <img src="img/puls.png" alt="img"></img>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="chat-list mt-2">
                                       <div className="row">
                                          <div className="col-10">
                                             <Link to="/ChatPage">
                                             <img src="img/euronews.png" className="chat-user-img" alt="avatar"/>                                 
                                             <div className="chat-user-des">
                                                <h6>Euro News</h6>
                                                <small className="font-12">Last seen: 2 hours ago</small>
                                             </div>
                                             </Link>
                                          </div>
                                          <div className="col-1">
                                             <Link to="/ChatPage">
                                             <img src="img/puls.png" alt="img"></img>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Modal.Body>
                           </Modal>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="chat-list">
                           <div className="row">
                              <div className="col-10">
                                 <Link to="/ChatPage">
                                 <img src="img/rita-img.jpg" className="chat-user-img" alt="avatar"/>                                 
                                 <div className="chat-user-des">
                                    <h6>Family Guoup</h6>
                                    <small className="font-12">Last seen: 2 hours ago</small>
                                 </div>
                                 </Link>
                              </div>
                              <div className="col-1">
                                 <Link to="/ChatPage">
                                 <div className="chat-number-count">
                                    <p>8</p>
                                 </div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default Chat;