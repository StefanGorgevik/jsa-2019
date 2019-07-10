var model = require("../models/students");

var GetStudents = (req, res) => {
    model.GetAll()
    .then(data => { //success
        return res.render("students", {f:data});
    })  
    .catch(err => { //fail
        return res.send("error!");
    }) 
}

module.exports = {
    GetStudents
}