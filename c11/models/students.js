var fs = require("fs");
const location = "./students.json";

var GetAll =() => {
    return new Promise((success,fail) => {
        fs.readFile(location, "utf8", (err, data) => {
            if(err){
                return fail(err);
            }
           return success(JSON.parse(data));
        })
    })
}
module.exports = {
    GetAll
}