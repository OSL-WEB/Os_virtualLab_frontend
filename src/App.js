import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Nopage from './components/Nopage';
import "./styles/Navbar.css";
import "./styles/Content.css";
import "./styles/headerr.css";
import './styles/TeamMemberCard.css'; 
import './styles/spinner.css';
import './App.css'

import Headerr from './components/Headerr.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './AdminPannel/Register';
import Login from './AdminPannel/Login';
import AdminPanel from './AdminPannel/AdminPanel';
import ForgotPassword from './AdminPannel/ForgotPassword';
import UserProfile from './AdminPannel/UserProfile';
import EmailVerify from './AdminPannel/EmailVerify';
import ResetPassword from './AdminPannel/ResetPassword';
import ContentForm from './AdminPannel/ContentForm';
import Contentt from './AdminPannel/Contentt';
const App = () => {
  return (
    <>
    
    <Headerr/>
    
      <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/home2" element={<Home2/>} />
          <Route  path="/home3" element={<Home3/>} />
          <Route path="/admin" element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/AdminPanel/*' element={<AdminPanel />} />
          <Route path='/user-profile' element={<AdminPanel/>} />
          <Route path='/AdminPanel/user-profile/add-content' element={<ContentForm></ContentForm>} />
          <Route path='/AdminPanel/user-profile/view-content' element={<Contentt></Contentt>} />
          <Route path='/verify/:token' element={<EmailVerify />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          </Routes>
          
        
    </>
  )
}

export default App;
