const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/airtable', (req, res) => {
  console.log(req);
  res.status(200).json({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})