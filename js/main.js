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
  }


  bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));
  dropZones.forEach(zone => {
  	zone.addEventListener("dragover", draggedOver);
  	zone.addEventListener("drop", dropped);
})
  

  // debugger;

})();
