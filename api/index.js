const express = require('express');
const cors = require('cors');

const { Project } = require('../models');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app
  .post('/projects', async (req, res) => {
    const project = await Project.create(req.body);

    return res.status(201).json(project);
  })
  .get('/projects', async (req, res) => {
    const projects = await Project.findAll();

    return res.status(200).json(projects);
  });

app.listen(port, () => { console.log(`Servidor online na porta ${port}`); });
