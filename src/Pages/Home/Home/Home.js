import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useProducts from "../../Hooks/useProducts/useProducts";
import Loading from "../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";
import BusinessReview from "../BusinessReview/BusinessReview";
import Capabilities from "../Capabilities/Capabilities";
import NewProducts from "../NewProducts/NewProducts";
import Product from "../Product/Product";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [products] = useProducts([]);
  const [loading] = useAuthState(auth);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <Banner />
      <div className="container mx-auto mb-20">
        <div className="mt-20 mb-20">
          <h5 className="text-center font-bold text-lg">FEATURED</h5>
          <h2 className="text-center font-bold text-5xl">PRODUCTS</h2>
        </div>
        <div className="products-container">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <Reviews />
      <Capabilities />
      <NewProducts />
      <BusinessReview />
    </div>
  );
};

export default Home;
