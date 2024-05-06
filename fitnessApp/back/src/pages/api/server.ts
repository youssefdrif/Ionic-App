import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Import node-fetch

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get('/api/places', async (req, res) => {
  const { placeId, apiKey } = req.query;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening at http://localhost:${PORT}`);
});
