const db = require("../database/models");

exports.listarTodos = () => {
  return db.Aluno.findAll().then((rows) => rows.map((row) => row.dataValues));
};
