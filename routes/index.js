const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('Router is loaded');

router.get('/' , homeController.home);

router.use('/users' , require('./users'));
// router.get('/users' , homeController.home);

router.use('/posts' , require('./posts'));
router.use('/comments' , require('./comments'));
router.use('/likes' , require('./likes'));
router.use('/friends' , require('./friends'));

router.use('/api' , require('./api'));




//chat box:-
// Define a route to handle fetching previous chat messages 
router.use('/chat',require('./chats')); // /chat/getPreviousMessages


module.exports = router;
  



