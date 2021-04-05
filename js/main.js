(() => {

  console.log('Hello');

const puzzleBody = document.querySelector(".puzzleBody"),
      bodyIcon  = document.querySelectorAll(".bodyIcon"),
      dropZones = document.querySelectorAll(".drop-zone"),
      dragZone = document.querySelector(".bodyiconsZone");


  function dragStart() {
    console.log('started draggin');
  }

  function draggedOver(event) {
		event.preventDefault();
		console.log('dragged over me');
  }



bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));
dropZones.forEach(zone => {
	zone.addEventListener("dragover", draggedOver);
	zone.addEventListener("drop", dropped);
})



   function dropped(event) {
    event.preventDefault();
    console.log('dropped something on me');
  }

  dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));

  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  })

  // debugger;

})();
