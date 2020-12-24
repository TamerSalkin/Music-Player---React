import React, { useState } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav.js";
import Music from "./components/Music.js";
import Controls from "./components/Controls.js";
import data from "./util.js";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Nav />
      <Music currentSong={currentSong} />
      <Controls />
    </div>
  );
}

export default App;
