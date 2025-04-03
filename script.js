let score = 0;
let timeLeft = 10;
let gameActive = false;

const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameButton = document.getElementById('gameButton');
const startButton = document.getElementById('startButton');

gameButton.disabled = true; // Disable click button until game starts

startButton.addEventListener('click', startGame);
gameButton.addEventListener('click', increaseScore);

function startGame() {
    if (!gameActive) {
        gameActive = true;
        score = 0;
        timeLeft = 10;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = timeLeft;
        gameButton.disabled = false;
        startButton.disabled = true;

        const timer = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }
}

function increaseScore() {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = score;
    }
}

function endGame() {
    gameActive = false;
    gameButton.disabled = true;
    startButton.disabled = false;
    alert(`Game Over! Your score: ${score}`);
}