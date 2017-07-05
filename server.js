// grab our dependencies
const express = require('express'),
      app = express(),
      port = process.env.PORT || 8989; 

// configure our application

// set the routes
app.get('/', (req, res) => {
  res.send('Hello, I am the app!');
});

// start our server (command: node server.js or for dev: nodemon server.js)
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});