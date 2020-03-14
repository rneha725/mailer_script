var email = require("emailjs");
var config = require("./config.json");

var server = email.server.connect(config.smtp);

server.send(config.email, function (err, message) { console.log(err || message); });