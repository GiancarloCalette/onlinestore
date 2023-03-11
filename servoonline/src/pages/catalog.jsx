import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";
import { Button } from "bootstrap";

function Catalog(){
    const[products,setProducts] = useState([]);
    const[category, setCategory] = useState([]);
    const[prodsToDisplay, setProdsToDisplay] = useState([]);
    useEffect(function(){
        loadCatalog();
    }, []);
    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
        let cats=["motion","cables","sensors","electronics","controllers","switches"];
        setCategory(cats);
        setProdsToDisplay(prods);
    }
    function filter(category){
        console.log(category);
        let list = [];
        for(let i=0; i<products.length; i++){
            let prod = products[i];
            if(prod.category === category){
                list.push(prod);
            }
            setProdsToDisplay(list);
        }
    }
    function clearFilter(){
        setProdsToDisplay(products);
    }
    return(
        <div className="catolog">
            <h1>Hello check our stuff</h1>
            <h5>We have {products.length} new products for you</h5>
            <br></br>
            <button onClick={clearFilter} className="btn btn-success btn-filter">All</button>
            {category.map((c) => <button key = {c} onClick={()=>filter(c)}className="btn btn-success btn-filter">{c}</button>)}
            <br></br>
            {prodsToDisplay.map((p) => (
                <Product key={p._id} data = {p}></Product>
            ))}
        </div>
    );
}

export default Catalog;