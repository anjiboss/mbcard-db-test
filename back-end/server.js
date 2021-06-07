require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Import Route Middleware
const addInfoRoute = require("./routes/addinfo");
const registerRoute = require("./routes/register");
const getInfoRoute = require("./routes/getInfo");

const PORT = process.env.PORT || 5010;
connectDB();

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/register", registerRoute);
app.use("/api/addinfo/", addInfoRoute);
app.use("/api/user/", getInfoRoute);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
