(() => {

  console.log('Hello');

const puzzleBody = document.querySelector(".puzzleBody"),
      bodyIcon  = document.querySelectorAll(".bodyIcon"),
      dropZones = document.querySelectorAll(".drop-zone"),
      dragZone = document.querySelector(".bodyiconsZone"),
      theAudio = document.querySelector('audio');


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
    // debugger;
    // playAudio();
  }


  bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
  	zone.addEventListener("dragover", draggedOver);
  	zone.addEventListener("drop", dropped);
})


// Audio portion
// let theAudio = document.querySelector("audio");

function playAudio()
{
  theAudio.play();
}

// loading the audio
  function loadAudio(sound)
  {
    let targetAudio = this.dataset.trackref;
    theAudio.src = `audio/${targetAudio}.mp3`;
    theAudio.volume = 0.8;
    theAudio.load();
    playAudio();
  }

for (icon of bodyIcon)
{
  icon.addEventListener("drop", loadAudio);
}

})();
