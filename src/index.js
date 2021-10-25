const express = require("express");
const UsersRouter = require('./users/users.router');

const app = express();

app.use(express.json());

app.use('/', UsersRouter)

const port = process.env.PORT || "3000";

app.listen(port, () => {    
    console.log(`Server Running at ${port} 🚀`);
});