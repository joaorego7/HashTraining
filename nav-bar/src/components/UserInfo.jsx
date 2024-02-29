import React from "react";
import "./UserInfo.css";

const UserInfo = ({ user }) => {
 
  if (!user || typeof user !== "object" || !user.photo || !user.name) {
    console.error("Invalid 'user' prop:", user);
    return null; 
  }

  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={user.photo} alt={user.name} className="user-photo" />
      </div>
      <span className="user-name">{user.name}</span>
    </div>
  );
};

export default UserInfo;
