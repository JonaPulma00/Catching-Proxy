import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(json());

app.get("/", (req, res) => {
  res.send("App running");
});
app.listen(PORT, () => {
  console.log(`App runing on http://localhost:${PORT}!`);
});
