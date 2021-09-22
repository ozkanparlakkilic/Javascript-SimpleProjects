function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype

Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}


// Quiz Constructor

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionsIndex = 0;
}

// Quiz Prototype

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionsIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionsIndex;
}

// Quiz quess
Quiz.prototype.quess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionsIndex++;
}


var ilkSoru = new Question("What's the best programming language ?",["C#","Javascript","Python","Asp.net"],"Javascript");
var ikinciSoru = new Question("What's the most popular language ?",["C#","Visual Basic","Node.js","Javascript"],"Javascript");
var ucuncuSoru = new Question("What's the best modern programming language ?",["C#","Javascript","Python","Asp.net"],"Javascript");
var sonSoru = new Question("What's the worst modern programming language ?",["C#","Javascript","Python","C"],"C");

var questions = [ilkSoru,ikinciSoru,ucuncuSoru,sonSoru];

// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#Question').textContent = question.text;

        for (let i = 0; i < choices.length; i++) {
            var element = document.querySelector("#choice"+i); 
            element.innerHTML = choices[i];

            quess('btn'+i,choices[i]);
        }

        showProgress();
    }
}

function showScore(){
    var html = `<h2>Score</h2><h4></h4>${quiz.score}`;

    document.querySelector('.card-body').innerHTML = html;
}

function quess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.quess(guess);
        loadQuestion();
    }
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionsIndex + 1;
    document.querySelector('#Progress').innerHTML = 'Question ' + questionNumber + ' of ' + totalQuestion;
}