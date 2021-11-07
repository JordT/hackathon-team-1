const PostController = require('./post.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": "localhost", 
   "port": 54320, 
   "username": "postgres", 
   "password": "cibona2!", 
   "database": "typeorm_charity_db",
   "synchronize": true, 
   "logging": false, 
   entities: [ new EntitySchema(require("../entity/post.json")) 
   ] 
});

const postController = PostController();

const router = Router();

router.post('/charities', postController.createCharity);
router.get('/charities/:id', postController.getCharityById);
router.get('/charities/funds/:id', postController.getCharityFundsById);
router.get('/charities', postController.getAllCharities);
router.put('/charities/:id', postController.updateCharity);
router.put('/charities/funds/:id', postController.updateCharityFunds);
router.delete('/charities/:id', postController.deleteCharity);

module.exports = router;
