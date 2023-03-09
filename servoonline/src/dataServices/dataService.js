var catalog = [
    {
        "title":"Motor",
        "category":"engineering",
        "price":200,
        "image":"motor.jpg",
        "_id":"1",
    },

    {
        "title":"Servo",
        "category":"engineering",
        "price":2000,
        "image":"servo.jpg",
        "_id":"2",
    },

    {
        "title":"Cable",
        "category":"engineering",
        "price":100,
        "image":"servo-cable.jpg",
        "_id":"3",
    },

    {
        "title":"Encoder",
        "category":"engineering",
        "price":20,
        "image":"encoder.jpg",
        "_id":"4",
    },

    {
        "title":"Servo drive",
        "category":"engineering",
        "price":500,
        "image":"servo-drive.jpg",
        "_id":"5",
    },

    {
        "title":"AC drive",
        "category":"engineering",
        "price":300,
        "image":"ac-drive.jpg",
        "_id":"6",
    },

    {
        "title":"PLC Safety Guard",
        "category":"engineering",
        "price":7000,
        "image":"plc-safety.jpg",
        "_id":"7",
    },

    {
        "title":"Ethernet Switch",
        "category":"engineering",
        "price":700,
        "image":"ethernet-switch.jpg",
        "_id":"8",
    }
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;