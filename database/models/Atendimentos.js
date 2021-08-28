module.exports = (sequelize, DataType) => {
  const Atendimentos = sequelize.define(
    "Atendimento",
    {
      descricao: { type: DataType.STRING, allowNull: false },
    }
  );

  Atendimentos.associate = (models) => {
    Atendimentos.belongsTo(models.Aluno, {
      as: "Alunos",
      foreignKey: "aluno_id"
    })
  }

  return Atendimentos;
};