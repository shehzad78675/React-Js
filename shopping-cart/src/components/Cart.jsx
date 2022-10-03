import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  updateProductSize,
  updateProductIndexIncrease,
  updateProductIndexDecrease
} from "../store/cartSlice";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const size = ["S", "M", "L"];

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((items) => items.cart);

  const handleRemoveToCart = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleChangeSize = (productId, size) => {
    const payload = {
      id: productId,
      size: size,
    };

    dispatch(updateProductSize(payload));
  };

  const handleIncreaseIndex = (productId) => {
    dispatch(updateProductIndexIncrease(productId));
  };

  const handleDecreaseIndex = (productId) => {
    dispatch(updateProductIndexDecrease(productId));
  };
  return (
    <div>
      <h2 className="heading">Cart Products</h2>

      <div className="cardWrapper">
        {cart.cartProducts.map((product) => (
          <div className="card-cart" key={product.id}>
            {/* {setProductSize(product.size)} */}
            <div className="content">
              <h3>{product.title}</h3>
              <p>
                Size: {product.size}, Color: {product.color}
              </p>
            </div>
            <select
              name=""
              id=""
              onChange={(e) => {
                handleChangeSize(product.id, e.target.value);
              }}
              value={product.size}
            >
              <option value="">--Select--</option>
              {size.map((optionSize, index) => {
                return (
                  <option value={optionSize} key={index}>
                    {optionSize}
                  </option>
                );
              })}
            </select>
            <p>Price: {product.price}</p>
            <div className="quantity">
              <button onClick={() => handleDecreaseQuantity(product)}>-</button>
              <div className="count">{product.cartQuantity}</div>
              <button onClick={() => handleIncreaseQuantity(product)}>+</button>
            </div>
            <p>Total price: {product.price * product.cartQuantity}</p>
            <div>
              <BsFillArrowUpCircleFill
                style={{ marginRight: 5 }}
                onClick={() => handleDecreaseIndex(product.id)}
              />
              <BsFillArrowDownCircleFill
                onClick={() => handleIncreaseIndex(product.id)}
              />
            </div>
            <button onClick={() => handleRemoveToCart(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <div>
          <div className="continue">
            <Link to="/" className="continue-link">
              Continue to shopping
            </Link>
          </div>
        </div>
        <div className="total-price">
          Subtotal:{" "}
          {cart.cartProducts.reduce((productPriceSum, product) => {
            return productPriceSum + product.price * product.cartQuantity;
          }, 0)}
          <div className="payment">
            <Link to="/cart/payment" className="payment-button">
              Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
