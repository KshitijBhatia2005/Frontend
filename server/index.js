import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Mock analyze endpoint
app.post("/api/analyze", async (req, res) => {
  const { drugName } = req.body || {};
  if (!drugName || typeof drugName !== "string") {
    return res.status(400).json({ error: "drugName is required" });
  }

  // Mocked analysis result
  const result = {
    drugName,
    newUse: `${drugName} potential for anti-inflammatory applications`,
    confidence: 0.78,
    summary:
      `Preliminary literature suggests ${drugName} may modulate pathways relevant to inflammation. Further clinical validation is required.`,
    sources: [
      { title: `Review on ${drugName} mechanisms`, url: "https://example.com/review" },
      { title: `${drugName} trial phase II`, url: "https://example.com/trial" },
    ],
  };

  res.json(result);
});

// Mock chat endpoint
app.post("/api/chat", async (req, res) => {
  const { message, context } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message is required" });
  }
  const reply = `You asked: "${message}"${context ? ` (context: ${context})` : ""}. Here's a brief, non-clinical summary based on mock data.`;
  res.json({ reply });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${PORT}`);
});


