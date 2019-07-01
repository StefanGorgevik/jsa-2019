var calculator = (req, res) => {
    var result = 0;
    switch(req.params.op) {
        case "add": 
            result = Number(req.params.a) + Number(req.params.b);
            break;
        case "sub": 
            result = Number(req.params.a) - Number(req.params.b);
            break;
        case "mul": 
            result = Number(req.params.a) * Number(req.params.b);
            break;
        case "div": 
            result = Number(req.params.a) / Number(req.params.b);
            break;
    }
    res.send("The result for " + req.params.op + " is: " + result + "") //send ocekuva string a ne broj
}

module.exports = {
    calculator
}
