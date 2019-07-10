const foodFile = "./food_list.json"

var fs = require("fs");

var GetAll = () => {
    return new Promise((success, fail) => {
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

var GetSingle = (id) => {
    return new Promise((success, fail) => {
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            var jData = JSON.parse(data);
            var out = jData.filter((o) => {
                return o.id == id;
            });
            if(out.length == 0){
                return fail("Not Found!");
            }
            return success(out[0]);
        });
    })
};

var CreateFood = () => {
    return new Promise((success,fail) => {
        var check = req.body.id != undefined
        && req.body.name != undefined && req.body.name != "" && req.body.name.length > 0
        && req.body.price != undefined
        && req.body.calories != undefined;

        if(!check){
            return res.status(400).send('Bad request');
        }
        fs.readFile(foodFile, 'utf8', (err, data) => {
            if(err){
                return fail(err)
            }
            jData = JSON.parse(data);
            jData.push(req.body);
            return success(req.body);
            
        });
    })
}

module.exports = {
    GetAll,
    GetSingle,
    CreateFood
}