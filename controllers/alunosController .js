const alunosModel = require("../models/AlunosModel");

exports.listarTodos = () => alunosModel.listarTodos();

exports.cadastrarAluno = ({ nome, sobrenome, email, ano_matricula }) => {
  alunosModel.cadastrarAluno({ nome, sobrenome, email, ano_matricula });
}
