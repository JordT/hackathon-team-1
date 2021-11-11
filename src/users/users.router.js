const UserController = require('./users.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": process.env.HOST, 
   "port": process.env.PORT, 
   "username": process.env.USERNAME, 
   "password": process.env.PASSWORD, 
   "database": process.env.DATABASE,
   "synchronize": true, 
   "logging": false, 
   entities: [ new EntitySchema(require("../entity/user.json")) 
   ] 
});

const userController = UserController();

const router = Router();

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;


// connection = typeorm.createConnection({
//     type: "sqlite",
//     database: ":memory:",
//     dropSchema: true,
//     entities: [ new EntitySchema(require("../entity/user.json")) ],
//     synchronize: true,
//     logging: false
// }); 

