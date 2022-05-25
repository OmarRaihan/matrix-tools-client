import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "../AddReview/AddReview.css";
import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  const { register } = useForm();

  if (!user) {
    navigate("/login");
  }

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      purchaseId: purchaseId,
      img: event.target.img.value,
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      order: event.target.order.value,
      email: user?.email,
    };

    // Item Added to bike collection
    axios
      .post("http://localhost:5000/newProduct", newProduct)

      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Product is added in collection.");
          event.target.reset();
        }
      });
  };
  return (
    <div style={{ padding: "1.3rem" }} className="add-product-form mx-auto bg-green-200 my-24 rounded-lg">
      <h4 className="text-center text-2xl font-bold mt-4">Add Product</h4>

      <form className="grid grid-cols-1 gap-2 justify-items-center mt-8" onSubmit={handleAddProduct}>
        <input
          className="input input-bordered text-lg w-full max-w-sm"
          placeholder="Photo URL"
          type="text"
          name="img"
          autoComplete="off"
          {...register("img", { required: true })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-sm"
          placeholder="Name"
          type="text"
          name="name"
          autoComplete="off"
          {...register("name", { required: true })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-sm"
          placeholder="Price"
          type="text"
          name="price"
          {...register("price", { required: true }, { min: 1, max: 5 })}
        />

        <textarea
          className="textarea textarea-bordered text-lg w-full max-w-sm"
          placeholder="Description"
          type="text"
          name="description"
          {...register("description", { required: true }, { min: 1, max: 5 })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-sm"
          placeholder="Available Quantity"
          type="text"
          name="quantity"
          {...register("quantity", { required: true }, { min: 1, max: 5 })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-sm"
          placeholder="Minimum Order"
          type="text"
          name="order"
          {...register("order", { required: true }, { min: 1, max: 5 })}
        />

        <input
          className="input input-bordered text-lg w-full max-w-sm"
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

export default AddProduct;
