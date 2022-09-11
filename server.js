// Requiring Express.
const express = require("express");
// Initializing express with variable "app".
const app = express();
// Requiring path.
const path = require("path");
// Requiring the routes files.
const vehiclesRouter = require("./routes/vehiclesRouter.js");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// When a request is made to the server, an index.html file is served.
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./static/html/table.html"));
});

app.use("/static", express.static("./static/"));

// Enabling the api app to use the routes from the vehiclesRouter.js and authRouter.js files.
app.use("/api/vehicles", vehiclesRouter);

// Checking if the process is production mode and set for the index.html file from the build folder to be utilized, instead of the public folder.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Specified to listen to port 8080's HTTP requests. Modified the port code in order to deploy the app to Heroku.
// Logging a response to the console to confirm that the server is listening to port 8080.
const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(
  "Navigate to http://localhost:8080. Server is listening on port",
  PORT
);

// If an error occurs locally, it gets passed to our error handler and a message will display stating that "Something Broke" in development.
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  next(err);
});