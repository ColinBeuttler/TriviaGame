

const quizData =[
    {
        question:"Who shot first?",
        choice1:"Gredo",
        choice2:"Han",
        choice3:"the wookie",
        correct:"2"
    },
    {
        question:"Who did Han get the Mellinium Falcon from?", 
        choice1:"Lando",
        choice2:"Jabba the Hut",
        choice3:"A junker",
        correct:"1"
    }, 
    {
        question:"Who was concerned about the droid attack on the Wookies?",
        choice1:"Yoda",
        choice2:"Ki-Adi-Mundi",
        choice3:"No one cares about wookies",
        correct:"2",
    },

    {
        question:"Hello there",
        choice1:"Uhhh...hey",
        choice2:"Jedi scum..",
        choice3:"General Kenobi!",
        answer:"3",
    },
    {
        question:"General Grevious collected what?",
        choice1:"lightsabers",
        choice2:"stamps",
        choice3:"coins",
        correct:"1",
    },
    {
        question:"what did order 66 do?",
        choice1:"kill the wookies",
        choice2:"kill the jedis",
        choice3:"go home",
        correct:"2",
    }]
    
var TIMER=0;

function start(){
    renderQuestion();
    TIMER=setInterval(renderCounter,1000);
}

var currentQuestion=0;
var lastQuestion= quizData.length-1;

function renderQuestion(){
    var runQuestion=quizData[currentQuestion];
    var start = document.getElementById("start");
    var quiz = document.getElementById("quiz");
    var questionElement = document.getElementById("questions");
    var counter = document.getElementById("counter");
    var timeGuage = document.getElementById("timeGuage");
   
    
    var choice1 =document.getElementById("choice1");
    var choice2 =document.getElementById("choice2"); 
    var choice3 =document.getElementById("choice3");
    
    questionElement.innerHTML=runQuestion.question;
    choice1.innerHTML=runQuestion.choice1;
    choice2.innerHTML=runQuestion.choice2;
    choice3.innerHTML=runQuestion.choice3;
    timeGuage.innerHTML=counter;
    currentQuestion++;
}
var counter=10;

function renderCounter(){
    var counterElement=document.getElementById("counter");

    if (counter>0) {
        counterElement.innerHTML=counter;
        counter--;
    }
    else {
        clearInterval(TIMER);
        counter=10;
        renderQuestion();

    }
}

//$("choice1").on("click", checkCorrect());{
//if (choice1===correct){
    //correctAnswers++

//}

//else wrongAnswers++
//} 

$("choice2").on("click", checkCorrect());{

}

$("choice3").on("click", checkCorrect());{

}

//var correctAnswers=0;
   // for (let correctAnswers = 0; correctAnswers < array.length; correctAnswers++) {
        //const element = array correctAnswers];
        
    //}
//}