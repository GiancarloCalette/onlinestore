import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";
import { Button } from "bootstrap";

function Catalog(){
    const[products,setProducts] = useState([]);
    useEffect(function(){
        loadCatalog();
    }, []);
    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }
    return(
        <div className="catolog">
            <h1>Hello check our stuff</h1>
            <h5>We have {products.length} new products for you</h5>
            {products.map((p) => (
                <Product data = {p}></Product>
            ))}
        </div>
    );
}

export default Catalog;