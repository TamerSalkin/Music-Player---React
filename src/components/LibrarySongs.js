import { playAudio } from "../util.js";

function LibrarySongs({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) {
  const songChanger = () => {
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);
    //Change active state
    const newSongs = songs.map((songm) => {
      if (songm.id === song.id) {
        return {
          ...songm,
          active: true,
        };
      } else {
        return {
          ...songm,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songChanger}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySongs;
