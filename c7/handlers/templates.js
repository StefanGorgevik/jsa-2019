// var fs = require("fs");
var modelFood = require("../models/food");

var First = (req, res) => {
    var data = {
        ime: 'Pero', 
        prezime: 'Perovski',
        studenti: [
            {ime: 'Pero', prezime: 'Perovski'},
            {ime: 'Janko', prezime: 'Jankovski'},
            {ime: 'Stanko', prezime: 'Stankovski'}
        ]
    };
    res.render('first', data);
};

var Food = (req, res) => {
    modelFood.GetAll()
    .then(data => {
        return res.render("food", {f:data})       
    })
    .catch(err => {
        return res.send("ERROR!");
    })
}

module.exports = {
    First,
    Food
}


/* var Food = (req, res) => {
    fs.readFile("./food_list.json", "utf8", (err, data) => {
        if(err){
            return res.send("Could not read file!");
        }
            jData = JSON.parse(data);
            res.render("food", {f:jData});
    });
}
 */