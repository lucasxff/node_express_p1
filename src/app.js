import express from 'express';
import conectDb from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectDb();

conexao.on('error', erro => {
  console.error('erro de conexão', erro);
});

conexao.once('open', () => {
  console.error('Conexão com o DB feita com sucesso');
});

const app = express();
routes(app);

app.delete('/livros/:id', (req, res) => {
  const index = getBook(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('Livro removido com sucesso');
});

export default app;
