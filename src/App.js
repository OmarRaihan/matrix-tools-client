import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Purchase from "./Pages/Purchase/Purchase";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Products from "./Pages/Home/Products/Products";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import NotFound from "./Pages/NotFound/NotFound";
import Topbar from "./Pages/Shared/Topbar/Topbar";
import NewProducts from "./Pages/Home/NewProducts/NewProducts";
import Blogs from "./Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageAdmin from "./Pages/Dashboard/ManageAdmin/ManageAdmin";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import Reviews from "./Pages/Home/Reviews/Reviews";
import Payment from "./Pages/Dashboard/Payment/Payment";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/NewProducts" element={<NewProducts />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/portfolio"
          element={
            <RequireAuth>
              <MyPortfolio />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="manageOrders" element={<ManageOrders />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="admin"
            element={
              <RequireAdmin>
                <ManageAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route path="manageProducts" element={<ManageProducts />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
