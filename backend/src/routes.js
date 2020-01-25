// Metodos HTTP: get = buscando uma informação, post = criar uma informação, put = editar algo, delete = deletar algo

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
const {Router} = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();
try {
    routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
}
catch(e) {
    console.log(e)
}


routes.get("/search", SearchController.index);

module.exports = routes;
