var fs = require('fs');

var GetStudents = (req, res) => {
    fs.readFile("./students_list.json", "utf8", (err, data) => {
        if(err){
            throw err;
        }
            var jData = JSON.parse(data);
            var newData = {};
            newData.studenti = jData;
            res.render("students", newData);
    });
}

var GetAllFood = (req, res) => {
    fs.readFile("./food_list.json", "utf8", (err, data) => {
        if(err){
            throw err;
        }
            var jData = JSON.parse(data);
            var newData = {};
            newData.foods = jData;
            res.render("food", newData);
    });
}
    module.exports = {
        GetStudents,
        GetAllFood
    };