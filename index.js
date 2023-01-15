import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

const port = process.env.PORT || 8000;

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    async () => {
      app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
    }
  );
} catch (error) {
  console.error(error);
}
