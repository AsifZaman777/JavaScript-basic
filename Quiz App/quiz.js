
const quizData = [
  {
    question: '1.Who is the best player in Rocket league ?',
    a: 'Asif Zaman',
    b: 'Ovy',
    c: 'Prottoy',
    d: 'Rayied',
    correct:'a',
  },
  {
    question: '2.What is your favourite programing language ? ',
    a: 'Python',
    b: 'Java',
    c: 'Javascript',
    d: 'Ruby',
    correct:'c',
  },
  {
    question: '3.Which domain you like most in CSE ? ',
    a: 'Mobile app development ',
    b: 'Software Enginering',
    c: 'Full stack development',
    d: 'Data science ',
    correct:'c',
  },
  {
    question: '4.Which platform you like for compitetive programing?',
    a: 'Codefources ',
    b: 'Hacker Rank',
    c: 'Toph',
    d: 'Uri',
    correct:'a',
  },
  {
    question: '5.Which backend tech is mostly used by Bangladesh?',
    a: 'Java(Spark)',
    b: 'Node(Express)😮',
    c: 'Python(Django)',
    d: 'PHP(Laraval)😣',
    correct:'d',
  },
  {
    question: '6.Which frontend tech you like most?',
    a: 'React JS',
    b: 'Next JS',
    c: 'Vue JS',
    d: 'Angular JS',
    correct:'a',
  },

  {
    question:'7.Who is the best programmer ?',
    a:'Rayied',
    b:'Angela',
    c:'Alif',
    d:'Asif',
    correct:'a',
  },

];


const quizContainer = document.getElementById("q");
const answerEls = document.querySelectorAll(".answers");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
           answer=answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    let answer= getSelected();

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            //increase score
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `
                <h2 class="resulth">Result</h2>
                <h2 class="result">${score}/${quizData.length}.</h2>
            `;
            alert("Finished..... Press OK to see the answer");
        }
    }
});

///setting shadow Onlclick Submit

submit.addEventListener('mouseover', () => {
  quizContainer.style.boxShadow = '0px 0px 1000px 0px purple';
});

submit.addEventListener('mouseout', () => {
  quizContainer.style.boxShadow = '2px 2px 22px 0px  black';
});
