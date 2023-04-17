import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";


const Product = () => {
    
    const products = [
        {id: 1, title: 'Tee-Shirt', size: ['S','M','L'], color: 'Black', price: 1000},
        {id: 2, title: 'Shirt', size: ['S','M','L'], color: 'Grey', price: 1500},
        {id: 3, title: 'Jeans Pant', size: ['S','M','L'], color: 'Blue', price: 1800},
        {id: 4, title: 'Dress Pant', size: ['S','M','L'], color: 'Brown', price: 1300},
        {id: 5, title: 'Denim Jeans', size: ['S','M','L'], color: 'Nevy Blue', price: 1200},
        {id: 6, title: 'Denim Shirt', size: ['S','M','L'], color: 'Red', price: 900},
        {id: 7, title: 'Jacket', size: ['S','M','L'], color: 'white', price: 3000},
    ]

    const [select, setSelect] = useState('');
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        // console.log(product);
        product.size = select;
        dispatch(addProduct(product))
    }

    return (
        <div>
            <h2 className="heading">Products</h2>
        <div className="cardWrapper">
            {products.map(product => (
                <div className="card" key={product.id}>
                    <h3>{product.title}</h3>
                    {/* <p>Size: {product.size}</p> */}
                    <div>
                    Size:{" "}
                    <select name="size" id="" className="select-box" onChange={(e) => setSelect(e.target.value)}>
                        <option value=''>--Select--</option>
                        {product.size.map((optionSize, index)=> {
                    return    <option value={optionSize} key={index}>{optionSize}</option>
                        })}
                    </select>
                    {/* {product.size = changeProductSize(product.size, select)} */}
                    </div>
                    <p>Color: {product.color}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => select === '' ? alert('Please select the size') :  handleAddToCart(product)}>Add to cart</button>
                </div>
            ))}

        </div>
        </div>
    )
}

export default Product;