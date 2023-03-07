import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return(
        <div className="product">
            <h5>Title goes here</h5>
            <img src="https://picsum.photos/200/150" alt=""/>
            <div className="prices">
                <label>Total</label>
                <label>Price</label>
            </div>
            <QuantityPicker></QuantityPicker>
        </div>
    );
}
export default Product;