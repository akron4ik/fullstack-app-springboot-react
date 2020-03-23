//If we deploy only front on heroku, we need open this code


const express = require('express');
const favicon = require('serve-favicon')
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
    console.log ('Server Successful');
})
