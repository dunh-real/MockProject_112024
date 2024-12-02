const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

const userRouter = require("./src/routes/userRouter");
const productRouter = require("./src/routes/productRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Localhost is running at http://localhost:${PORT}`);
});
