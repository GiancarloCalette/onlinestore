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
    async function loadCatalog(){
        let service = new DataService();
        let prods = await service.getProducts();
        console.log(prods);
        setProducts(prods);
        let cats=["Connection Devices","Drives","Human Machine Interface (HMI)","Input/Output Modules","Motion Control","Network Security & Interface","Power Supplies","Programable Controllers","Push Buttons & Signaling Devices","Safety Products", "Sensors & Switches"];
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
            <h1>Global Leader in Industrial Automation</h1>
            <h3>Increase productivity and efficiency with your operations</h3>
            <h5>We have {products.length} products available</h5>
            <br></br>
            <button onClick={clearFilter} className="btn btn-danger btn-filter">All</button>
            {category.map((c) => <button key = {c} onClick={()=>filter(c)}className="btn btn-danger btn-filter">{c}</button>)}
            <br></br>
            {prodsToDisplay.map((p) => (
                <Product key={p._id} data = {p}></Product>
            ))}
        </div>
    );
}

export default Catalog;