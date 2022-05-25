import useNewProducts from "../../Hooks/useNewProducts/useNewProducts";
import "../NewProducts/NewProducts.css";

const NewProducts = () => {
  const [newProducts] = useNewProducts();

  return (
    // <div className="grid">
    //   <div className="container mx-auto my-10">
    //     <h2 className="text-center text-5xl font-bold mt-5 mb-10">NEW ARRIVAL</h2>
    //     <div className="new-products-container mb-5">
    //       {newProducts.map((newProduct) => (
    //         <NewProduct key={newProduct.id} newProduct={newProduct}></NewProduct>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // new

    <div>
      <h2 className="text-center text-5xl font-bold mt-16">NEW ARRIVAL</h2>
      <div className="new-product-container mx-auto">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <input type="radio" name="dot" id="three" />
        <input type="radio" name="dot" id="four" />
        <div className="main-card">
          {newProducts.map((product) => (
            <div key={product._id} product={product}>
              <div className="new-product-cards card card-body">
                <div className="new-card">
                  <div className="content">
                    <div className="img">
                      <img src={product?.img} alt="" />
                    </div>
                    <div className="details mt-2">
                      <p className="name">{product?.name}</p>
                      <p className="">{product?.description.slice(0, 70)}</p>
                      <p className="text-lg mt-2">Price: ${product?.price}</p>
                      <p className="text-lg">Quantity: {product?.availableQuantity}</p>
                      <p className="text-lg">Minimum Order: {product?.minimumOrder}</p>
                      <div className="card-actions">
                        <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0 text-lg w-64 mx-auto rounded-md mt-4">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <label htmlFor="one" className=" active one"></label>
          <label htmlFor="two" className="two"></label>
          <label htmlFor="three" className="three"></label>
          <label htmlFor="four" className="four"></label>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
