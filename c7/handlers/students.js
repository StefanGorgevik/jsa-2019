var getAllStudents = (req, res ) =>{
    res.send("Hello from /students");
};

var getStudentByID = (req, res) => {
    res.send("Get single student with id: " + req.params.id)
};

var getStudentByIDName = (req, res) => {
    res.send("Get single student with id: " + req.params.id + " with name: " + req.params.name)
};

var getStudentsSubjGrades = (req, res) => {
    res.send("Student with id: " + req.params.id + " grades for subject: " + req.params.subject)
};

var postStudent = (req, res) => {
    res.send("Student posted!");
};

module.exports = {
    getAllStudents,
    getStudentByID,
    getStudentByIDName,
    getStudentsSubjGrades,
    postStudent
};