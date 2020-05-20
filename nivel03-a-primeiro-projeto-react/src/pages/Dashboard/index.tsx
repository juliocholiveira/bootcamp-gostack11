import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/10158255?s=460&u=a71e27448988535f651f7a25121666e49698eb4e&v=4"
            alt="Júlio Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronsRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/10158255?s=460&u=a71e27448988535f651f7a25121666e49698eb4e&v=4"
            alt="Júlio Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronsRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/10158255?s=460&u=a71e27448988535f651f7a25121666e49698eb4e&v=4"
            alt="Júlio Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronsRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
