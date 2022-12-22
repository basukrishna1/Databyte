const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successful`);
  })
  .catch((e) => {
    console.log(`unsuccessful`);
  });
