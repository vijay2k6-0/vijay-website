let score = 0;
let timeLeft = 10;
let timer = null;
let playing = false;

let best = localStorage.getItem('best') || 0;
document.getElementById('best').innerText = best;

function startGame(){
  score = 0;
  timeLeft = 10;
  playing = true;
  document.getElementById('score').innerText = 0;
  document.getElementById('time').innerText = '10s';
  document.getElementById('result').innerText = '';
  clearInterval(timer);

  timer = setInterval(function(){
    timeLeft--;
    document.getElementById('time').innerText = timeLeft + 's';
    if(timeLeft <= 0){
      clearInterval(timer);
      playing = false;
      document.getElementById('result').innerText = 'Game Over! Nee Score: ' + score;
      if(score > best){
        best = score;
        localStorage.setItem('best', best);
        document.getElementById('best').innerText = best;
      }
    }
  }, 1000);
}

function clickMe(){
  if(!playing){
    alert('Mundhu Start Game kottu mama!');
    return;
  }
  score++;
  document.getElementById('score').innerText = score;
}
