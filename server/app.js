import express from "express";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const start = async () => {
  try {
    app.listen(process.env.PORT, "0.0.0.0", (err, addr) => {

      if (err) {
        console.log(err);
      }
      else {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
      }
    });
  } catch (error) {
    console.log("Error starting the server: ", error);
  }
}

app.use("/api/user", userRoutes);


