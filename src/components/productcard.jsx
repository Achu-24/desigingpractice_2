// write product card here
import React from "react";
import Button from "./button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150"; // Dummy image URL
  const productName = "Cool Sneakers";
  const price = "$49.99";

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{productName}</h2>
      <p className="text-gray-600">{price}</p>
      <Button />
    </div>
  );
};

export default ProductCard;
