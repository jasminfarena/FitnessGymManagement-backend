const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/auth.routes");
const memberRoutes = require("./src/routes/member.routes");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
