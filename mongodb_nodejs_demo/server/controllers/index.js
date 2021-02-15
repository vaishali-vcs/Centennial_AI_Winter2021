let express = require('express');
let router = express.Router();

let displayHomePage = (req, res, next)=>{
    res.render('index', {title:'Home'});
}

let displayAboutPage = (req, res, next)=>{
    res.render('index', {title:'About'});
}

let displayProductsPage = (req, res, next)=>{
    res.render('index', {title:'Products'});
}

let displayServicesPage = (req, res, next)=>{
    res.render('index', {title:'Services'});
}

let displayContactPage = (req, res, next)=>{
    res.render('index', {title:'Contact'});
}

let displayBookPage = (req, res, next)=>{
    res.render('index', {title:'Books'});
}

module.exports.displayHomePage = displayHomePage
module.exports.displayAboutPage = displayAboutPage
module.exports.displayBookPage = displayBookPage
module.exports.displayContactPage = displayContactPage
module.exports.displayProductsPage = displayProductsPage
module.exports.displayServicesPage = displayServicesPage