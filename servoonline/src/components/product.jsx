import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props){
    const[quantity, setQuantity] = useState(1);
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
        console.log("Hello");
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
                <button type="button" className="btn btn-info" onClick={handleAddClick}><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
            </div>
            
        </div>
    );
}
export default Product;