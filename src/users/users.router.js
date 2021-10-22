const UserController = require('./users.controller');
const { Router } = require('express');

var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 


connection = typeorm.createConnection({ 
   "type": "postgres", 
   "host": "localhost", 
   "port": 54320, 
   "username": "postgres", 
   "password": "cibona2!", 
   "database": "typeorm_test_db",
   "synchronize": true, 
   "logging": false, 
   entities: [ new EntitySchema(require("../entity/user.json")) 
   ] 
});

const userController = UserController(connection);

const router = Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
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


