import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from "react";
import globalContext from "../state/globalContext";

function Product(props){
    const[quantity, setQuantity] = useState(1);
    const addToCart = useContext(globalContext).addToCart;

    useEffect(function(){
        console.log("Hey I'm a product");
    },[]);

    function onQuantityChange(qty){
        console.log("New value: " + qty);
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);        
    }

    function handleAddClick(){
        console.log("Adding to cart...");
        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        console.log(prodForCart);
        addToCart(prodForCart);
    }

    return(
        <div className="product">
            <h5>{props.data.title}</h5>
            <img src={"/img/" + props.data.image} alt=""/>
            <div className="prices">
                <label>Total ${getTotal()}</label>
                <label>Price ${props.data.price.toFixed(2)}</label>
            </div>
            <div className="controls">
                <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
                <button type="button" className="btn btn-info" onClick={handleAddClick}><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
            </div>
            
        </div>
    );
}
export default Product;