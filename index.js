const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send('Hello World. Ki hal chal brampton alio!');
});

app.post('/getUserDetails', function(req, res) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.headers.authorization)
    res.json({
        name: 'Pardeep',
        age: 25
    });
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`);
});