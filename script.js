var startButton = document.getElementById('start-btn');
var rules = document.getElementById('rules');
var questionContEl = document.getElementById('question-container');
var nextButton = document.getElementById('next-btn');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);



function startGame(){
    console.log('Started');
    startButton.classList.add('hide');
    questionContEl.classList.remove('hide');
    nextButton.classList.remove('hide');
    
    
}

function nextQuestion(){

}

function selectAnswer(){

}