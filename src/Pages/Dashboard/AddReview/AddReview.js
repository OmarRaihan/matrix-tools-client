import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "../AddReview/AddReview.css";

const AddReview = () => {
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  const { register } = useForm();

  if (!user) {
    navigate("/login");
  }

  const handleReview = (event) => {
    event.preventDefault();

    const review = {
      purchaseId: purchaseId,
      img: event.target.img.value,
      name: event.target.name.value,
      ratings: event.target.ratings.value,
      reviews: event.target.reviews.value,
      email: user?.email,
    };

    // Review Added to Review Collection
    axios
      .post("http://localhost:5000/review", review)

      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Review is added in review section.");
          event.target.reset();
        }
      });
  };

  return (
    <div style={{ padding: "1.3rem" }} className="add-review-form mx-auto bg-green-200 my-24 rounded-lg">
      <h4 className="text-center text-xl font-bold">Add Review</h4>
      <form className="grid grid-cols-1 gap-2 justify-items-center mt-8" onSubmit={handleReview}>
        <input
          className="input input-bordered text-lg w-full max-w-xs"
          placeholder="Photo URL"
          type="text"
          name="img"
          value={user?.photoURL}
          autoComplete="off"
          disabled
          {...register("img", { required: true })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-xs"
          placeholder="Name"
          type="text"
          name="name"
          value={user?.displayName}
          autoComplete="off"
          disabled
          {...register("name", { required: true })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-xs"
          placeholder="Ratings"
          type="number"
          name="ratings"
          {...register("ratings", { required: true }, { min: 1, max: 5 })}
        />
        <textarea
          className="textarea textarea-bordered text-lg w-full max-w-xs"
          placeholder="Review"
          type="number"
          name="reviews"
          {...register("reviews", { required: true }, { min: 1, max: 5 })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-xs"
          placeholder="Email"
          type="email"
          name="email"
          value={user?.email}
          disabled
          {...register("email", { required: true })}
        />

        <input style={{ backgroundColor: "#36AE7C" }} type="submit" value="Add" className="btn border-0 mt-4 w-44 max-w-xs" />
      </form>
    </div>
  );
};

export default AddReview;
