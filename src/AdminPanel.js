import React, { useState } from "react";
import { useNavigate , Routes,Route} from "react-router-dom";
import UserProfile from "./UserProfile";
import "./adminPanel.css";

const AdminPanel = () => {
    
    //const navigate = useNavigate(); //hook
    const user = JSON.parse(localStorage.getItem('user')); //retriving user details from local storage
    console.log("User:", user);

    // const handleNavigateToUserProfile = () => {
    //     console.log("Navigating to user profile");
    //     navigate('/AdminPanel/user-profile');
    // };

    return(
        <div>
            <h2>Admin Panel</h2>
            <UserProfile user={user} /> 
            {/* Pass user details as a prop */}
            {/* <button onClick={handleNavigateToUserProfile}>User Profile</button> */}

            <Routes>
                <Route path='/AdminPanel/user-profile' element={<UserProfile user={user} />} />
            </Routes>
        </div>
    );

};
export default AdminPanel;