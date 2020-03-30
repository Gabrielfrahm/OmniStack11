const express = require("express");
const route = require("./routes");
const  cors = require("cors")
var app = express();

app.use(cors());
app.use(express.json());
app.use(route);

/**
 * Rota / Recurso
 * 
 */

/**
 *  Metodos HTTP :
 * 
 * get : Buscar uma informação do back-end
 * post : Criar uma informação no back-end 
 * put : Alterar uma informação no back-end 
 * delete : Deletar uma informação no back-end 
 */

/**
 *  Tipo de Parametros :
 * 
 * query params: parametros nomeados enviados na rota apos "?" (filtros, paginação)
 * route params : parametros utilizados para identificar recursos 
 * resquest body: corpo da requisiçao, utilizado para criar ou alterar  recursos 
 */



app.listen(3333);