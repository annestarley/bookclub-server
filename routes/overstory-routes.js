const fs = require('fs');

exports.getchecks = (req, res) => {
    let jsonData = fs.readFileSync('./data/overstorydata.json');
    let state = JSON.parse(jsonData);
    res.json(state)
}

exports.postchecks = (req, res) => {
    console.log('overstory post checks', req.body)
    let state = req.body;
    let data = JSON.stringify(state);
    fs.writeFileSync('./data/overstorydata.json', data);
}