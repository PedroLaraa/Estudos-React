import { useState } from 'react';

import Banner from './Components/Banner';
import Formulario from './Components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]) ;

  const novoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado = {colaborador => novoColaboradorCadastrado(colaborador)}/>
    </div>
  );
};

export default App;
