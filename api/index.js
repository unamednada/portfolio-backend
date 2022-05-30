const express = require('express');

const { Project } = require('../models');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/project', async (req, res) => {
  const { title, description } = req.body;

  const project = await Project.create({ title, description });

  return res.status(201).json(project);
});

app.listen(port, () => { console.log(`Servidor online na porta ${port}`); });
