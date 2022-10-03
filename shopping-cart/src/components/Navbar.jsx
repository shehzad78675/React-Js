import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const products = useSelector(items => items.cart);
    return (
        <div className="navbar">
            <span>Shopping Store</span>
            <div className="links">
                <Link className="navLinks" to='/'>Home</Link>
                <Link className="navLinks" to='/cart'>Cart</Link>
                <span>Cart items: {products.cartProducts.length}</span>
            </div>
        </div>
    )
}

export default Navbar;