const express = require('express');

const { Project } = require('../models');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/project', async (req, res) => {
  const project = await Project.create(req.body);

  return res.status(201).json(project);
});

app.listen(port, () => { console.log(`Servidor online na porta ${port}`); });
