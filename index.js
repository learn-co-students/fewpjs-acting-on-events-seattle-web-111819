let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
  
// function moveDodgerRight() {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let gameWidth = document.getElementById('game').style.width
//     let left = parseInt(leftNumbers);
//     let rightBound = document.getElementById('game').style.width - dodger.style.width;

//     if (left < rightBound) {
//         dodger.style.left = `${left + 1}px`;
//     }
// }

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);
    dodger.style.left = `${left + 1}px`;
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    };
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});