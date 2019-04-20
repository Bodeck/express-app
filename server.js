const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('assets'));

app.get('/', (req,res) => {
  res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

const server = app.listen(port,'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Przykladowa aplikacja nasluchuje na http://${host}:${port}`);
});
