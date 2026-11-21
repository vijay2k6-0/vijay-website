```javascript
let score = 0;
let timeLeft = 10;
let gameActive = false;

// Load saved Top Score from browser
let topScore = Number(localStorage.getItem('topScore')) || 0;

const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const topScoreDisplay = document.getElementById('topScore');

const gameButton = document.getElementById('gameButton');
const startButton = document.getElementById('startButton');

// Display saved Top Score when page opens
if (topScoreDisplay) {
    topScoreDisplay.textContent = topScore;
}

gameButton.disabled = true;

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

        // Update Top Score automatically
        if (score > topScore) {
            topScore = score;

            if (topScoreDisplay) {
                topScoreDisplay.textContent = topScore;
            }

            // Save Top Score permanently in this browser
            localStorage.setItem('topScore', topScore);
        }
    }
}

function endGame() {
    gameActive = false;
    gameButton.disabled = true;
    startButton.disabled = false;

    alert(`Game Over! Your score: ${score}`);
}
```
