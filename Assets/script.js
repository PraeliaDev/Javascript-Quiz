let questions = [
    {
        question: 'this is question one',
        choices: ['A', 'B', 'C', 'D'],
        answer: 'C'
    },
    {
        question: 'this is question two',
        choices: ['A', 'B', 'C', 'D'],
        answer: 'A'
    },
    {
        question: 'this is question three',
        choices: ['A', 'B', 'C', 'D'],
        answer: 'C'
    },
]

let currentIndexQs = 0

//=========== get the dom elements

const startBtnEl = document.getElementById('startBtn')
const displayQsEl = document.getElementById('displayQs')
const startTextEl = document.getElementById('gameStartText')
const timerEl =document.getElementById('timer')



startBtnEl.addEventListener('click', function startGame(){

startBtnEl.setAttribute('class', 'hide')
startTextEl.setAttribute('class', 'hide')


getQuestions()
timer()


})





function getQuestions(){

    displayQsEl.textContent = questions[currentIndexQs].question;

    var buttonAreaEl = document.getElementById('buttonArea')
    buttonAreaEl.innerHTML = ''
    
    for(var i = 0; i < questions[currentIndexQs].choices.length; i++ ){
        
        var button = document.createElement('button');
        button.setAttribute('class', 'buttons')
        button.textContent = questions[currentIndexQs].choices[i]
    
        buttonAreaEl.appendChild(button)
  button.onclick = checkAnswer;
    }


}




let seconds = 60
let score = 0
let incorrect = 0

function checkAnswer(){

    if(this.textContent === questions[currentIndexQs].answer){

        alert('correct')
        score += 1;
        console.log('score: ',score)
    } else {
        alert('incorrect')
        incorrect +=
        console.log('incorrect',incorrect)


        //deduct time
    }



    currentIndexQs++;
    if(currentIndexQs === questions.length){

        endGame()
    } else {
        getQuestions()
    }

    



}


function timer(){

    // if(this.textContent !== questions[currentIndexQs].answer){

    //     seconds -= 10

    //     if(seconds < 0){
    //         seconds = 0
    //     }

    // }

var timerInterval = setInterval(function (){

    seconds --
    timerEl.textContent = 'Time: ' + seconds
 if(seconds === 0){
        timerEl.textContent = 'Time: ' + seconds

        clearInterval(timerInterval);

        endGame()
    }


}, 1000)
   





    timerEl.textContent = seconds






}




function endGame(){

}