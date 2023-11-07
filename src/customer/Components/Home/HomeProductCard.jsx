import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    // Xây dựng đường dẫn hoàn chỉnh đến sản phẩm 15
    const newPath = `/product/${product.id}`;
    
    // Sử dụng `replace` để thay đổi URL mà không thêm vào lịch sử
    navigate(newPath, { replace: true });
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
     
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>
      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
