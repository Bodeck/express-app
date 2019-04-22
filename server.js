const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('assets'),
  (req, res, next) => {
    if(req.url === '/store') {
      console.log(`Jestem posrednikiem w zadaniu do /store`);
    };
    next();
  });

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

app.get('/store', (req, res) => {
  res.send(`This is store`);
});

const server = app.listen(port, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Przykladowa aplikacja nasluchuje na http://${host}:${port}`);
});

app.use((req, res, next) => {
  res.status(404).send(`We could not found what you are requesting.`)
});
