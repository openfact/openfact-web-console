//  OpenShift sample Node application
var express = require('express'),
    http = require('http'),
    request = require('request'),
    fs = require('fs'),
    app = express(),
    path = require("path"),
    keycloakConfig = require('./src/configenv/keycloak.config.js'),
    openfactConfig = require('./src/configenv/openfact.config.js');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    secport = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8443;

// error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});

// keycloak config server
app.get('/config/keycloak.json', function (req, res, next) {
    res.json(keycloakConfig);
});
// openfact config server
app.get('/config/openfact.json', function (req, res, next) {
    res.json(openfactConfig);
});

app.use(express.static(path.join(__dirname, '/dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log("openfact config: " + JSON.stringify(openfactConfig));
console.log("keycloak config: " + JSON.stringify(keycloakConfig));

http.createServer(app).listen(port);

console.log('HTTP Server running on http://%s:%s', ip, port);

module.exports = app;
