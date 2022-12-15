import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../state/AuthContext";

const Profile = ({ currentUser }) => {
  const navigate = useNavigate();
  console.log(currentUser);
  useEffect(() => {
    console.log(currentUser);
    if (currentUser == "") {
      return;
    } else if (!currentUser) {
      navigate("/home");
    }
  }, [currentUser]);

  return (
    <div>
      <div>Profile</div>
      <div>Profile</div>
    </div>
  );
};

export default Profile;
