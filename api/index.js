const express = require('express');
const cors = require('cors');

const { Project } = require('../models');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app
  .post('/projects', async (req, res) => {
    try {
      const project = await Project.create(req.body);
      return res.status(201).json(project);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .get('/projects', async (_req, res) => {
    const projects = await Project.findAll();

    return res.status(200).json(projects);
  })
  .put('/projects/:id', async (req, res) => {
    const project = await Project.findByPk(+req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.update(req.body);
    return res.status(200).json(project);
  });

app.listen(port, () => { console.log(`Servidor online na porta ${port}`); });
