import "./styles/App.scss";
import Nav from "./components/Nav.js";
import MusicFace from "./components/MusicFace.js";
import Controls from "./components/Controls.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <MusicFace />
      <Controls />
    </div>
  );
}

export default App;
