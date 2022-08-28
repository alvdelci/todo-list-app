const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const port = 3333;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
    console.log("App online on port", port);
});