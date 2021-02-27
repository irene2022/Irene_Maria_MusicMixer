(() => {

  console.log('Hello');

  const dragImages = document.querySelectorAll(".bodyIcon"),
        dropZones = document.querySelectorAll(".drop-zone")

  function dragStart() {
    console.log('started draggin');
  }

  function draggedOver(event) {
    event.preventDefault();
    console.log('dragged over me');
  }

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
