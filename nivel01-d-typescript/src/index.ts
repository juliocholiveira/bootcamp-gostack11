import express from 'express';
import createUser from './services/CreateUser';

const app = express();

app.get('/', (req, res) => {

  const user = createUser({
    email: 'juliocholiveira@gmail.com',
    password: '123456',
    techs: ['ReactJS', { title: 'NodeJS', experience: 100 }]
  });
  
  console.log(user);
  console.log(user.techs);
  

  return res.json({ message: 'Hello Typescript' });
})

app.listen(3333);