const express = require('express');
const app = express();
const PORT = 3000;
// import pictures router
const picturesRouter = require('./routes/pictures.js');

// connect pictures endpoint with the endpoints found in picturesRouter (so far just /)
app.use('/pictures', picturesRouter);

// what you see when you visit http://localhost:3000
app.get('/', (req, res) => {
    res.send('hello from express!');
})

app.listen(3000); 