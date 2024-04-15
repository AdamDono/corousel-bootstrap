//add a cost with a viriable

//const { Button } = require("bootstrap");

const questions = [{
    question: "whats the color of the sky?",
    answers:[
{Text: "belle", correct: false},
{Text: "luci", correct: false},
{Text: "blue", correct: true},
{Text: "eve", correct: false},

    ]
},

//add the same question in the same format

{
    question: "whats the color of the ground?",
    answers:[
{Text: "belle", correct: false},
{Text: "brown", correct: true},
{Text: "blue", correct: false},
{Text: "eve", correct: false},

 ]

},

//add the same question in the same format

{
    question: "whats the color of the skin?",
    answers:[
{Text: "belle", correct: false},
{Text: "black", correct: true},
{Text: "blue", correct: false},
{Text: "eve", correct: false},

    ]

},

//add the same quest ion in the same format

{
    question: "whats the color of the eye?",
    answers:[
{Text: "belle", correct: false},
{Text: "white", correct: true},
{Text: "blue", correct: false},
{Text: "eve", correct: false},

    ]

}


]; 


const questionElement= document.getElementById('question');
const answerButton= document.getElementById('answer-button');
const nextButton= document.getElementById('next-button');

let currentQuestionindex = 0;
let score =0;


//reset quiz answers evrytime the quiz starts 
function startQuiz() {
    let currentQuestionindex = 0;
    let score =0;
    nextButton.innerHTML = 'Next';
    ShowQuestion();


};