var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

// Tells node that we are creating an "express" server
var express = require("express");
var path = require("path");
// Sets an initial port

var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });