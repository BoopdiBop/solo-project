const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
 
// import pictures router
const picturesRouter = require('./routes/picturesRoutes.js');

// This middleware function will process each incoming request, no matter the route, and add a body property to each request object
// the body property will be an object
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/scss/style.scss')));

// connect pictures endpoint with the endpoints found in picturesRouter (so far just /)
app.use('/pictures', picturesRouter);

// what you see when you visit http://localhost:3000
app.get('/', (req, res) => {
    // res.send('hello from express!');
    res.sendFile(path.join(__dirname, '../build/index.html'));
})


// If they access a page that is not available, I simply redirect them back to the main page
// https://ui.dev/react-router-cannot-get-url-refresh
app.use('*', (req, res) => {
    // res.send('hello from express!');
    console.log("express catcall");
    res.sendFile(path.join(__dirname, '../build/index.html'));
    // res.redirect('/');
})

 
// global express handler - MUST CUSTOMIZE
app.use((err, req, res, next) => {
    const defaultErr = {
        message: 'error message from program',
        status: 400,
        log: 'error message from developer'
    }

    const error = Object.assign(defaultErr, err);

    console.log('developer log: ', error.log);
    console.log('program error: ', error.message);

    res.status(error.status).send('Something broke!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
}); 
