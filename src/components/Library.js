import LibrarySongs from "./LibrarySongs";

function Library({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySongs
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
