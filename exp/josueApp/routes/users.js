var express = require('express');
var router = express.Router();

const Title = 'Users'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: Title });
});

router.get('/:id', function(req, res, next) {
  res.render('user', { title: Title, user: req.params.id });
});

module.exports = router;
