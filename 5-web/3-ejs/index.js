const express = require('express');

const server = express();

server.set('view engine', 'ejs'); // <-- set view engine to ejs

server.get('/', (req, res) => {
  res.render('index'); // render html to ejs template 
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
