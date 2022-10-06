const express = require("express");
const app = express();

const connectDatabase = require("./src/database/db");
const userRoute = require("./src/routes/user.route.js"); // importando todas as rotas

const port = 3000;

connectDatabase();
app.use(express.json()); // aplicação apta para enviar e receber arquivos json
app.use("/user", userRoute); // usando a rota

app.listen(3000, () => console.log(`Rodando na porta ${port}`));
