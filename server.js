// grab our dependencies
const express = require('express'),
      app = express(),
      port = process.env.PORT || 8989,
      expressLayouts = require('express-ejs-layouts'); 

// configure our application
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// set the routes
app.use(require('./app/routes'));

// start our server (command: node server.js or for dev: nodemon server.js)
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});