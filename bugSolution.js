const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  try {
    const user = req.body;
    // Validate user data here if needed
    console.log('Creating user:', user);
    res.status(201).send(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({ error: 'Invalid JSON or missing data' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));