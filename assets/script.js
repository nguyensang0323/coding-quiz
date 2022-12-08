var timeEl = document.querySelector('#timer');
var allottedTime = 40;

var introHolder = document.querySelector('.intro-holder');
var questionHolder = document.querySelector('.question-holder');
var beginBtn = document.querySelector('#begin-btn');

var questionSpace = document.querySelector('#question');
var answerChoices = document.querySelector('#answer-choices');

var backBtn = document.querySelector('#back-btn');
var nextBtn = document.querySelector('#next-btn');
var timerInterval;

// needs variable/object for quiz question, choice, answerChoices
var examination = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

beginBtn.addEventListener("click", function(event) {
    console.log("click");
    introHolder.classList.add("hide");
    questionHolder.classList.remove("hide");
    questionHolder.classList.add("show");
    timeEl.textContent = "Time:" + allottedTime;

    // incorporate timer
    timerInterval = setInterval(function(){
        allottedTime--
        timeEl.textContent = "Time:" + allottedTime;

        if (allottedTime <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Out of Time!";
        }


    }, 1000);

    showQuestion();

});

var index = 0;

function showQuestion(){
    questionSpace.textContent = examination[index].title;
    answerChoices.innerHTML = "";
    for (var i=0; i < examination[index].choices.length; i++){
        var choiceBtns = document.createElement("button");
        choiceBtns.textContent = examination[index].choices[i];

        choiceBtns.onclick = showAnswer;

        choiceBtns.setAttribute("value", examination[index].choices[i]);

        answerChoices.append(choiceBtns);
    }
}
var result = document.querySelector('.result');

function showAnswer(){
    if (this.value !== examination[index].answer){
        allottedTime -= 3;
        timeEl.textContent = "Time: " + allottedTime;

        if (allottedTime <= 0){
            endQuiz();
        }
        result.textContent = "wrong!";
    } else {
        // feedback for correct
        result.textContent = "correct!"
    }; result.classList.remove('hide');

    setTimeout(function(){
      result.classList.add('hide');
    }, 1000);
    
    index++ ;
    showQuestion();
}
// function to stop the quiz
function endQuiz(){
  clearInterval(timerInterval);
  questionHolder.classList.add('hide');
  document.querySelector('.end').classList.remove('hide');
  document.querySelector('#final-score').textContent = allottedTime;
  document.querySelector('#end-btn').addEventListener('click', function(){

  });
}