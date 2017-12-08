// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

// models
var Note = require("./models/notes.js");
var Article = require("./models/articles.js");

// scraping tools
var request = require("request");
var cheerio = require("cheerio");

// port - CHANGE TO process.env.PORT || 3000; ONCE READY TO DEPLOY TO HEROKU!!!!!!!!!!!!!!!!!!!!!!!
var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// register a handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
// change below to include URI once deployed to heroku!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
mongoose.connect("mongodb://localhost/newsscraper", {
  useMongoClient: true
});

// routes
app.get('/', function(req, res) {
	Article.find({}, function(err, articles) {
		res.render("index", { articles: articles });
	});
});


app.listen(PORT, function() {
    console.log("App running on PORT " + PORT);
  });