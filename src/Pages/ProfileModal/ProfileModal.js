import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ProfileModal = () => {
  const [user] = useAuthState(auth);

  const handleProfile = (event) => {
    event.preventDefault();
    const profile = {
      education: event.target.education.value,
      location: event.target.location.value,
      social: event.target.social.value,
      email: user?.email,
    };

    // Item Added to bike collection
    // axios
    //   .post("http://localhost:5000/", profile)

    //   .then((response) => {
    //     const { data } = response;
    //     if (data.insertedId) {
    //       toast("Profile is set");
    //     } else {
    //       toast.error("Profile is failed to set");
    //     }
    //   });

    fetch("http://localhost:5000/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("Profile is set");
        } else {
          toast.error("Profile is failed to set");
        }
      });
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
