const db = require("./database/models");
const { Op } = require("sequelize");

const line = () => console.log("".padEnd(120, "-"));

const run = async () => {
  console.log("Todos os alunos:");
  const alunos = await db.Aluno.findAll();
  const rows = alunos.map((aluno) => aluno.dataValues);
  console.log(rows);
  line();

  console.log("Aluno: Matheus");
  let matheus = await db.Aluno.findOne({ where: { nome: "Matheus" } });
  matheus = matheus.dataValues;
  console.log(matheus);
  line();

  console.log("Alunod e id = 1");
  let alunoId = await db.Aluno.findOne({ where: { id: 1 } });
  alunoId = alunoId.dataValues;
  console.log(alunoId);
  line();

  console.log("Alunos que começam com a letra R");
  let alunosR = await db.Aluno.findAll({ where: { nome: { [Op.like]: "R%" } } });
  alunosR = alunosR.map(aluno => aluno.dataValues);
  console.log(alunosR);
  line();

  console.log("Todos os alunos em ordem decrescente");
  let alunosDesc = await db.Aluno.findAll({
    order: [["nome", "DESC"]],
    limit: 3,
    offset: 1
  })
  alunosDesc = alunosDesc.map(aluno => aluno.dataValues);
  console.log(alunosDesc);
  line();

  console.log("Tabela de atendimentos:");
  // await db.Atendimento.create({ descricao: "Teste 1", aluno_id: 9})
  let atendimentos = await db.Atendimento.findAll({
    include: ["Alunos"]
  })
  atendimentos = atendimentos.map(valor => valor.dataValues);
  console.log(atendimentos);
  console.log();
  console.log(atendimentos[0].Alunos.dataValues);
  console.log(JSON.stringify(atendimentos, null, 2));
};

run();
