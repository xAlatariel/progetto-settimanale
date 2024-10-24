// Imposta il timer
const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;

// Recupera gli elementi SVG
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

/*
La prima cifra (il primo circumference) 
rappresenta la lunghezza del segmento visibile 
(quanto del cerchio sarà visibile).
La seconda cifra (il secondo circumference) 
rappresenta la lunghezza dello spazio vuoto successivo.
*/
circle.style.strokeDasharray = `${circumference} ${circumference}`;
// stroke-dasharray è una proprietà che specifica la lunghezza dei segmenti
//visibili e degli spazi vuoti di un tracciato.
circle.style.strokeDashoffset = circumference;
//stroke-dashoffset controlla dove inizia il tracciato visibile.

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Funzione countdown
function startTimer() {
  const timerElement = document.getElementById("timer");

  const interval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    // calcola la percentuale di completamento di un'animazione (come un countdown) e aggiorna la visualizzazione del progresso
    //tramite la funzione setProgress(progress).
    const progress = ((TOTAL_TIME - timeLeft) / TOTAL_TIME) * 100;
    setProgress(progress);

    if (timeLeft <= 0) {
      clearInterval(interval); // Ferma il timer quando arriva a zero
    }
  }, 1000);
}

startTimer();

//--------------------------------------------------//

/* const container = document.querySelector(".buttonContainer");
  const getTtitle = function (){
    const title = document.createElement ("h3");
    for (let i =0; i<questions.length;i++){
        title.innerText = questions[i].question;
        container.appendChild(title);
    }
  }
  getTtitle()

  const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      answer:
      [
        {title: "Central Processing Unit",
        value: true},
            {title: "Central Process Unit",
            value: false},
            {title: "Computer Personal Unit",
                value: false},
                {title: "Central Processor Unit",
                    value: false}
      ]
      
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answer:
      [
        {title: "Final",
        value: true},
            {title: "Static",
            value: false},
            {title: "Private",
                value: false},
                {title: "Public",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      answer:
      [
        {title: "False",
        value: true},
            {title: "True",
            value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      answer:
      [
        {title: "False",
        value: true},
            {title: "True",
            value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      answer:
      [
        {title: ".svg",
        value: true},
            {title: ".png",
            value: false},
            {title: ".png",
                value: false},
                {title: ".gif",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      answer:
      [
        {title: "Cascading Style Sheet",
        value: true},
            {title: "Counter Strike: Source",
            value: false},
            {title: "Corrective Style Sheet",
                value: false},
                {title: "Computer Style Sheet",
                    value: false}
      ]
      
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      answer:
      [
        {title: "Nougat",
        value: true},
            {title: "Ice Cream",
            value: false},
            {title: "Jelly Bean",
                value: false},
                {title: "Marshmallow",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      answer: [
        {title: "140",
        value: true},
            {title: "120",
            value: false},
            {title: "160",
                value: false},
                {title: "100",
                    value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      answer: [
        {title: "true",
        value: false},
            {title: "false",
            value: true},
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      answer: [
        {title: "Java",
        value: true},
        {title: "Python",
            value: false},
            {title: "C",
                value: false},
                {title: "Jakarta",
                    value: false},
            
    ]
    },
  ]; */

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];



const arrayQuestions = []; /*ARRAY CON DOMANDE*/
const question = function (array) {
  for (let i = 0; i < array.length; i++) {
    arrayQuestions.push(array[i].question);
  }
};
question(questions);
console.log(arrayQuestions);

const arrayTrueAnswers = []; /*ARRAY CON RISPOSTE ESATTE*/
const positive = function (array) {
  for (let i = 0; i < array.length; i++) {
    arrayTrueAnswers.push(array[i].correct_answer);
  }
};
positive(questions);
console.log(arrayTrueAnswers);

const arrayWrongAnswers = []; /*ARRAY CON ARRAYS DI RISPOSTE SBAGLIATE*/
const negative = function (array) {
  for (let i = 0; i < array.length; i++) {
    arrayWrongAnswers.push(array[i].incorrect_answers);
  }
};
negative(questions);
console.log(arrayWrongAnswers);

/*window.onload = function onLoad () {
  const randomIndex = Math.floor(Math.random ()*questions.length);
  const h3 = document.createElement("h3");
    h3.innerText = questions[randomIndex].question;
    const container = document.querySelector(".buttonContainer");
    container.appendChild(h3);

    risposte(randomIndex);
}

    const risposte = function (randomIndex){
      const div = document.querySelector(".buttonContainer");

      if (questions[randomIndex].incorrect_answers.length>2){
       let button1= document.createElement("button")
       let button2= document.createElement("button")
       let  button3= document.createElement("button")
       let  button4= document.createElement("button")

        div.appendChild(button1);
        div.appendChild(button2);
        div.appendChild(button3);
        div.appendChild(button4);

        const allAnswers = [ 
          ...questions[randomIndex].incorrect_answers, questions[randomIndex].correct_answer
        ];                                                                                              /*ARRAY CON RISPOSTE INCORRECT + CORRECT*/

/* const shuffledAnswers = allAnswers.sort (()=> Math.random ()-0.5);                              /*MESCOLA LE RISPOSTE*/

/*button1.innerText = shuffledAnswers[0];
        button2.innerText = shuffledAnswers [1];
        button3.innerText = shuffledAnswers [2];
        button4.innerText = shuffledAnswers [3];
        
         button1.addEventListener("click", function(){
          if (button1.innerText === questions[randomIndex].correct_answer){
            button1.style.backgroundColor = "green"; 
          } else {button1.style.backgroundColor ="red"}
          setTimeout (onLoad, 1000)
        })
        button2.addEventListener("click", function(){
          if (button2.innerText === questions[randomIndex].correct_answer){
            button2.style.backgroundColor = "green"; 
          } else {button2.style.backgroundColor ="red"}
          setTimeout (onLoad, 1000)
        })
        button3.addEventListener("click", function(){
          if (button3.innerText === questions[randomIndex].correct_answer){
            button3.style.backgroundColor = "green"; 
          } else {button3.style.backgroundColor ="red"}
          
        })
        button4.addEventListener("click", function(){
          if (button4.innerText === questions[randomIndex].correct_answer){
            button4.style.backgroundColor = "green"; 
          } else {button4.style.backgroundColor ="red"}
        })
        
      } else {let button1= document.createElement("button")
        let button2= document.createElement("button")
        
        div.appendChild(button1)
        div.appendChild(button2)
        
        button1.innerText = questions[randomIndex].incorrect_answers[0];
        button2.innerText = questions[randomIndex].correct_answer;
        
        button1.addEventListener("click", function(){
          if (button1.innerText === questions[randomIndex].correct_answer){
            button1.style.backgroundColor = "green"; 
          } else {button1.style.backgroundColor ="red"}
          
        })
        
        button2.addEventListener("click", function(){
          if (button2.innerText === questions[randomIndex].correct_answer){
            button2.style.backgroundColor = "green"; 
          } else{ button2.style.backgroundColor ="red"}
          
          })
        
    }
  }

  
  onLoad();
  risposte(randomIndex); */

let usedQuestions = [];
let score = 0;
let numberOfQuestion = 0;
let h4 = document.createElement("h4");
let divEndPage = document.querySelector(".endPage")
divEndPage.appendChild(h4);

const onLoad = function () {
  const container = document.querySelector(".buttonContainer");

  if (usedQuestions.length === questions.length) {
    container.innerHTML = "Hai completato il quiz!";
    return; // PULISCE LA CONTAINER DELLE DOMANDE//
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (usedQuestions.includes(randomIndex));

  usedQuestions.push(randomIndex);

  const h3 = document.createElement("h3");
  h3.innerText = questions[randomIndex].question;
  container.innerHTML = "";
  container.appendChild(h3);

  risposte(randomIndex);
};

const risposte = function (randomIndex) {
  const div = document.querySelector(".buttonContainer");

  const allAnswers = [
    ...questions[randomIndex].incorrect_answers,
    questions[randomIndex].correct_answer,
  ];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuffledAnswers.length; i++) {
    let button = document.createElement("button");
    button.innerText = shuffledAnswers[i];
    button.style.cursor = "pointer";
    button.style.width = "150px";
    button.style.height = "50px";
    button.style.margin = "1rem";
    button.style.borderRadius = "20px"
    button.style.backgroundColor = "transparent";
    button.style.color = "white";
  
    div.appendChild(button);
    button.addEventListener("click", function () {
      numberOfQuestion ++;
      button.style.backgroundColor = "#D20094";
      h4.innerText = "QUESTION  " + numberOfQuestion + "  / 10";

      if (button.innerText === questions[randomIndex].correct_answer) {
        score ++;
      } else { score;
      }
      
      setTimeout(onLoad,500);                                                 //AGGIUNGO TEMPO PRIMA DI RICARICARE LA PAGINA CON SETTIMEOUT//
    });
  }
};
window.onload = onLoad;


  


