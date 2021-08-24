module.exports = (sequelize, DataType) => {
  const Alunos = sequelize.define(
    "Aluno",
    {
      nome: { type: DataType.STRING, allowNull: false },
      sobrenome: { type: DataType.STRING, allowNull: false },
      email: { type: DataType.STRING, allowNull: false },
      ano_matricula: { type: DataType.INTEGER, allowNull: false },
    },
    { timestamps: false }
  );

  return Alunos;
};
