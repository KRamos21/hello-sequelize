const db = require("../database/models");

exports.listarTodos = () => {
  return db.Aluno.findAll().then((rows) => rows.map((row) => row.dataValues));
};

exports.cadastrarAluno = ({ nome, sobrenome, email, ano_matricula }) => {
  db.Aluno.create({ nome, sobrenome, email, ano_matricula });
};

exports.atualizarAluno = ({ id, nome, sobrenome, email, ano_matricula }) => {
  db.Aluno.update({ nome, sobrenome, email, ano_matricula }, { where: { id } });
};

exports.matricularAluno = ({ ano_matricula, id }) => {
  db.Aluno.update({ ano_matricula }, { where: { id } });
};

exports.deletarAluno = (id) => {
  db.Aluno.destroy({ where: { id } });
};
