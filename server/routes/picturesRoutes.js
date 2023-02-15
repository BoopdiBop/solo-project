const { Router } = require('express');
const express = require('express');
const router = express.Router();
const picturesController = require('../controllers/picturesController');

// this is the get all route
// https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddfv
// res.json sets the content-header to application/json --> sending everything as a string
router.get('/', picturesController.getPictures, (req, res) => {
    res.json(res.locals.pictures);
}); 
 
router.get('/:id', picturesController.getOnePicture, (req, res) => {
    res.json(res.locals.picture);
}); 

router.post('/', picturesController.addPicture, (req, res) => {
    // pictures is plural here since we are just returning all the pictures to see that a new one has been added
    res.json(res.locals.pictures);
}); 

router.patch('/:id', picturesController.updatePicture, (req, res) => {
    // pictures is plural here since we are just returning all the pictures to see that the targeted row has been updated
    res.json(res.locals.pictures);
});

router.delete('/:id', picturesController.deletePicture, (req, res) => {
    // pictures is plural here since we are just returning all the pictures to see that the targeted row has been deleted
    res.json(res.locals.pictures);
})

module.exports = router;