import React, { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import Cart from "../Cart/Cart";

const ContainerProducts = () => {
  const [productList, setProductList] = useState([]);

  const handleAddProduct = (productName) => {
    setProductList([...productList, productName]);
  };

  const handleRemoveProduct = (productName) => {
    setProductList(productList.filter((product) => product !== productName));
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
      <Cart products={productList} onRemoveProduct={handleRemoveProduct} />
    </div>
  );
};

export default ContainerProducts;
