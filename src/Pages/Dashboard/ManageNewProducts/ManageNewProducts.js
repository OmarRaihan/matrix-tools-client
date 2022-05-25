import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useNewProducts from "../../Hooks/useNewProducts/useNewProducts";
import "../ManageNewProducts/ManageNewProducts.css";

const ManageNewProducts = () => {
  const [newProducts, setNewProducts] = useNewProducts();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `http://localhost:5000/newProduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = newProducts.filter((newProduct) => newProducts._id !== id);
            setNewProducts(remaining);
          }
        });
    }
    window.location.reload();
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <div className="table-container my-5">
        <div>
          <h2 className="text-center text-3xl font-bold mt-20 mb-2">NEW PRODUCTS</h2>
          <hr />
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Min-Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newProducts.map((p) => (
              <tr key={p._id} className="data-row">
                <td>
                  {" "}
                  <img className="w-20 rounded-lg" src={p.img} alt="" />
                </td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.availableQuantity}</td>
                <td>{p.minimumOrder}</td>
                <td>
                  <div>
                    <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0" onClick={() => handleDelete(p._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageNewProducts;
