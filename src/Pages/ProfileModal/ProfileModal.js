import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfileModal = ({ profile }) => {
  const [user] = useAuthState(auth);

  const handleProfile = (event) => {
    event.preventDefault();
    const profile = {
      education: event.target.education.value,
      location: event.target.location.value,
      social: event.target.social.value,
    };
  };
  return (
    <div>
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          {/* Order Form */}
          <form onSubmit={handleProfile} className="grid grid-cols-1 gap-2 justify-items-center mt-8">
            <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />

            <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />

            <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />

            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full max-w-xs" />

            <input type="text" name="social" placeholder="Social Links" className="input input-bordered w-full max-w-xs" />

            <input type="submit" value="submit" className="btn border-0 w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
