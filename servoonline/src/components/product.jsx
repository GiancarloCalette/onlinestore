import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props){
    useEffect(function(){
        console.log("Hey I'm a product");
    },[]);
    return(
        <div className="product">
            <h5>{props.data.title}</h5>
            <img src={"/img/" + props.data.image} alt=""/>
            <div className="prices">
                <label>Price$ {props.data.price}</label>
                <label>Total {props.data.price}</label>
            </div>
            <QuantityPicker></QuantityPicker>
            <button type="button" className="btn btn-info">Add</button>
        </div>
    );
}
export default Product;