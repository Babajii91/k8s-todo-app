const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "task added" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
