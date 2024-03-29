const express = require("express");
const path = require("path");

const app = express();

//automatically render index.html and allow other html pages in path
app.use(
  "/flowbite",
  express.static(path.join(__dirname, "node_modules/flowbite/dist"))
);

app.use("/", express.static("docs", { extensions: ["html"] }));

//if not found, send back to index
app.get("*", (req, res) => {
  res.redirect("/");
});

//find port automatically or 3000 if local
const port = process.env.PORT || 3000;

//listens for http requests using app
app.listen(port, () => {
  console.log("Connected...");
});
