// export query functionality into the object db from picturesModel
const db = require('../models/picturesModels');
// the q holds all the queries
const q = require('../models/queries');

// the whole reason we make this object is so we can export it easily with all the methods
const picturesController = {};

// method - getPictures
// this gets and returns all the pictures from the database - GET
picturesController.getPictures = (req, res, next) => {
    db.query(q.SELECT_ALL)
    .then(results => {
        res.locals.pictures = results[0];
        return next();
    })
    .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot perform SELECT ALL from pictures'}));
}

// method - getOnePicture
// this gets a picture via the id in the url params - GET
picturesController.getOnePicture = (req, res, next) => {
    const { id } = req.params;
    db.query(q.SELECT_ONE, [id])
    .then(results => {
        if (results[0].length === 0) {
            res.locals.picture = "picture not found";
            return next();
        }
        res.locals.picture = results[0];
        return next();
    })
    .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot SELECT FROM pictures for a specific picture given an id'}));
}

// method - addPicture
// this posts a picture using the request body - POST
picturesController.addPicture = (req, res, next) => {
    const { caption, url } = req.body;
    db.query(q.INSERT, [caption, url])
    .then(results => {
        // this is for me, to see the new table
        db.query(q.SELECT_ALL)
        .then(results => {
            res.locals.pictures = results[0];
            return next();
        })
        .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot perform SELECT ALL from pictures'}));
        // ^ FOR ME END BLOCK 
    })
    .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot INSERT row INTO pictures'}));
}

// method - updatePicture
// this updates the caption and/or url according to the request body -- PATCH
// updates existing row in SQL database
picturesController.updatePicture = (req, res, next) => {
    const { caption, url } = req.body;

    // we need the id to figure out which picture to update
    const { id } = req.params;
    let query;
    let params;
    // use switch statements to determine which query to use (so update entire row, only the caption, or the url)
    // the expression in switch is compared and seen if it matches with any case... so we're seeing the first case that evaluates and matches true
    switch(true) {
        case (caption === undefined && url === undefined):
            res.locals.pictures = "you cannot update, you did not give anything new";
            return next();
        case (caption === undefined):
            query = q.UPDATE_URL;
            params = [url];
            break;
        case (url === undefined):
            query = q.UPDATE_CAPTION;
            params = [caption];
            break;
        default:
            query = q.UPDATE_ROW;
            params = [caption, url];
    }

    // id is always the last param to consider
    params.push(id);

    db.query(query, params)
    .then(results => {
        console.log("results from UDPATE query", results);
        // this is for me, to see the new table
        db.query(q.SELECT_ALL)
        .then(results => {
            res.locals.pictures = results[0];
            return next();
        })
        .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot perform SELECT ALL from pictures'}));
        // ^ FOR ME END BLOCK 
    })
    .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot UPDATE row from pictures table'}));
}

// method - deletePicture
// this deletes a picture via the id in the url params - DELETE
picturesController.deletePicture = (req, res, next) => {
    const { id } = req.params;
    db.query(q.DELETE_ROW, [id])
    .then(results => {
        if (results[0].length === 0) {
            res.locals.picture = "picture not found";
            return next();
        }
        // this is for me, to see the new table
        db.query(q.SELECT_ALL)
        .then(results => {
            res.locals.pictures = results[0];
            return next();
        })
        .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot perform SELECT ALL from pictures'}));
        // ^ FOR ME END BLOCK 
    })
    .catch(err =>  next({message: err.sqlMessage, status: 500, log: 'mySQL database cannot DELETE row from pictures'}));
}

module.exports = picturesController;