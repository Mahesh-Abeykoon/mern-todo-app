require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI,{})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connectiong to MongoDB", error));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
