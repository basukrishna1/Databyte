const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
require("./db/conn");
const Blogs = require("./models/blog");
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/addBlog", (req, res) => {
  res.render("addBlog");
});

app.get("/seeBlog", (req, res) => {
  res.render("blog");
});

app.post("/addBlog", async (req, res) => {
  try {
    const blogdata = new Blogs({
      name: req.body.author,
      title: req.body.title,
      desc: req.body.desc,
    });
    const pro = await blogdata.save();
    res.status(201).render("addBlog");
  } catch (error) {
    console.log("Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
