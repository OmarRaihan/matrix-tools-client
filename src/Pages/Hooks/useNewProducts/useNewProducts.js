import { useEffect, useState } from "react";

const useNewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("https://thawing-hamlet-83781.herokuapp.com/newProduct")
      .then((res) => res.json())
      .then((data) => setNewProducts(data));
  }, []);
  return [newProducts, setNewProducts];
};

export default useNewProducts;
