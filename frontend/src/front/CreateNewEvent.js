import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';
export const CreateNewEvent = () => {
const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">Schedule Your New Event </h6>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="row mt-3 mb-3">
            <div className="col-12 event-input-style">
               <input type="text" class="form-control rounded" placeholder="Event Name"/>          
            </div>
         </div>
         <div className="row mt-3 mb-3">
            <div className="col-12">
               <h5 className="font-14">
                  With 
                  <spam className="event-user"><img src="img/user.png" alt="user"/></spam>
                  UserName
               </h5>
            </div>
         </div>
         <div className="row mt-3 mb-3">
            <div className="col-12">
               <h5 className="font-14" onClick={showModal}>
                  Add a Co-host or Guest 
                  <spam className="font-15 float-end" > <i className=" fa fa-chevron-right"></i></spam>
               </h5>
            </div>
            <Modal show={isOpen} onHide={hideModal}>
               <Modal.Body className="p_50">
                  {/* <span onClick={hideModal} className="clos"><i className="fa fa-times-circle-o"></i></span>        */}
                  <div className="row mt-3">
                     <div className='col-8'>
                        <h6>Add People </h6>
                     </div>
                     <div className='col-4 text-right'>
                        <Link to="/">
                        <h6>Done </h6>
                        </Link>
                     </div>
                     <div className="container">
                        <div class="bar mt-3">
                           <label><input type="text" placeholder="Type People name"/></label>
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
      </div>
      <div className="bg-History-set">
         <div className="row mt-3 mb-3">
            <div className="col-12">
               <h5 className="font-14 ">
                  Date 
                  <spam className="font-15 float-end" > <input type="date" className="input-style"/></spam>
               </h5>
            </div>
            <div className="col-12 mt-3">
               <h5 className="font-14">
                  Time  
                  <spam className="font-15 float-end" > <input type="time" className="input-style"/></spam>
               </h5>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="row mt-3 mb-3">
            <div className="col-12">
               <h5 className="font-14">
                  Replays  
                  <spam className="scheduleEvent-section font-15 float-end" > <label className="switch">
                     <input type="checkbox"/>
                     <span className="slider round"></span>
                     </label>
                  </spam>
               </h5>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="row mt-3 mb-3">
            <div className="col-12 event-textarea-style">
               <textarea class="form-control rounded" placeholder="Description"></textarea>
            </div>
         </div>
      </div>
      <div className="row mt-4 mb-3">
         <div className="form-group text-center">
            <Link to="/" className="btn btn-info text-white border-radius50 btn-block font-14">
            Publish</Link>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default CreateNewEvent;