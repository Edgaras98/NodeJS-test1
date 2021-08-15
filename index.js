const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'OK' });
});
const port = 8080;
app.listen(port, () => console.log('Server is running on port' + port));
