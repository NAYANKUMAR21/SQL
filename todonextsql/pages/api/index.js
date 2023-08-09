import db from '../../utils/db'; // Adjust the path to the db.js file

export default async function handler(req, res) {
  try {
    console.log(db);
    const data = await db.execute('SELECT * FROM books');
    res.status(200).send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
