const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

require('./app/routes/routes.js')(app, express);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
