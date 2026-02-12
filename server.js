const express = require("express");
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require("./config/db")


dotenv.config();

//database connection
connectDB();


const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
          res.send("Hello World");
});


//test route
app.use("/api/v1/test", require("./routes/testRoutes"))

//auth routes
app.use("/api/v1/auth", require("./routes/authRoutes"))


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
          console.log(
                    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan);
});