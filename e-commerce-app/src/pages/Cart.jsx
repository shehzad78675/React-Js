import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { removeProduct } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector((state) => state.cart);
  const wishListProducts = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  console.log(products);
  const subTotal = products.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleDeleteProduct = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div>
      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <Link to="/categories">
            <button className="btn bg-white text-purple-700 border-2 border-purple-700 hover:bg-white">
              Continue Shopping
            </button>
          </Link>
          <div className="flex underline text-lg hover:cursor-pointer mobile:my-3">
            <p>Items in your Cart: {products.cart.length}</p>
            <Link to="/wishlist">
              <p className="ml-5">Wishlist Items: {wishListProducts.wishList.length}</p>
            </Link>
          </div>
          <button className="btn">Checkout</button>
        </div>

        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1 ">
            {/* list of products */}
            {products.cart.map((item, index) => {
              const { id, title, image, price, color, size, quantity } = item;
              return (
                <div key={index} className="relative">
                  <Close
                    className="absolute top-0 right-5 cursor-pointer"
                    onClick={() => handleDeleteProduct(item)}
                  />
                  <div className="flex w-[100%] h-auto items-center mobile:flex-col">
                    <div className="flex self-start pl-5">
                      {/* product desc */}
                      <img
                        src={image}
                        alt="product_image"
                        className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                      />

                      <div className="flex flex-col ml-5 h-auto justify-between w-[400px]">
                        <p>
                          <b className="mr-2">ID:</b>
                          {id}
                        </p>
                        <p>
                          <b className="mr-2">Product:</b>
                          {title}
                        </p>
                        <p className="flex items-center">
                          <b className="mr-2">Color:</b>
                          <div
                            className={`rounded-full border-2 p-[10px] cursor-pointer ${
                              color === "red"
                                ? "bg-red-600"
                                : color === "blue"
                                ? "bg-blue-600"
                                : "bg-yellow-400"
                            } ml-1 w-[20px] h-[20px]`}
                          ></div>
                        </p>
                        <p>
                          <b className="mr-2">Size:</b>
                          {size}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-auto mobile:mt-3">
                      {/* product quantity and price */}

                      <Counter
                        quantity={quantity}
                        pageName={"cart"}
                        product={{ id, color, size }}
                      />
                      <p className="flex items-center justify-center text-xl mt-5">
                        Price:
                        <b className="ml-3">${(price * quantity).toFixed(2)}</b>
                      </p>
                    </div>
                  </div>
                  <hr className="my-7" />
                </div>
              );
            })}
          </div>

          <div className="flex-[0.4] w-auto h-[40vh] border-2 border-purple-700 rounded-md shadow-lg flex flex-col items-center p-5">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex items-center justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex items-center justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>-$40</p>
            </div>
            <div className="flex items-center justify-between mt-3 w-[100%] text-3xl font-bold">
              <p>Total</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
