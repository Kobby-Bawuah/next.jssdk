import axios from 'axios';

export default async (req, res) => {
  try {
    // const response = await axios.get('https://api.example.com/data');
    // const data = response.data;
    res.status(200).json({ name: 'Kobby Bawuah' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};