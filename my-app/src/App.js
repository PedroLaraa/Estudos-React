import Banner from './Components/Banner';
import CampoTexto from './Components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label='Nome' placeholder='Digite seu nome: ' />
    </div>
  );
}

export default App;
