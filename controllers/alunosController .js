const alunosModel = require("../models/AlunosModel");

exports.listarTodos = () => alunosModel.listarTodos();

exports.cadastrarAluno = ({ nome, sobrenome, email, ano_matricula }) => {
  alunosModel.cadastrarAluno({ nome, sobrenome, email, ano_matricula });
};

exports.atualizarAluno = ({ id, nome, sobrenome, email, ano_matricula }) => {
  alunosModel.atualizarAluno({ id, nome, sobrenome, email, ano_matricula });
};

exports.matricularAluno = ({ id, ano_matricula }) => {
  alunosModel.matricularAluno({ id, ano_matricula });
};

exports.deletarAluno = (id) => {
  alunosModel.deletarAluno(id);
};
