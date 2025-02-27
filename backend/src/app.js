const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors')
const app = express();
app.use(cors())

const PORT = process.env.PORT || 5174;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;