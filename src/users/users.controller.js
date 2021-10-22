var typeorm = require("typeorm"); 
var EntitySchema = typeorm.EntitySchema; 

function UserController (connection) {

    const test4Test = async (req, res, next) => {
        // console.log(connection);
        return res.status(200).json({ "test": "test" });
    }

    const createUser = async (req, res) => {
        
        // user = await userRepo.save(req.body);
        // return res.status(200).json(user);

        try {
            conn = typeorm.getConnection();
            userRepo = await conn.getRepository("User");
            result = await userRepo.create(req.body);
            user = await userRepo.save(result);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }

    }

    const getAllUsers = async (req, res) => {
        // try {
        //     const users = await prisma.user.findMany();
        //     return res.status(200).json(users);    
        // } catch (error) {
        //     return res.status(500).json({ "error": error.message });
        // }
        //console.log(connection);
        //typeorm.connection = connection;
        // conn = await typeorm.getConnection();
        // userRepository = await conn.getRepository("User");
        // console.log(userRepository);
        // return await res.status(200).json(userRepository.find());

        connection.then(function(connection) {
            return connection.getRepository("User");
        }).then(function(userRepo) {
            return userRepo.find();    
        }).then(function(users) {
            console.log(users);
            return res.status(200).json(users);
        });
    }

    const getUserById = async (req, res) => {
        // try {
        //     const { id } = req.params;
        //     const user = await prisma.user.findUnique({
        //         where: {
        //             id: parseInt(id)
        //         }
        //     });
        //     if (user) {
        //         return res.status(200).json(user);
        //     }
        //     return res.status(404).send('User with the specified ID does not exist');
        // } catch (error) {
        //     return res.status(500).send({ "error": error.message });
        // }
        const { id } = req.params;
        userRepository = typeorm.getRepository("User");
        console.log(userRepository);
        return res.status(200).json(userRepository.find(parseInt(id)));
    }

    const updateUser = async (req, res) => {
        // try {
        //     const { id } = req.params;
        //     const user = await prisma.user.update({
        //         where: {
        //             id: parseInt(id)
        //         },
        //         data: {
        //             firstName: req.body.firstName,
        //             lastName: req.body.lastName,
        //             email: req.body.email,
        //             password: req.body.password                
        //         }
        //     });

        //     if (user) {
        //         return res.status(200).json(user);
        //     }

        //     return res.status(404).send('User with the specified ID does not exist');

        // } catch (error) {
        //     return res.status(500).send({ "error": error.message });
        // }
    }

    const deleteUser = async (req, res) => {
        // try {
        //     const { id } = req.params;
        //     const user = await prisma.user.delete({
        //         where: {
        //             id: parseInt(id)
        //         }
        //     });

        //     if (user) {
        //         return res.status(200).json(user);
        //     }

        //     return res.status(404).send('User with the specified ID does not exist');
            
        // } catch (error) {
        //     return res.status(500).send({ "error": error.message });
        // }
    }

    return {
        test4Test,
        createUser,
        getAllUsers,
        getUserById,
        updateUser,
        deleteUser
    };
}

module.exports = UserController;
// module.exports = {
//     createUser,
//     getAllUsers,
//     getUserById,
//     updateUser,
//     deleteUser
// }
