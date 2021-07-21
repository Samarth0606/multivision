const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "HATHWAY",
        image:"https://images.unsplash.com/photo-1617882597767-ede7f0dd2db3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2lmaSUyMG1vZGVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
        price: 1200,
        desc: "This Hathway wifi-box has a refund warrenty of 6 months. If this modem face technical issues within 6 months the company will refund your entire money or will replace the modem with 0 effective cost "
    },
    {
        name: "DEN",
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lmaSUyMG1vZGVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 1000 ,
        desc: "This Den wifi-box has a refund warrenty of 6 months. If this modem face technical issues within 6 months the company will refund your entire money or will replace the modem with 0 effective cost "
    },
    {
        name: "SITICABLE",
        image: "https://images.unsplash.com/photo-1554098415-4052459dc340?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lmaSUyMG1vZGVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
        price: 1100 ,
        desc: "This Siticable wifi-box has a refund warrenty of 6 months. If this modem face technical issues within 6 months the company will refund your entire money or will replace the modem with ZERO effective cost "
    }
];

const seedDB = async()=>{
    await Product.insertMany(products);
    console.log("DB seeded");
}

module.exports = seedDB;