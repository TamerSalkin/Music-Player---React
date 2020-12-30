import LibrarySongs from "./LibrarySongs";

function Library({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ""}`}>
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
