const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('Router is loaded');

router.get('/' , homeController.home);

router.use('/users' , require('./users'));
// router.get('/users' , homeController.home);

router.use('/posts' , require('./posts'));

module.exports = router;




