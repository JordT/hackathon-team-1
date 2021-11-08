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
   "database": "typeorm_post_db",
   "synchronize": true, 
   "logging": false, 
   entities: [ new EntitySchema(require("../entity/post.json")) 
   ] 
});

const postController = PostController();

const router = Router();

router.post('/posts', postController.createPost);
//router.get('/posts/:id', postController.getPostById);
//router.get('/posts/funds/:id', postController.getPostFundsById);
router.get('/posts', postController.getAllPosts);
router.put('/posts/:id', postController.updatePost);
router.put('/posts/funds/:id', postController.updatePostFunds);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
