const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({src: "https://pbs.twimg.com/media/EZ5NUWwWAAAuxcr.jpg"});
}); 

module.exports = router;