import { autor } from '../models/Autor.js';

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição dos autores`,
      });
    }
  }

  static async listarAutoresPorId(req, res) {
    try {
      const id = req.params.id;
      const autoresEncontrado = await autor.findById(id);
      res.status(200).json({ autoresEncontrado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autores` });
    }
  }

  static async CadastrarAutores(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).Json({ message: 'Criado com Sucesso', autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: 'autor atualizado',
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      await autor.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: 'autor excluido',
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - erro na exclusão do autor` });
    }
  }
}

export default AutorController;
