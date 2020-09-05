var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.static('/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });