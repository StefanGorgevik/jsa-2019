var fs = require('fs');
var Joi = require("joi");
const schema = {
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(15).required(),
    price: Joi.number().integer().min(1).required(),
    calories: Joi.number().integer().required()
};

var getAllFood = (req,res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) =>{
        if(err) {
           return res.send("Could not read file!");
        }
    var jData = JSON.parse(data).sort((a,b) => {return a.id - b.id});
    res.send(jData);
    });
};

var getSingleFood = (req,res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) =>{
        if(err) {
           return res.send("Could not read file!");
        }
    var jData = JSON.parse(data);
    const food = jData.find(c => c.id === Number(req.params.id));
    if(!food) {
        return res.status(404).send(`The id is not found!`);
    };
    res.send(food);
});
};

var createNewFood = (req, res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) => {
        if(err) {
            return res.send("Could not read file!");
        };
        var jData = JSON.parse(data);
        var result = Joi.validate(req.body, schema);
        if(result.error) {
            return res.status(400).send(result.error.details[0].message);
        };
        var newFood = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            calories: req.body.calories
        };
        jData.push(newFood);
        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(201).send(req.body);
        });
    });
};

var updateFood = (req, res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) => {
        if(err) {
            return res.send("Could not read file!");
        };
        var jData = JSON.parse(data);
        const food = jData.find(c => c.id === Number(req.params.id));
        if(!food) {
            return res.status(404).send("The course with the given ID was not found!");
        }
       
        var result = Joi.validate(req.body,schema);
        if(result.error) {
            return res.status(400).send(result.error.details[0].message);
        };
        food.id = req.body.id;
        food.name = req.body.name;
        food.price = req.body.price;
        food.calories = req.body.calories;


        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(200).send('Item updated!');
        });
    });
};

var deleteFood = (req, res) => {
    fs.readFile("./food_list.json", "utf8", (err,data) => {
        if(err) {
            return res.send("Could not read file!");
        };
        var jData = JSON.parse(data);
        var foundFood = jData.find( f => f.id === Number(req.params.id));
        if(!foundFood) {
            return res.status(404).send("Not found!");
        }
        var index = jData.indexOf(foundFood);
        jData.splice(index, 1);
        fs.writeFile("./food_list.json", JSON.stringify(jData), (err,data) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(200).send('Item deleted!');
        });
    });
};


var partialUpdateFood = (req, res) => {
    var check = req.body.id != undefined
                || req.body.name != undefined || req.body.name != "" || req.body.name.length > 0
                || req.body.price != undefined
                || req.body.calories != undefined;
    if (!check) {
        return res.status(400).send('Bad request');
    }
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if (err) {
            res.send('Could not read file');
            return;
        }
        var jData = JSON.parse(data);
        var body = req.body;
        var foodKeys = Object.keys(body);
        console.log(foodKeys);
        for (let i = 0; i < jData.length; i++) {
            if (jData[i].id == req.params.id) {
                for (let j = 0; j < foodKeys.length; j++) {
                    console.log(foodKeys[j]);
                    console.log(jData[i][foodKeys[j]]);
                    console.log(body[foodKeys[j]]);
                    jData[i][foodKeys[j]] = body[foodKeys[j]];
                }
                break;              
            }
        }
        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if (err) {
                return res.status(500).send('Could not save file');
            }
            return res.status(200).send('Item updated!');
        });
    });
}


module.exports = {
    getAllFood,
    getSingleFood,
    createNewFood,
    updateFood,
    deleteFood,
    partialUpdateFood
};



