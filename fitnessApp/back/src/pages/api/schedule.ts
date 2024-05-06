import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { placeId, apiKey } = req.query;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    if (result && result.result && result.result.opening_hours) {
      res.status(200).json(result.result.opening_hours);
    } else {
      res.status(404).json({ error: 'Horaires d\'ouvertures non disponibles' });
    }
  } catch (error) {
    console.error('Erreur recuperation horaires:', error);
    res.status(500).json({ error: 'Probleme serveur' });
  }
}
