const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

let projects = [];

app.use(express.json());

// Primeiro Middleware
// Outra dorma de chamar o middleware app.get('/projects', logsRequests, (request, response) => {
function logsRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  // Dessa forma o midlleware chama o próximo middleware e depois retorna
  next();

  // Exibindo a mensagem com o tempo que levou a chamda ao middleware
  console.timeEnd(logLabel);

  // Caso queira finalizar por aqui
  //return next();
}

function validateProjectId(request, response, next){
  const { id } = request.params;

  if (!isUuid(id)){
    return response.status(400).json({ error: 'Invalid project ID.'});
  }

  return next();
}

app.use(logsRequests);

// Define em qual rota será aplicado o middleware
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
  const { title } = request.query;

  // faz o filtro pelo título passado
  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;

  console.log('Método GET');
  
  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  console.log('Método POST');
  
  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0){
    return response.status(400).json({ error: 'Project not found.' });
  }

  const { title, owner } = request.body;

  const project = {
    id, 
    title,
    owner
  }

  projects[projectIndex] = project;

  console.log('Método PUT');
  
  return response.json(project);
});

app.patch('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  
  return response.json('Método PATCH');
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  // A função splice remove um elemento de um array, passando o index e a quantidade
  // de itens a serem removidos
  projects.splice(projectIndex, 1);

  console.log('Método DELETE');
  
  // Envia o status 204 para informar que é sem conteúdo
  return response.status(204).send();
});

app.listen(3333, () => {
  // Função que é executada toda vez que o servidor é iniciado
  console.log('🚀 Back-end started!');
});