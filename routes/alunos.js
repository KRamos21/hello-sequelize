const express = require('express');
const alunosController = require("../controllers/alunosController ")

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const alunos = await alunosController.listarTodos();
  res.render("alunos", { alunos });
});

module.exports = router;
