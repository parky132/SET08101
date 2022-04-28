const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hotel Transit Motorcycle Lexus",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Style",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What information do you need to set up a Wireless Network Point?",
        a: "ARP",
        b: "MAC Address",
        c: "IP Address",
        d: "SSID",
        correct: "d",
    },
    {
        question: "Which of the following gives the strongest wireless signal encryption?",
        a: "WAP",
        b: "WIPS",
        c: "WEP",
        d: "WPA",
        correct: "d",
    },
    {
        question: "Which of these is a Password Hashing Algorithm?",
        a: "3DES",
        b: "AES",
        c: "MD4",
        d: "PGP",
        correct: "c",
    },
    {
        question: "Which of the following attacks requires a carrier file to self-replicate?",
        a: "Spam",
        b: "Virus",
        c: "Trojan",
        d: "worm",
        correct: "d",
    },
    {
        question: "Which of these is NOT a type of Virus",
        a: "macro",
        b: "wrapper",
        c: "tunneling",
        d: "boot selector",
        correct: "b",
    },
    {
        question: "Which of the following describes monitoring software installed without your consent?",
        a: "spyware",
        b: "Malware",
        c: "Adware",
        d: "Ransomware",
        correct: "a",
    },
        
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
