export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play(); // play() is a promise
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
