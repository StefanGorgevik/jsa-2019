var model = require('../models/model');

var GetStudents = (req, res) => {
    model.GetAll()
    .then(data => {
        return res.render('students', {students: data});
    })
    .catch(err => {
        return res.send('Error!');
    })
};

module.exports = {
    GetStudents
}