import { useState } from 'react';

import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Times from './Components/Times';
import Rodape from './Components/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ];

  const novoColaboradorCadastrado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        colaboradorCadastrado={colaborador => novoColaboradorCadastrado(colaborador)}

      />
      {times.map((time, index) =>
        <Times
          key={time.nome}
          nomeDoTime={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />)}
        <Rodape />
    </div>
  );
};

export default App;
