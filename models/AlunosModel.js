const db = require("../database/models");

exports.listarTodos = () => {
  return db.Aluno.findAll().then((rows) => rows.map((row) => row.dataValues));
};

exports.cadastrarAluno = ({ nome, sobrenome, email, ano_matricula }) => {
  db.Aluno.create({ nome, sobrenome, email, ano_matricula });
};
