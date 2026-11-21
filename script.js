let score = 0;
let timeLeft = 10;
let timer = null;
let playing = false;

let best = localStorage.getItem('best') || 0;
document.getElementById('best').innerText = best;

let memes = [
  {emoji:"🔥", text:"Thaggeede Le!"},
  {emoji:"😎", text:"Oora Mass Mama!"},
  {emoji:"💪", text:"Arey Mass!"},
  {emoji:"🤣", text:"Nuvvu Naa Range Kaadu!"},
  {emoji:"👑", text:"Vijay Vachesadu!"},
  {emoji:"🚀", text:"Click Ante Click Kaadhu, Feeling!"},
  {emoji:"😂", text:"Amma Chethi Garelu Thinnava?"},
  {emoji:"🐅", text:"Eyy Bidda Idhi Naa Adda!"},
  {emoji:"⚡", text:"Current Shock Kottindha?"},
  {emoji:"🥵", text:"Arey Aagave Aagave!"},
  {emoji:"🤯", text:"Asalu Aagava Enti Mama!"},
  {emoji:"🕺", text:"Step Eyy Mama Step Eyy!"}
];

let anims = ["pop","bounce","wiggle","spin"];

function startGame(){
  score = 0;
  timeLeft = 10;
  playing = true;
  document.getElementById('score').innerText = 0;
  document.getElementById('time').innerText = '10s';
  document.getElementById('result').innerText = '';
  document.getElementById('memeText').innerText = 'Ready ah? Kottu Mama! 🔥';
  document.getElementById('memeBox').innerText = '😎';
  clearInterval(timer);

  timer = setInterval(function(){
    timeLeft--;
    document.getElementById('time').innerText = timeLeft + 's';
    if(timeLeft <= 0){
      clearInterval(timer);
      playing = false;
      let roast = '';
      if(score < 20) roast = 'Nuvvu Intha Matrame Na? 😂';
      else if(score < 50) roast = 'Parledu Mama, Konchem Try Chey! 😅';
      else roast = 'Arey Ammayilaara... Vijay Vachesadu! 👑🔥';
      document.getElementById('result').innerText = 'Game Over! Nee Score: ' + score + ' - ' + roast;
      document.getElementById('memeBox').innerText = score > 50 ? '👑' : '🤣';
      playAnim(document.getElementById('memeBox'), 'spin');
      if(score > best){
        best = score;
        localStorage.setItem('best', best);
        document.getElementById('best').innerText = best;
      }
    }
  }, 1000);
}

function playAnim(el, anim){
  el.classList.remove('pop','bounce','wiggle','spin');
  void el.offsetWidth;
  el.classList.add(anim);
}

function clickMe(){
  if(!playing){
    alert('Mundhu Start Game kottu mama!');
    return;
  }
  score++;
  document.getElementById('score').innerText = score;

  let m = memes[Math.floor(Math.random() * memes.length)];
  let memeBox = document.getElementById('memeBox');
  let memeText = document.getElementById('memeText');
  memeBox.innerText = m.emoji;
  memeText.innerText = m.text;

  // Random Animation Prathi Click Ki
  let anim = anims[Math.floor(Math.random() * anims.length)];
  playAnim(memeBox, anim);
  playAnim(memeText, 'pop');

  // Box Shake
  let box = document.querySelector('.box');
  box.classList.remove('shake');
  void box.offsetWidth;
  box.classList.add('shake');
}
