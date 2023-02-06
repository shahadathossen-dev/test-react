require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`Connection Succesful ${res}`))
  .catch((err) => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

app.get("/", (req, res) => {
  res.send(`<h1>Hello!</h1>`);
});

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
