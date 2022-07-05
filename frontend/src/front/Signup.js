import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import http from '../http'
export const Signup = () => {

    const navigate = useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [country,setCountry] = useState();
    const [phone,setPhone] = useState();
    const [password,setPassword] = useState();
    const [profilepic,setProfilepic] = useState();

   const submitForm = () =>{
         http.post('/register',{name:name,email:email,country:country,phone:phone,password:password,profilepic:profilepic}).then((res)=>{
            // console.log(res);
             if(res.status === 200){
              alert(res.data);
              navigate('/Login');
           }
        })
  }

return (
<>
<div className="masthead">
   <section>
      <div className="container">
         <div className="row">
            <div className="socal">
               <Link className="btn btn-block btn-twitter" to="/">
               <img src="img/tw.png" alt="call"/>  &nbsp; Sign up with Twitter
               </Link>
               <Link className="btn btn-block btn-facebook" to="/">
               <img src="img/fb.png" alt="call"/> &nbsp; Sign up with Facebook
               </Link>
               <Link className="btn btn-block btn-linkedin" to="/">
               <img src="img/in.png" alt="call"/> &nbsp; Sign up with Linkedin
               </Link>
               <Link className="btn btn-block btn-instagram" to="/">
               <img src="img/insta.png" alt="call"/> &nbsp; Sign up with Instagram 
               </Link>
               <Link className="btn btn-block btn-tikTok" to="/">
               <img src="img/tic-tac1.png" alt="tic-tac"/> &nbsp; Sign up with TikTok 
               </Link>
               <Link className="btn btn-block btn-snapchat" to="/">
               <img src="img/snapchat1.png" alt="snapchat"/> &nbsp; Sign up with Snapchat
               </Link>
               <Link className="btn btn-block btn-gmail" to="/">
               <img src="img/gmail.png" alt="gmail"/> &nbsp; Sign up with Gmail
               </Link>
               <Link className="btn btn-block btn-phone" to="/">
               <img src="img/call.png" alt="call"/> &nbsp; Sign up with Phone Number
               </Link>
               <p className="divider-text"><span>OR</span></p>
               <form enctype="multipart/form-data">
               <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={e=>setName(e.target.value)}/>
               </div>
               <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="Your Email Address" onChange={e=>setEmail(e.target.value)}/>
               </div>
               <div className="form-group">
                  <input type="text" name="country" className="form-control" placeholder="Your Country" onChange={e=>setCountry(e.target.value)}/>
               </div>
               <div className="mt-1 mb-3">
                  <h6 className="font-12">Your interest</h6>
                  <div className="btn-sign btn-sign-active"><img src="img/soccer-ball.png" className="img-fluid" alt="user"/>  Football</div>
                  <div className="btn-sign"><img src="img/movies-folder.png" className="img-fluid" alt="user"/>  Movies</div>
                  <div className="btn-sign"><img src="img/wine-glass.png" className="img-fluid" alt="user"/>  Dating</div>
                  <div className="btn-sign"><img src="img/cricket-game.png" className="img-fluid" alt="user"/>  Cricket</div>
                  <div className="btn-sign"><img src="img/basketball.png" className="img-fluid" alt="user"/>  Basketball</div>
                  <div className="btn-sign btn-sign-active"><img src="img/chat-s.png" className="img-fluid" alt="user"/>  Gossip</div>
                  <div className="btn-sign"><img src="img/music-s.png" className="img-fluid" alt="user"/>  Music</div>
               </div>
               <div className="form-group">
                  <input type="text" name="phone" className="form-control" placeholder="Your Phone Number With Country Code" onChange={e=>setPhone(e.target.value)}/>
               </div>
               <div className="form-group">
               <input type="password" name="password" className="form-control" placeholder="Your Password" onChange={e=>setPassword(e.target.value)}/>
               </div>
               <div>
                  <p className="font-12">For profile authenticity please upload the National ID card </p>
               </div>
               <div className="form-group">
                  <label><input type="file" name="profilepic" className="d-none" onChange={e=>setProfilepic(e.target.files[0])}/><img src="img/fi-rr-upload.png" className="img-fluid mr-10" alt="user"/>  Upload here</label>                  
               </div>
               <div className="row">
                  <div className="col-6">
                     <div className="profile-Verified">
                        <img src="img/pic-1.png" className="img-fluid rounded-circle mr-10" alt="user"/>
                        <img src="img/check-icon.png" className="img-vfd" alt="user"/>
                        <p>Verified</p>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="profile-Unverified">
                        <img src="img/pic-1.png" className="img-fluid rounded-circle mr-10" alt="user"/>
                        <img src="img/unverified.png" className="img-vfd" alt="user"/>
                        <p>Unverified</p>
                     </div>
                  </div>
               </div>
               <div className="form-check mt-3">
                  <label className="form-check-label">
                  <input className="form-check-input me-2" type="checkbox" value=""/>Keep me Signed in
                  </label>
               </div>
               <div className="text-center mb-3 m-t-15">
                  {/* <Link to="/" className="btn btn-block btn-create" onClick={submitForm}>
                  Create a Account</Link> */}
                  <button type="button" onClick={submitForm} className="btn btn-block btn-create">Create a Account</button>
               </div>
               </form>
               <div className="text-center mb-3 m-t-15">
                  Already have an account? 
                  <Link to="/Login">
                  <b>  Log in here!</b></Link>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default Signup;