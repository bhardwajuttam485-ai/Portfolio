const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const educationRoutes = require("./routes/educationRoutes");
const socialLinkRoutes = require("./routes/socialLinkRoutes");

// Load environment variables from the correct path
dotenv.config({ path: path.join(__dirname, '.env') });

if (!process.env.MONGO_URI) {
  console.error('Missing MONGO_URI in backend/.env. Please set your MongoDB Atlas connection string.');
  process.exit(1);
}

// Check email configuration (only log warning, don't exit)
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
  console.warn('Warning: Email environment variables not set. Contact form will not work.');
}

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend running" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/educations", educationRoutes);
app.use("/api/social-links", socialLinkRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});