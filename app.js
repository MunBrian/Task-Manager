const express = require("express");
const app = express();
const tasks = require("./routers/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json()); //data is made available in req.body

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound); // route doesn't exist
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening in port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
