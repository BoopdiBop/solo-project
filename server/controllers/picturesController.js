// export query functionality into the object db from picturesModel
const db = require('../models/picturesModels');
// the q holds all the queries
const q = require('../models/queries');

// the whole reason we make this object is so we can export it easily with all the methods
const picturesController = {};

// method - getPictures
// this gets and returns all the pictures from the database - GET
picturesController.getPictures = (req, res, next) => {
    console.log('boooooooo');
    
    db.query(q.SELECT_ALL)
    .then(results => {
        console.log(results[0]);
    })
    .catch(err => console.log(err.sqlMessage));
}

picturesController.getPictures();

// method - getOnePicture
// this gets a picture via the id in the url params - GET

// method - addPicture
// this posts a picture using the request body - POST

// method - updatePicture
// this updates the caption and/or url according to the request body -- PATCH
// updates existing row in SQL database

// method - deletePicture
// this deletes a picture via the id in the url params - DELETE

module.exports = picturesController;