const questions = [
  {
    question: "What is full form of HTML?",
    answers: [
      {
        text: "Cascading Style sheet",
        correct: false,
      },
      {
        text: "Hyper Text Markup Language",
        correct: true,
      },
      {
        text: "Java Script",
        correct: false,
      },
      {
        text: "Extensible Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "What is full form of CSS?",
    answers: [
      {
        text: "Cascading Style sheet",
        correct: true,
      },
      {
        text: "Hyper Text Markup Language",
        correct: false,
      },
      {
        text: "Java Script",
        correct: false,
      },
      {
        text: "Extensible Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "What is full form of JS?",
    answers: [
      {
        text: "Cascading Style sheet",
        correct: false,
      },
      {
        text: "Hyper Text Markup Language",
        correct: false,
      },
      {
        text: "Java Script",
        correct: true,
      },
      {
        text: "Extensible Markup Language",
        correct: false,
      },
    ],
  },
];

const questionEl = document.getElementById("question");
const answersBtn = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentquesIndex = 0;
let score = 0;

function startQuiz() {
  currentquesIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentquesIndex];
  let questionNo = currentquesIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
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
  Array.from(answersBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentquesIndex++;
  if (currentquesIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentquesIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
