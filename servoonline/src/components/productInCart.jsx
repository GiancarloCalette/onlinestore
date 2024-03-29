import "./productInCart.css";

function ProductInCart(props){
    function getTotal(){
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
    return (
        <div className="prod-cart">
            <img src={"/img/" + props.data.image} alt=""/>
            <h5>{props.data.title}</h5>
            <label>{props.data.quantity}</label>
            <label>${props.data.price.toFixed(2)}</label>
            <label>${getTotal()}</label>
        </div>
    );
}

export default ProductInCart;