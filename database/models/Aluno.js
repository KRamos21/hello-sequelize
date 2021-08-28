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

  Alunos.associate = models => {
    Alunos.hasMany(models.Atendimento, {
      as: "Atendimentos",
      foreignKey: "aluno_id"
    })
  }

  return Alunos;
};
