const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = 3000;

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(morgan("dev"));

// Cấu hình Handlebars với partials
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resources/views/layouts"),
    partialsDir: path.join(__dirname, "resources/views/partier"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
