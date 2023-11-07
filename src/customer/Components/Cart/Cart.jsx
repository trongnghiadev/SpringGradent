import React, { useState } from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import { formatNumber } from "../../../Util/formatNumber";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  console.log("cart ", cart);

  const [cartItems, setCart] = useState(null);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt, cartItems, dispatch]);

  console.log("cart.cartItems: ", cart.cartItems);

  // ... Các dòng mã khác

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <div className="">
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {cart.cartItems
                .sort((a, b) => a.id - b.id)
                .map((item) => (
                  <>
                    <CartItem
                      item={item}
                      showButton={true}
                      updateCart={updateCart}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">CHI TIẾT ĐƠN HÀNG</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Giá ({cart.cart?.totalItem} sản phẩm)</span>
                  <span>{formatNumber(cart.cart.totalPrice)} VND</span>
                </div>
                <div className="flex justify-between">
                  <span>Giảm Giá</span>
                  <span className="text-green-700">
                    -{formatNumber(cart.cart?.discounte)} VND
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phí Vận Chuyển</span>
                  <span className="text-green-700">Miễn Phí</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng Tiền</span>
                  <span className="text-green-700">
                    {formatNumber(cart.cart?.totalDiscountedPrice)} VND
                  </span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                MUA NGAY
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
