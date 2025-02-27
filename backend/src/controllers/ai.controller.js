const aiService = require("../services/ai.service");
module.exports.getAiReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }
  const response = await aiService.generateContent(code);
  res.send(response);
};
