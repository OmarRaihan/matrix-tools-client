import { useEffect, useState } from "react";

const useNewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newProduct")
      .then((res) => res.json())
      .then((data) => setNewProducts(data));
  }, []);
  return [newProducts, setNewProducts];
};

export default useNewProducts;
