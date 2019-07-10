const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Joi = require("joi");
var food = require("./handlers/food");
var hbs = require("express-hbs");
var templates = require('./handlers/templates');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/food', food.getAllFood);
app.get('/food/:id', food.getSingleFood);
app.post('/food', food.createNewFood);
app.put('/food/:id', food.updateFood);
app.delete('/food/:id', food.deleteFood);
app.patch('/food/:id', food.partialUpdateFood);

app.get("/students", templates.GetStudents);
app.get("/hrana", templates.GetAllFood);

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }
    console.log(`The server is started and listening on ${port}`)
});