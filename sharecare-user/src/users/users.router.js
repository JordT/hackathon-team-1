const UserController = require('./users.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": process.env.DATABASE_HOST, 
   "port": process.env.DATABASE_PORT, 
   "username": process.env.DATABASE_USERNAME, 
   "password": process.env.DATABASE_PASSWORD, 
   "database": process.env.DATABASE_NAME,
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

