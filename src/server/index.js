import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(json());

app.get("/", (req, res) => {
  res.send("App running");
});

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});
