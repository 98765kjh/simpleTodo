const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,     // Use new URL parser instead of legacy one
  useUnifiedTopology: true,  // Use new Server Discovery and Monitoring engine
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

