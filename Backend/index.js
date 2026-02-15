const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
// ✅ Clerk
const { clerkMiddleware } = require("@clerk/express");

// IMPORT ROUTERS
const trainingDomainRouter = require("./routes/training/domain");
const trainingDurationRouter = require("./routes/training/duration");
const trainingTaskRouter = require("./routes/training/task");
const trainingEnrollmentRouter = require("./routes/training/enrollment");


//IMPORT NEWSLETTER ROUTER
const newsletterRouter = require("./routes/newsletter/newsletter");  


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
app.use(express.urlencoded({ extended: true }));

// ✅ Clerk middleware (GLOBAL)
app.use(
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);

/* --------------------------------
   ROOT CHECK
--------------------------------- */
app.get("/", (req, res) => {
  res.send("Syntecxhub Backend Running");
});

/* --------------------------------
   ROUTES
--------------------------------- */

// TRAINING ROUTES
app.use("/api/training/domain", trainingDomainRouter);
app.use("/api/training/duration", trainingDurationRouter);
app.use("/api/training/task", trainingTaskRouter);
app.use("/api/training/enrollment", trainingEnrollmentRouter);

// NEWSLETTER ROUTE
app.use("/api/newsletter", newsletterRouter);


/* --------------------------------
   GLOBAL ERROR HANDLER (ONLY ONE)
--------------------------------- */
app.use((err, req, res, next) => {
  console.error("🔥 ERROR 🔥");
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});


/* --------------------------------
   SERVER
--------------------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});