var express = require('express');
var router = express.Router();
const getTodo = require('../src/middleware/todoMiddleware');

/* GET home page. */
router.get('/todo', function(req, res, next) {
   getTodo(req, res, next);
});

router.post('/savetodo', (req,res,next)=>{
  
})

module.exports = router;
