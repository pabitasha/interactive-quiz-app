const questions = [
    {
        question: "What planet is known as the Red Planet?",
         answers:[
            { text: "Earth", correct: false},
             { text: "Venus", correct: false},
              { text: "Mars", correct: true},
               { text: "Jupiter", correct: false},
         ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
         answers:[
            { text: "Elephant", correct: false},
             { text: "Lion", correct: true},
              { text: "Tiger", correct: false},  
               { text: "Bear", correct: false},
         ]
        },
          {
        question: "How many continents are there on Earth?",
         answers:[
            { text: "5", correct: false},
             { text: "6", correct: false},
              { text: "7", correct: true},
               { text: "8", correct: false},
        ]
        },
          {
        question: "What do we call a baby cat?",
         answers:[
            { text: "Pup", correct: false},
             { text: "Calf", correct: false},
              { text: "Cub", correct: false},
               { text: "Kitten", correct: true},
         ]

        },
          {
        question: "Which shape has four equal sides and four right angles?",
         answers:[
            { text: "Rectangle", correct: false},
             { text: "Triangle", correct: false},
              { text: "Square", correct: true},
               { text: "Cicrle", correct: false},
         ]
       }
];

   const questionElement = document.getElementById("question");
   const answerButtons = document.getElementById("answer-buttons");
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
            let currentQuestion = questions[currentQuestionIndex];
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
                button.addEventListener("click", selectAnswer)
    });
 }

     function resetState(){
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
         selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
  }

  nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
       handleNextButton(); 
    }
    else{
        startQuiz();
    }
  });

  startQuiz();