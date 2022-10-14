import "./App.css";
import LandingPage from "./components/LandingPage";
import Card from "./components/Card";
import Nav from "./components/Nav.jsx";

import { bulbasaur } from "./data";

function App() {
  return (
    <div>
      {/* <LandingPage onHome={() => alert("Ir a home")} /> */}

      <Nav />
      <Card
        imagen={bulbasaur.img}
        nombre={bulbasaur.nombre}
        tipos={bulbasaur.tipos}
        onClose={() => alert(bulbasaur.nombre)}
      />
    </div>
  );
}

export default App;
