import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51L0f16IlmliU4TYqA5wVdg105AKDSa6AocUPen6E9ZPFmsxgSXV7cPW1fnBem15c1Zp0D3YeG87i9ZyT5zLd6R1L00ElRVBrBk");

const Payment = () => {
  const { id } = useParams();
  const url = `https://thawing-hamlet-83781.herokuapp.com/order/${id}`;

  const { data: product, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <p className="text-green-500 font-bold">Hello, {product?.name}</p>
          <h2 className="card-title">Pay for {product?.product}</h2>
          <p>Please Pay : ${product?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
