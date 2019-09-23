{
   // iterate through album.songs, and for each song object,
   // create a new song element, and then append that element to the #song-list table.
   album.songs.forEach( (song, index) => {
     song.element = $(`
       <tr>
         <td>
           <button>
             <span class="song-number">${index + 1}</span>
             <span class="ion-play"></span>
             <span class="ion-pause"></span>
           </button>
         </td>
         <td>${song.title}</td>
         <td>${song.duration}</td>
        </tr>
     `);
     // play/pause song element
     song.element.on('click', event => {
       helper.playPauseAndUpdate(song);

       $('button#play-pause').attr('playState', player.playState);
     });
     // hover over show/hide elements
     song.element.on




    $('#song-list').append(song.element);
   });
}
