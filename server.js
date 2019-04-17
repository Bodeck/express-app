const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
let stringifyFile;
const port = 3000;

app.use(bodyParser.json());
app.get('/getNote', (req, res) => {
  fs.readFile('./test.json', 'utf-8', (err, data) => {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  })
});

app.post('/updateNote/:note', (req, res) => {
  let myData = JSON.parse(stringifyFile);
  myData.listOfItems.push(req.params.note);
  const dataToWrite = JSON.stringify(myData);
  
  fs.writeFile('./test.json', dataToWrite, (err) => {
    if (err) throw err;
    console.log('File updated');
    res.send(dataToWrite);
  });
});

const server = app.listen(port);

