import "./App.css";
import Card from "./components/Card";
import { bulbasaur} from './data.js'
import LandingPage from './components/LandingPage'
// import Lateral from '.Galeria/lateral.jpg'

function App() {
  return (
    <div>
      <LandingPage onHome = {() => alert('Ir a home')}/>
      {/* <div className="App">
        <h1>Henry Pokemon</h1>
      </div>
      <Card 
        imagen = {bulbasaur.img}
        nombre = {bulbasaur.nombre}
        tipos = {bulbasaur.tipos}
        onClose = {() => alert(bulbasaur.nombre)}
         /> */}
         {/* <img  src={Lateral} alt='imagen Lateralizquierda' /> */}
         {/* <img className="imagen" src={Fondo} alt='imagen de fondo' /> */}
    </div>
  );
}

export default App;
