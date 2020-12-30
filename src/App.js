import React, { useRef, useState } from "react";
import "./styles/app.scss";
import Library from "./components/Library.js";
import Music from "./components/Music.js";
import Controls from "./components/Controls.js";
import Nav from "./components/Nav.js";
import data from "./data.js";

function App() {
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Ref
  const audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const animationPercentage = Math.round((current / duration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animationPercentage,
    });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <Music currentSong={currentSong} />
      <Controls
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
