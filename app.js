var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/books', function(req, res) {
    res.send('Here are the available Books');
});

app.listen(port, function(err) {
    if (err) {
        console.log(err.message);
    }else {
        console.log('running server on port ' + port);
    }
});
