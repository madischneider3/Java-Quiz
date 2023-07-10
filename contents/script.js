var javaQuiz = [
    {
        question: 'Commonly used data types do not include: ____',
        answersArray: [
            {answer: 'strings',correct: false},
            {answer: 'booleans',correct: true},
            {answer: 'alerts',correct: false},
            {answer: 'numbers',correct: false}]
    },

    {
        question: 'The condition in an if/else statement are enclosed in ____',
        answersArray: [
            {answer: 'quotes',correct: false},
            {answer: 'curly brackets',correct: true},
            {answer: 'parenthesis',correct: false},
            {answer: 'square brackets',correct: false}
        ]
    },

    {
        question: 'Arrays in javascript can be used to store ____',
        answersArray: [
            {answer: 'numbers and strings',correct: false},
            {answer: 'other arrays',correct: false},
            {answer: 'booleans',correct: true},
            {answer: 'all of the above',correct: false}
        ]
    },

    {
        question:'String values must be enclosed within ____ when being assigned to variables',
        answersArray: [
            {answer: 'commas',correct: false},
            {answer: 'curly brackets',correct: false},
            {answer: 'quotes',correct: true},
            {answer: 'parenthesis',correct: false}
        ]
    },

    {
        question:'A useful tool used suring development and debugging for printing content to the debugger is ____',
        answersArray: [
            {answer: 'javascript',correct: true},
            {answer: 'terminal/bash',correct: false},
            {answer: 'for loops',correct: false},
            {answer: 'console log',correct: false}
        ]
    }
]

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 60;
var questionContainer = document.getElementById('question-container');
var optionsContainer = document.getElementById('options-container');
var submitButton = document.getElementById('submit-btn');
var resultSection = document.getElementById('result-section');
var scoreContainer = document.getElementById('score-container');
var initialsForm = document.getElementById('initials-form');
var initialsInput = document.getElementById('initials-input');

function startQuiz() {
  displayQuestion();
  
  startTimer();
}

function displayQuestion() {
  var question = javaQuiz[currentQuestionIndex];

  questionContainer.textContent = question.question;

  optionsContainer.innerHTML = '';

  question.answersArray.forEach(function(answerObj, index) {
    var option = document.createElement('button');
    option.textContent = answerObj.answer;

    option.addEventListener('click', function() {
      checkAnswer(answerObj.correct);
    });

    optionsContainer.appendChild(option);
  });
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  } else {
    timeLeft -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= javaQuiz.length || timeLeft <= 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  resultSection.classList.remove('is-hidden');
  scoreContainer.textContent = 'Your score: ' + score;
}

function startTimer() {
    timerContainer.textContent = 'Time: ' + timeLeft;
    countdownInterval = setInterval(function() {
      timeLeft--;
      timerContainer.textContent = 'Time: ' + timeLeft;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

submitButton.addEventListener('click', startQuiz);