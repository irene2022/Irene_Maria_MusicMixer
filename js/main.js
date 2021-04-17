(() => {

  console.log('Hello');

  const puzzleBody = document.querySelector(".puzzleBody"),
        bodyIcon  = document.querySelectorAll(".bodyIcon"),
        dropZones = document.querySelectorAll(".drop-zone"),
        dragZone = document.querySelector(".bodyiconsZone"),
        theAudio = document.querySelector('audio');

  function playAudio() {
   theAudio.play();
  }

// loading the audio
  function loadAudio(sound)
  {
    // let targetAudio = this.dataset.trackref;
    // theAudio.src = `audio/${targetAudio}.mp3`;
    // theAudio.volume = 0.8;
    let targetAudio = this.dataset.trackref;
    theAudio.src = `audio/${targetAudio}.mp3`;
    theAudio.volume = 0.8;
    theAudio.load();
    playAudio();
  }

  function dragStart(event) {
    console.log('started draggin');
    // take the dragged image and move it into the drop zone
    // move it from the left container to the drop zone (reparent it)
    event.dataTransfer.setData("savedID", this.id);
  }

  function draggedOver(event) {
    event.preventDefault();
    console.log('dragged over me');
    // allow an element to be dragged over and then dropped
  }

  function dropped(event) {
    event.preventDefault();
     

     if (this.childNodes.length >0) {return;} 
true
     let targetID = event.dataTransfer.getData("savedID");
     console.log('i dragged this image:', targetID);
    
    
    event.target.appendChild(document.querySelector(`#${targetID}`));
  }

dropZones.forEach(zone => {
      if (zone.childNodes.length >0) {
        dragZone.appendChild(zone.firstElementChild);
      }
    });

bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
    // zone.addEventListener("drop", loadAudio);
})


// Audio portion

// dropZones.forEach(zone => zone.addEventListener('drop', loadAudio));
bodyIcon.forEach(piece => piece.addEventListener("click", loadAudio));
dropZones.forEach(zone => zone.addEventListener("drop", loadAudio));

})();
