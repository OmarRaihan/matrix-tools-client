import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "../Reviews/Reviews.css";

const Reviews = () => {
  const [user, loading] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReview = async () => {
      //   const email = user?.email;
      const url = `http://localhost:5000/review`;
      const { data } = await axios.get(url);
      setReviews(data);
    };
    getReview();
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="my-5">
        <h2 className="text-center text-4xl font-bold my-10">REVIEWS</h2>
        <hr />
      </div>
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review._id} review={review}>
            <div className="review-card card border-0 rounded-none mx-auto p-4">
              <figure className="px-2 pt-2">
                <img className="w-28 rounded-full" src={review?.img} alt="" />
              </figure>
              <div className="items-center text-center mt-2">
                <h4 style={{ color: "#36AE7C" }} className="text-2xl font-bold">
                  {review?.name}
                </h4>
                <h5>Ratings: {review?.ratings} Star</h5>
                <h6>Review: {review?.reviews}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-4 mb-10" />
    </div>
  );
};

export default Reviews;
