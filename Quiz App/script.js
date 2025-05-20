const questions = [
    {
        question: "What is the boiling point of water at sea level ?",
        answers: [
            {text : "90°C", correct: false},
            {text : "100°C", correct: true},
            {text : "120°C", correct: false},
            {text : "130°C", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere ?",
        answers: [
            {text : "Oxygen", correct: false},
            {text : "Nitrogen", correct: false},
            {text : "Corban Dioxide", correct: true},
            {text : "hydrogen", correct: false},
        ]
    },
    {
        question: "What part of the cell contains genetic material ?",
        answers: [
            {text : "Mitochondria", correct: false},
            {text : "Nucleus", correct: true},
            {text : "Cytoplasm", correct: false},
            {text : "Ribosome", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet ?",
        answers: [
            {text : "Venus", correct: false},
            {text : "Jupiter", correct: false},
            {text : "Mars", correct: true},
            {text : "Saturn", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();