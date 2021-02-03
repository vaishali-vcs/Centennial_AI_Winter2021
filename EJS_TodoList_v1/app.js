const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ['Buy Food', 'Cook Food', 'Eat Food'];
var work_items = [];

app.get("/", function (req, res) {
    day = date.getDate();
    res.render('list', { listTitle: day, newlistitems: items });

})

app.post("/", function (req, res) {
    var item = req.body.newItem;
    console.log(req.body);
    if (req.body.list == "Work") {
        work_items.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work", newlistitems: work_items })
});

app.get("/about", function (req, res) {
    res.render('about');
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});