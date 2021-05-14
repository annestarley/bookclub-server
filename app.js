const express = require('express');
const app = express();
const port = process.env.PORT || 6001;
const fs = require('fs');
const http = require('http');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const morgan = require('morgan');
// app.use(morgan);

const cors = require('cors');
app.use(cors({ origin: '*'}))

app.disable('x-powered-by');

const overstory = require('./routes/overstory-routes');

app.get('/', function(req, res, next) {
    res.send("Overstory routes");
});

app.get('/overstorygetchecks', overstory.getchecks);
app.post('/overstorypostchecks', overstory.postchecks);




app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({error: err})
});

// app.use((req, res, next) => {
//     res.status(404).json({error: {message: 'Not found'}})
// });

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener);
