const express = require('express');
const path = require('path');
const app = express();

// Serve only the static file form the dis directory
app.use(express.static(__dirname + './dist/ums'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/UMS/index.hmtl'));
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
