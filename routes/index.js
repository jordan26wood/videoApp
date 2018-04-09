var express = require('express');
var videoController = require('../controllers/videoAppControllers');
var router = express.Router();

/* GET home page. */
router.get('/', videoController.get_all_movies);


// COMMENTS
router.get('/movies/:id/:movie', videoController.get_one_movie );

router.get('/api', videoController.get_one_movie );



module.exports = router;
