const quizData = [
    {
        question: "Who owns Twitter?",
        a: 'Me',
        b: 'Elon Mask',
        c: 'King Charles',
        d: 'Bill Gates',
        e: 'Anonymous',
        correct: 'b'
    },
    {
        question: "Who has the most beautiful eyes in the world?",
        a: 'Mice',
        b: 'Cats',
        c: 'Adriana Lima',
        d: 'Monkeys',
        e: 'Gazelles',
        correct: 'e'
    },
    {
        question: "Which is the fastest flying bird?",
        a: 'Pigeon',
        b: 'Eagle',
        c: 'Starling',
        d: 'Peregrine',
        e: 'Ostrich',
        correct: 'd'
    },
    {
        question: "Which is the fastest running annimal?",
        a: 'cow',
        b: 'Horse',
        c: 'Cheetah',
        d: 'Lion',
        e: 'Ostrich',
        correct: 'c'
    },
    {
        question: "What is the easiest step of the software?",
        a: 'HTML',
        b: 'CSS',
        c: 'Javascript',
        d: 'React',
        e: 'PHP',
        correct: 'a'
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => (answerEl.checked = false))
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// function getSelected() {
//     let answer

//     answerEls.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     if (currentQuiz === quizData.length - 1){
//         if (answer) {
//             return "YES, Final Decision!"
//         }else {
//             return undefined
//         }
//     }else {
//         if(answer) {
//             return "YES"
//         }else{
//             return undefined
//         }
//     }    
// }

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()

//     // console.log(answer)

//     if (currentQuiz === quizData.length - 1) {
//         // Last question
//         if (answer) {
//             if (answer === quizData[currentQuiz].correct) {
//                 score++
//             }

//             quiz.innerHTML = `
//                 <h2>Test is completed, you got ${score * 20} points</h2>
//                 <button class="submit" onClick ="location.reload()">Try Again</button>
//             `
//         }
//     } else {
//         // Not the last question
//         if (answer) {
//             if (answer === quizData[currentQuiz].correct) {
//                 score++
//             }

//             currentQuiz++
//             loadQuiz()
//         }
//     }

// })

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    // console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Test is complited, you got ${score * 20} points</h2>
            <button class="submit" onClick ="location.reload()">Try Again</button>
            `
        }
    }
})
