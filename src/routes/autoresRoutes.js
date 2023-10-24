import express from 'express';
import AutorController from '../Controllers/autorController.js';

const routes = express.Router();

routes.get('/autores', AutorController.listarAutores);
routes.get('/autores/:id', AutorController.listarAutoresPorId);
routes.post('/autores', AutorController.CadastrarAutores);
routes.put('/autores/:id', AutorController.atualizarAutor);
routes.delete('/autores/:id', AutorController.excluirAutor);

export default routes;
