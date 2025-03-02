const questions =  [
    {
        question:"which is the largest element in the world",
        answers: [
            {text:"Shark", correct: false},
            {text:"Bule whale", correct: true},
            {text:"elephant", correct: false},
            {text:"giraffe", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the national animal of India?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Bengal Tiger", correct: true },
            { text: "Lion", correct: false },
            { text: "Peacock", correct: false },
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Sardar Patel", correct: false },
            { text: "Subhash Chandra Bose", correct: false },
        ]
    },
    {
        question: "Which is the longest river in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Ganga", correct: true },
            { text: "Godavari", correct: false },
        ]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Haryana", correct: false },
            { text: "Punjab", correct: true },
            { text: "Uttar Pradesh", correct: false },
            { text: "Rajasthan", correct: false },
        ]
    },
    {
        question: "Who is known as the 'Missile Man of India'?",
        answers: [
            { text: "Homi Bhabha", correct: false },
            { text: "Vikram Sarabhai", correct: false },
            { text: "Dr. A.P.J. Abdul Kalam", correct: true },
            { text: "Rakesh Sharma", correct: false },
        ]
    },
    {
        question: "Which is the national sport of India?",
        answers: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Football", correct: false },
            { text: "Kabaddi", correct: false },
        ]
    },
    {
        question: "Which monument is known as the 'Symbol of Love'?",
        answers: [
            { text: "India Gate", correct: false },
            { text: "Gateway of India", correct: false },
            { text: "Taj Mahal", correct: true },
            { text: "Red Fort", correct: false },
        ]
    },
    {
        question: "Which Indian city is known as the 'Silicon Valley of India'?",
        answers: [
            { text: "Hyderabad", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Bangalore", correct: true },
            { text: "Chennai", correct: false },
        ]
    },
    {
        question: "Who was the first President of India?",
        answers: [
            { text: "Dr. Rajendra Prasad", correct: true },
            { text: "Sarvepalli Radhakrishnan", correct: false },
            { text: "Indira Gandhi", correct: false },
            { text: "B.R. Ambedkar", correct: false },
        ]
    },
    {
        question: "Which festival is known as the 'Festival of Lights' in India?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
            { text: "Eid", correct: false },
            { text: "Navratri", correct: false },
        ]
    }
];

const questionElement = document.getElementById("qustion");
const answerButtons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();