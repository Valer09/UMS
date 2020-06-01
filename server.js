const express = require('express');
const path = require('path');
const app = express();

// Serve only the static file form the dist directory
app.use(express.static('./dist/UMS'));

app.get('/*', function(req, res){
  res.sendFile('index.html', {root: 'dist/UMS/'} );
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
