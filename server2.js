const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/alumnos', async (req, res) => {
  const allalumnoss =  await prisma.alumnos.findMany({});
  res.json(allalumnoss);
});

app.get('/alumnos/:id', async (req, res) => {
  const id = req.params.id;
  const alumnos = await prisma.alumnos.findUnique({where: {id: parseInt(id)}});
  res.json(alumnos);
});

app.post('/alumnos', async (req, res) => {
  const alumnos = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments
   };
  const message = 'alumno creado.';
  await prisma.alumnos.create({data: alumnos});
  return res.json({message});
});

app.put('/alumnos/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.alumnos.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/alumnos/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.alumnos.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});