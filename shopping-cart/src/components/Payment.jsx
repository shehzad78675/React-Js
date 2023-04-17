import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  const cart = useSelector((items) => items.cart);

  return (
    <div>
      <h2 className="heading">Cart Products</h2>

      <div className="cardWrapper">
        {cart.cartProducts.map((product) => (
          <div className="card-cart" key={product.id}>
            <div className="content">
              <h3>{product.title}</h3>
              <p>
                Size: {product.size}, Color: {product.color}
              </p>
            </div>
            <p>Price: {product.price}</p>
            <div>
              <div className="count">Quantity: {product.cartQuantity}</div>
            </div>
            <p>Total price: {product.price * product.cartQuantity}</p>
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

export default Payment;
