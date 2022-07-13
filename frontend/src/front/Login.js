import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import AuthUser from '../AuthUser';
export const Login = () => {
    
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () => {
      // console.log(email+' '+password);
      http.post('/login',{email:email,password:password}).then((res)=>{
        try{ 
        // console.log(res.data);
        setToken(res.data.user,res.data.access_token);
        }catch(e){
         console.log('error', e);        
     }
      });
    }

return (
<>
<div className="masthead">
   <section>
      <div className="container">
         <div className="row">
            <div className="socal">
               <h1 className="mt-3 logo-login text-center">
                  <spam>One</spam>
                  App
               </h1>
               <p className="text-center text-gry mb-4 font-13">Explore, Watch, Talk, <br></br>Share, Meet, Call, Protect.</p>
               <h6 className="mt-3 text-center text-gry font-13">Log in via social media accounts</h6>
               <div className="text-center d-flex">
                  <div className="d-sm-block img-login">
                     <img src="img/fb-login.png" alt="qus"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/tw-login.png" alt="tv"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/in-login.png" alt="chat"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/insta-login.png" alt="chat"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/tic-tac.png" alt="tic-tac"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/snapchat.png" alt="snapchat"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/gmail.png" alt="chat"/>
                  </div>
                  <div className="d-sm-block img-login">
                     <img src="img/call.png" alt="chat"/>
                  </div>
               </div>
               <p className="divider-text"><span>OR</span></p>
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email or Username" onChange={e=>setEmail(e.target.value)}/>
               </div>
               <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
               </div>
               <div className="form-check">
                  <label className="form-check-label font-13">
                  <input className="form-check-input me-2 font-13" type="checkbox" value=""/>Keep me Signed in
                  </label>
               </div>
               <div className="text-center mb-3 m-t-15">
                  {/* <Link to="/" className="btn btn-block btn-create">
                  Log in</Link> */}
                   <button type="button" onClick={submitForm} className="btn btn-block btn-create">Log In</button>
               </div>
               <div className="text-center mb-3 m-t-15">
                  <Link to="/" className="forgot font-13">
                  Forgot your password?</Link>
                  <span></span>
               </div>
               <div className="text-center mb-3 m-t-15">
                  <Link to="/Signup" className="font-13">
                  Register now for the best app in the world!</Link>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default Login;