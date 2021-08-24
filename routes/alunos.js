const express = require('express');
const alunosController = require("../controllers/alunosController ")

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const alunos = await alunosController.listarTodos();
  res.render("alunos", { alunos });
});

router.post("/", async (req, res) => {
  const { nome, sobrenome, email, ano_matricula } = req.body;
  // Realizar validação
  await alunosController.cadastrarAluno({ nome, sobrenome, email, ano_matricula });
  res.redirect("/alunos")
})

module.exports = router;
