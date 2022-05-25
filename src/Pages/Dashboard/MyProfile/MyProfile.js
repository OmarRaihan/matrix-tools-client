import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ProfileModal from "../../ProfileModal/ProfileModal";
import "../MyProfile/MyProfile.css";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState();
  return (
    <div>
      <div className="card border profile-1 mx-auto my-20">
        <div className="flex justify-between items-center mx-6 my-2">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <label
            onClick={() => setProfile(user)}
            style={{ background: "none" }}
            htmlFor="profile-modal"
            className="btn border-0 text-black font-bold"
          >
            Edit
          </label>
        </div>
        <hr />
        <div className="m-6">
          <div className="mb-6">
            <p className="font-bold text-gray-400">Full Name</p>
            <p className="text-2xl font-semibold">{user?.displayName}</p>
            <hr />
          </div>
          <div className="mb-6">
            <p className="font-bold text-gray-400">Email Address</p>
            <p className="text-xl font-semibold">{user?.email}</p>
            <hr />
          </div>
          <div className="mb-6">
            <p className="font-bold text-gray-400">Education</p>
            <p className="text-xl font-semibold">{user?.email}</p>
            <hr />
          </div>
          <div className="mb-6">
            <p className="font-bold text-gray-400">Area</p>
            <p className="text-xl font-semibold">{user?.email}</p>
            <hr />
          </div>
          <div className="mb-6">
            <p className="font-bold text-gray-400">Social Links</p>
            <p className="text-xl font-semibold">{user?.email}</p>
            <hr />
          </div>
        </div>
      </div>
      {profile && <ProfileModal profile={profile} />}
    </div>
  );
};

export default MyProfile;
