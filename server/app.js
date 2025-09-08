import express from "express";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// Use routes before starting the server
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, "0.0.0.0", (err) => {
    if (err) {
      console.error("Error starting the server:", err);
    } else {
      console.log(`Server is running on http://localhost:${PORT}`);
    }
  });
};

start();
