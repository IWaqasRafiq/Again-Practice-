const questions = [
    {
        question: "What is the boiling point of water at sea level ?",
        answer: [
            {text : "90°C", correct: false},
            {text : "100°C", correct: true},
            {text : "120°C", correct: false},
            {text : "130°C", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere ?",
        answer: [
            {text : "Oxygen", correct: false},
            {text : "Nitrogen", correct: false},
            {text : "Corban Dioxide", correct: true},
            {text : "hydrogen", correct: false},
        ]
    },
    {
        question: "What part of the cell contains genetic material ?",
        answer: [
            {text : "Mitochondria", correct: false},
            {text : "Nucleus", correct: true},
            {text : "Cytoplasm", correct: false},
            {text : "Ribosome", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet ?",
        answer: [
            {text : "Venus", correct: false},
            {text : "Jupiter", correct: false},
            {text : "Mars", correct: true},
            {text : "Saturn", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = button.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}