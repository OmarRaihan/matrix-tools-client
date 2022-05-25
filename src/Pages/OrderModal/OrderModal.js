import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderModal = ({ order }) => {
  const { name } = order;
  const [user] = useAuthState(auth);

  const handleOrder = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    console.log(address);
  };

  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">
            Order for:{" "}
            <span style={{ color: "#36AE7C" }} className="italic">
              {name}
            </span>
          </h3>
          {/* Order Form */}
          <form onSubmit={handleOrder} className="grid grid-cols-1 gap-2 justify-items-center mt-8">
            <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />

            <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />

            <input type="text" name="address" placeholder="Address" required className="input input-bordered w-full max-w-xs" />

            <input type="text" name="phone" placeholder="Phone Number" required className="input input-bordered w-full max-w-xs" />

            <input type="number" name="quantity" placeholder="Order Quantity" required className="input input-bordered w-full max-w-xs" />

            <input type="submit" value="submit" className="btn border-0 w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
