import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './front/Header';
import {Login} from './front/Login';
import {Signup} from './front/Signup';
import {Home} from './front/Home';
import {DetailsPage} from './front/DetailsPage';
import {PostPage} from './front/PostPage';
import {RoomPage} from './front/RoomPage';
import {MessagePage} from './front/MessagePage';
import {AudioRoom} from './front/AudioRoom';
import {Profile} from './front/Profile';
import {Chat} from './front/Chat';
import {ChatPage} from './front/ChatPage';
import {AudioCallPage} from './front/AudioCallPage';
import {VideoCallPage} from './front/VideoCallPage';
import {GroupVideoCallPage} from './front/GroupVideoCallPage';
import {CallPage} from './front/CallPage';
import {About} from './front/About';
import {Contact} from './front/Contact';
import {PrivacyPolicy} from './front/PrivacyPolicy';
import {TermsConditions} from './front/TermsConditions';
import {Help} from './front/Help';
import {Settings} from './front/Settings';
import {ViewContact} from './front/ViewContact';
import {Viewdocs} from './front/Viewdocs';
import {ReportProblem} from './front/ReportProblem';
import {History} from './front/History';
import {ScheduleEvent} from './front/ScheduleEvent';
import {MyChannel} from './front/MyChannel';
import {ViewChannel} from './front/ViewChannel';
import {CreateNewEvent} from './front/CreateNewEvent';
import {PeopleConnect} from './front/PeopleConnect';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />     
        <Routes>            
          <Route path="/Login" element={<Login />}></Route> 
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/DetailsPage" element={<DetailsPage />}></Route>
          <Route path="/PostPage" element={<PostPage />}></Route>
          <Route path="/RoomPage" element={<RoomPage />}></Route>
          <Route path="/MessagePage" element={<MessagePage />}></Route> 
          <Route path="/AudioRoom" element={<AudioRoom />}></Route> 
          <Route path="/Profile" element={<Profile />}></Route> 
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/ChatPage" element={<ChatPage />}></Route>
          <Route path="/AudioCallPage" element={<AudioCallPage />}></Route>
          <Route path="/VideoCallPage" element={<VideoCallPage />}></Route>
          <Route path="/GroupVideoCallPage" element={<GroupVideoCallPage />}></Route>
          <Route path="/CallPage" element={<CallPage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/TermsConditions" element={<TermsConditions />}></Route>
          <Route path="/Help" element={<Help />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/ViewContact" element={<ViewContact />}></Route>
          <Route path="/Viewdocs" element={<Viewdocs />}></Route>
          <Route path="/ReportProblem" element={<ReportProblem />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/ScheduleEvent" element={<ScheduleEvent />}></Route>
          <Route path="/MyChannel" element={<MyChannel />}></Route>          
          <Route path="/ViewChannel" element={<ViewChannel />}></Route>
          <Route path="/CreateNewEvent" element={<CreateNewEvent />}></Route>
          <Route path="/PeopleConnect" element={<PeopleConnect />}></Route>
        </Routes>       
    </Router>
    </div>
  );
}

export default App;
