import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){
    let [quantity, setQuantity] = useState(1);
    function decrease(){
        if (quantity === 1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }
    return (
        <div className="qt-picker">
            <button className="qt-picker-btn" disabled={quantity === 1} onClick={decrease}> - </button>
            <label> {quantity} </label>
            <button className="qt-picker-btn" onClick={increase}> + </button>
        </div>
    );
}
export default QuantityPicker;