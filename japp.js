const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1disp = document.querySelector('#p1Score');
const p2disp = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let winningScore = 5;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1disp.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2disp.textContent = p2Score;
    }
})


winningScoreSelect.addEventListener('click', function () {
    winningScore = parseInt(this.value)
    reset();
})



resetButton.addEventListener('click', reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1disp.textContent = p1Score;
    p2disp.textContent = p2Score;
    isGameOver = false;
}