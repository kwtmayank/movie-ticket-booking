import express from "express";
//import cors from "cors";
import apiRoutes from "./routes.js";

const app = express();

// app.use(cors());
// app.use(express.json());

app.use("/ticket-booking/api/v1/", apiRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
