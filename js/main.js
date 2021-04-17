(() => {

  console.log('Hello');

const puzzleBody = document.querySelector(".puzzleBody"),
      bodyIcon  = document.querySelectorAll(".bodyIcon"),
      dropZones = document.querySelectorAll(".drop-zone"),
      dragZone = document.querySelector(".bodyiconsZone");


  function dragStart() {
    console.log('started draggin');
    event.dataTransfer.setData("savedID", this.id);
  }

  function draggedOver(event) {
    event.preventDefault();
    console.log('dragged over me');
  }

  function dropped(event) {
    event.preventDefault();
    console.log('dropped something on me');
    theAudio.load();
    playAudio();
  }


  bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
})


// Audio portion
let theAudio = document.querySelector("audio"),
    iconImg = document.querySelectorAll(".bodyIcon");

function playAudio()
{
  theAudio.play();
}

// loading the audio
  function loadAudio()
  {
    let targetAudio = `audio/${targetAudio}.mp3`;
    theAudio.src = targetAudio;
    theAudio.volume = 0.8;
    // // debugger;
    // theAudio.load();
    // playTrack();
    debugger;
  }

})();