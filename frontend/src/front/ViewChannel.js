import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
export const ViewChannel = () => {
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row mt-3">
            <div className="col-4">
               <Link to="/Profile">
               <div className="btn-pro"> My Profile</div>
               </Link>
            </div>
            <div className="col-4">
               <Link to="/MyChannel">
               <div className="btn-pro btn-pro-active"> My Channel</div>
               </Link>
            </div>
            <div className="col-4">
               <Link to="/History">
               <div className="btn-pro"> History</div>
               </Link>
            </div>
         </div>
         <div className='border-b-w'></div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="profile-bio">
                  <div className="friend-info">
                     <figure><img src="img/pro.png" alt=""/></figure>
                     <div className="friend-name">
                        <ins>
                           <Link to="/">
                           My Channel Name</Link>
                        </ins>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.  </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12 mt-3">
               <div className="btn-streaming">
                  <img src="img/puls.png" className="img-fluid" alt="user"/>  Start Streaming
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <h6 className="mt-3 font-14"><b>Channel List</b></h6>
               </div>
            </div>
            <div className='border-b-w'></div>
            <div className="row mt-3">
               <div className="col-12">
                  <div className="channel-video">
                     <video width="100%" height="200" controls>
                        <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
                     </video>
                     <div className="des">
                        <h6 className="font-14">BBC News Videos</h6>
                        <h6 className="font-13">Videos - 1</h6>
                        <p className="font-12">6.7K views . 1 year ago</p>
                     </div>
                  </div>
                  <div className="channel-video">
                     <video width="100%" height="200" controls>
                        <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
                     </video>
                     <div className="des">
                        <h6 className="font-14">BBC News Videos</h6>
                        <h6 className="font-13">Videos - 2</h6>
                        <p className="font-12">6.7K views . 1 year ago</p>
                     </div>
                  </div>
                  <div className="channel-video">
                     <video width="100%" height="200" controls>
                        <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
                     </video>
                     <div className="des">
                        <h6 className="font-14">BBC News Videos</h6>
                        <h6 className="font-13">Videos - 3</h6>
                        <p className="font-12">6.7K views . 1 year ago</p>
                     </div>
                  </div>
                  <div className="channel-video">
                     <video width="100%" height="200" controls>
                        <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
                     </video>
                     <div className="des">
                        <h6 className="font-14">BBC News Videos</h6>
                        <h6 className="font-13">Videos - 4</h6>
                        <p className="font-12">6.7K views . 1 year ago</p>
                     </div>
                  </div>
                  <div className="channel-video">
                     <video width="100%" height="200" controls>
                        <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
                     </video>
                     <div className="des">
                        <h6 className="font-14">BBC News Videos</h6>
                        <h6 className="font-13">Videos - 5</h6>
                        <p className="font-12">6.7K views . 1 year ago</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
)
}
export default ViewChannel;