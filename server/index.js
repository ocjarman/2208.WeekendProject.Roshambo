const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
module.exports = app;

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "css")
  )
);
app.use(
  "/fonts",
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "fonts")
  )
);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use("/api", require("./api"));

// This middleware will catch any URLs resembling a file extension
// for example: .js, .html, .css
// This allows for proper 404s instead of the wildcard '#<{(|' catching
// URLs that bypass express.static because the given file does not exist.
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Sends our index.html (the "single page" of our SPA)
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

// Two temporary routes to serve up our HTML mocks
// We'll remove these when we're done
app.get("/mock-1", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "juke-mock-1.html"));
});

app.get("/mock-2", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "juke-mock-2.html"));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
