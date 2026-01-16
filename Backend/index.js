const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");

// IMPORT ROUTERS
const trainingDomainRouter = require("./routes/training/domain");
const trainingDurationRouter = require("./routes/training/duration");
const trainingTaskRouter = require("./routes/training/task");

dotenv.config();
connectDB();

const app = express();

/* --------------------------------
   CORS CONFIGURATION
--------------------------------- */
app.use(
  cors({
    origin: "http://localhost:3000", // frontend-admin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* --------------------------------
   MIDDLEWARES
--------------------------------- */
app.use(express.json());

/* --------------------------------
   ROOT CHECK
--------------------------------- */
app.get("/", (req, res) => {
  res.send("Syntecxhub Backend Running");
});

/* --------------------------------
   ROUTES
--------------------------------- */
app.use("/api/training/domain", trainingDomainRouter);
app.use("/api/training/duration", trainingDurationRouter);
// app.use("/api/training/task", trainingTaskRouter);

/* --------------------------------
   SERVER
--------------------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});