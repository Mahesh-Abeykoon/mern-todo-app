require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI,{})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connectiong to MongoDB", error));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
