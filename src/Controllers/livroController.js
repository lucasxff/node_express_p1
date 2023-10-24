import livro from '../models/Livro.js';

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição dos livros` });
    }
  }

  static async listarLivrosPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json({ livroEncontrado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async CadastrarLivros(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).Json({ message: 'Criado com Sucesso', livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: 'livro atualizado',
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async excluirLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: 'livro excluido',
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - erro na exclusão do livro` });
    }
  }
}

export default LivroController;
