// Profile.js
import React from "react";
import { useUser } from "../userContext/userContext";
import AppBars from "../NavigationBar/Appbar";

const Profile = () => {
  const { user } = useUser();

  

  return (
    <div>
        <AppBars/>
      <h1 style={{color:'greenyellow'}}>Welcome, {user.name}!</h1>
      
      {/* Add more profile information or components as needed */}
    </div>
  );
};

export default Profile;
