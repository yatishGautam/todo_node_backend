var express = require('express');
var router = express.Router();
const [getTodo, saveTodo, updateTodo] = require('../src/middleware/todoMiddleware');

/* GET home page. */
router.get('/todo', function(req, res, next) {
   getTodo(req, res, next);
});

router.post('/savetodo', (req,res,next)=>{
  console.log('here in /savetodo');
  saveTodo(req, res, next);
})

router.post('/updateTodo/:id',(req, res, next)=>{
  updateTodo(req, res, next);
})

module.exports = router;
