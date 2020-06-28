var questions = [{
      title: "Commonly used data types do not include?",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
},
{ 
      title: "Arrays in javascript can be used to store?",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
},
{
      title: "The condition of if/else statement is enclosed with?",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      answer: "parenthesis"
    
},
{     title: "String values can be enclosed within ___ when being assigned to variables?",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"
}
];
console.log(questions);

var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var scoreDiv = document.getElementById("scoreDiv");
var end = document.getElementById("end");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;

document.getElementById("score").innerHTML = score;

function goToNextQuestion(whatTheUserClicked) {
    var correctText = questions[currentQuestionIndex].answer;
    console.log("next")

    if (whatTheUserClicked === correctText) {
        console.log("Correct");
        score++;
        document.getElementById("score").innerHTML = score;
    }
    else {
        console.log("Incorrect");
    }
    currentQuestionIndex++;
    
        getNewQuestion(currentQuestionIndex)
}

function answerClickSetup() {
    var a = document.getElementById("answer1");
    var b = document.getElementById("answer2");
    var c = document.getElementById("answer3");
    var d = document.getElementById("answer4");

    a.addEventListener("click", function() {goToNextQuestion(a.innerText); });
    b.addEventListener("click", function() {goToNextQuestion(b.innerText); });
    c.addEventListener("click", function() {goToNextQuestion(c.innerText); });
    d.addEventListener("click", function() {goToNextQuestion(d.innerText); });
}

answerClickSetup();

startQuiz.addEventListener("click", function() {
    getNewQuestion(currentQuestionIndex);
    startTimer()
});

var currentQuestion;

function getNewQuestion(currentQuestionIndex) {
    if (currentQuestionIndex >= questions.length) {
        console.log("game over")
        return
    }
    var question = questions[currentQuestionIndex];
    currentQuestion = question;
    var title = question.title;
    var questionEl = document.getElementById("question");
    questionEl.innerText = title;

    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    answerEl1.innerText = choice1;

    var choice2 = question.choices[1];
    var answerEl2 = document.getElementById("answer2");
    answerEl2.innerText = choice2;

    var choice3 = question.choices[2];
    var answerEl3 = document.getElementById("answer3");
    answerEl3.innerText = choice3;

    var choice4 = question.choices[3];
    var answerEl4 = document.getElementById("answer4");
    answerEl4.innerText = choice4;

    document.getElementById("question").innerText = title;
    document.getElementById("answer1").innerText = choice1;
    document.getElementById("answer2").innerText = choice2;
    document.getElementById("answer3").innerText = choice3;
    document.getElementById("answer4").innerText = choice4;
}

function scoreKeeper() {
    document.getElementById("score").innerHTML = score;
}


function startTimer() {
    var interval = setInterval(function() {
        timeLeft--;
        document.getElementById("counterDisplay").innerHTML = timeLeft;
        console.log(timeLeft);

        if (timeLeft === 0) {
            clearInterval(interval);
            document.getElementById("quiz").setAttribute("style", "display: block");
        }
        else if (currentQuestionIndex === 4) {
            clearInterval(interval);
            document.getElementById("quiz").setAttribute("style", "display: block");
            score = ((score)*(timeLeft));

            if (isNaN(score)) {
                score.innerHTML = "Your score is: 0";
            }
            else {
                end.innerHTML = "You completed the quiz!";
                score.innerText = "Your score is: " + score;
            }
        }
    }, 1000)
}
