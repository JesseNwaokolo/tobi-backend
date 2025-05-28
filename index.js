import express from "express";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let receivedCode = "";

app.get("/", (req, res) => {
  res.render("index", { code: receivedCode });
});

app.post("/send-code", (req, res) => {
  const { code } = req.query;
  receivedCode = code;
  res.status(200).json({ message: "Code sent successfully" });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
