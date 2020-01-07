let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
};

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     }
// });


function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let moveRight = parseInt(leftNumbers, 10);
    if (moveRight > 0) {
        dodger.style.left = `${moveRight + 1}px`
    }
};

// document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowRight") {
//       moveDodgerRight()
//     }
//   })

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});