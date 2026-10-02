const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connection String
const MONGO_URI = "mongodb+srv://lnlnbnnlf111_db_user:eslam10@cluster0.gflmxgs.mongodb.net/gameDB?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Test Route
app.get('/', (req, res) => {
  res.send('Game Backend is working! 🚀');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
