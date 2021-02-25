(() => {

console.log('Hello');

const puzzleBody = document.querySelector(".puzzleBody"),
      bodyIcon  = document.querySelectorAll(".bodyIcon");

function dragStart(event) {
	console.log('started draggin');
	event.dataTransfer.setData("savedID", this.id);
}

bodyIcon.forEach(piece => piece.addEventListener("dragstart", dragStart));

})();