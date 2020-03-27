const express = require ('express');
const cors = require('cors');
const routes = require ('./routes'); // Sempre utilizando "./" para identificar a rota do routes.js


const app = express();


app.use(cors());
app.use(express.json()); // Antes de todas as requisições ir no corpo da requisição e converter para js.
app.use(routes);


app.listen(3333);
