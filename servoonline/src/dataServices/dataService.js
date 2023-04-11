import axios from "axios";

var catalog = [
    {
        "title":"Motor",
        "category":"motion",
        "price":200,
        "image":"motor.jpg",
        "_id":"1",
    },

    {
        "title":"Servo",
        "category":"motion",
        "price":2000,
        "image":"servo.jpg",
        "_id":"2",
    },

    {
        "title":"Cable",
        "category":"cables",
        "price":100,
        "image":"servo-cable.jpg",
        "_id":"3",
    },

    {
        "title":"Encoder",
        "category":"sensors",
        "price":20,
        "image":"encoder.jpg",
        "_id":"4",
    },

    {
        "title":"Servo drive",
        "category":"electronics",
        "price":500,
        "image":"servo-drive.jpg",
        "_id":"5",
    },

    {
        "title":"AC drive",
        "category":"electronics",
        "price":300,
        "image":"ac-drive.jpg",
        "_id":"6",
    },

    {
        "title":"PLC Safety Guard",
        "category":"controllers",
        "price":7000,
        "image":"plc-safety.jpg",
        "_id":"7",
    },

    {
        "title":"Ethernet Switch",
        "category":"switches",
        "price":700,
        "image":"ethernet-switch.jpg",
        "_id":"8",
    }
];

class DataService {
    async getProducts(){
        //return catalog;
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
}

export default DataService;