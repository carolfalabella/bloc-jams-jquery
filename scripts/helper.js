class Helper {
  // constructor(Song) {
  //   this.song = song;
  // }
  playPauseAndUpdate(song) {
    player.playPause(song);
    $('#time-control .total-time').text( duration );
  }
}

  const helper = new Helper();
