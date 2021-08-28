const express = require("express");
const alunosController = require("../controllers/alunosController ");

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  const alunos = await alunosController.listarTodos();
  res.render("alunos", { alunos });
});

router.post("/", async (req, res) => {
  const { nome, sobrenome, email, ano_matricula } = req.body;
  // Realizar validação
  await alunosController.cadastrarAluno({
    nome,
    sobrenome,
    email,
    ano_matricula,
  });
  res.redirect("/alunos");
});

router.post("/atualizar/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email, ano_matricula } = req.body;
  // Realizar validação
  await alunosController.atualizarAluno({
    id,
    nome,
    sobrenome,
    email,
    ano_matricula,
  });
  res.redirect("/alunos");
});

router.get("/matricular/:id", async (req, res) => {
  const { id } = req.params;
  // Realizar validação
  await alunosController.matricularAluno({ id, ano_matricula: 2021 });
  res.redirect("/alunos");
});

router.get("/deletar/:id", async (req, res) => {
  const { id } = req.params;
  // Realizar validação
  await alunosController.deletarAluno(id);
  res.redirect("/alunos");
});

module.exports = router;
