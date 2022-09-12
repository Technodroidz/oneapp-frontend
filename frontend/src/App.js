import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from './component/Header/Header';

import {Login} from './component/Login';
import {Signup} from './component/Signup';

import {Home} from './component/Home/Home';

import {DetailsPage} from './component/DetailsPage/DetailsPage';
import {PostPage} from './component/DetailsPage/PostPage';
import {RoomPage} from './component/DetailsPage/RoomPage';
import {MessagePage} from './component/DetailsPage/MessagePage';

import {AudioRoom} from './component/Audio/AudioRoom';

import {Profile} from './component/Profile/Profile';

import {Chat} from './component/Chat/Chat';  
import {ChatPage} from './component/Chat/ChatPage';

import {AudioCallPage} from './component/call/AudioCallPage';
import {VideoCallPage} from './component/call/VideoCallPage';
import {GroupVideoCallPage} from './component/call/GroupVideoCallPage';
import {CallPage} from './component/call/CallPage';
import {VideoCallPage2} from './component/call/VideoCallPage2';

import {About} from './component/about/About';

import {Contact} from './component/contact/Contact';

import {PrivacyPolicy} from './component/Help/PrivacyPolicy';
import {TermsConditions} from './component/Help/TermsConditions';
import {Help} from './component/Help/Help';
import {ReportProblem} from './component/Help/ReportProblem';

import {Settings} from './component/Setting/Settings';

import {ViewContact} from './component/View/ViewContact';
import {Viewdocs} from './component/View/Viewdocs';

import {History} from './component/History/History';

import {CreateNewEvent} from './component/Event/CreateNewEvent';
import {ScheduleEvent} from './component/Event/ScheduleEvent';

import {MyChannel} from './component/Channel/MyChannel';
import {ViewChannel} from './component/Channel/ViewChannel';

import {PeopleConnect} from './component/PeopleConnect/PeopleConnect';

import {IncomingCallPage} from './component/IncomingCall/IncomingCallPage';
import {IncomingAudioCall} from './component/IncomingCall/IncomingAudioCall';
import {IncomingVideoCall} from './component/IncomingCall/IncomingVideoCall';

import {RadioChannels} from './component/Radio/RadioChannels';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />     
        <Routes>            
          <Route path="/Login" element={<Login />}></Route> 
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/DetailsPage/:id" element={<DetailsPage />}></Route>
          <Route path="/PostPage" element={<PostPage />}></Route>
          <Route path="/RoomPage" element={<RoomPage />}></Route>
          <Route path="/MessagePage" element={<MessagePage />}></Route> 
          <Route path="/AudioRoom" element={<AudioRoom />}></Route> 
          <Route path="/Profile" element={<Profile />}></Route> 
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/ChatPage/:id" element={<ChatPage />}></Route>
          <Route path="/AudioCallPage/:id" element={<AudioCallPage />}></Route>
          <Route path="/VideoCallPage/:id" element={<VideoCallPage />}></Route>
          <Route path="/IncomingCallPage" element={<IncomingCallPage />}></Route>
          <Route path="/VideoCallPage2/:id" element={<VideoCallPage2 />}></Route>
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
          <Route path="/IncomingAudioCall" element={<IncomingAudioCall />}></Route>
          <Route path="/IncomingVideoCall" element={<IncomingVideoCall />}></Route>
          <Route path="/RadioChannels/:id" element={<RadioChannels />}></Route>
        </Routes>       
    </Router>
    </div>
  );
}

export default App;
