const form = document.querySelector('form')
const btnShowResult = document.querySelector('.btnShowResult')
const divBoxTextResult = document.querySelector('.box-text-result')
const resultOfquiz = document.querySelector('span')



const correctAnswer = ['B','C','A','B','B']

const goTopPage = () => window.scrollTo({
    top : 0,
    behavior: "smooth"
})

const getUserAnswers = () => {
    let userAnswers = []
    correctAnswer.forEach((_answer , index) => {
        const userAnswer = form[`question${index + 1}`].value
        userAnswers.push(userAnswer)
    })
    return userAnswers
}

const calculateScoreUser = (userAnswers) => {
    let score = 0
    correctAnswer.forEach((answer , index) =>{
        const isUserAnswerCorrerct = answer === userAnswers[index]
        if(isUserAnswerCorrerct){
            score += 20
        }
    })
    let counter = 0 

   const intervalID = setInterval(() => {
    if(counter === score){
        clearInterval(intervalID)
    }
    divBoxTextResult.textContent = `Você acertou ${counter ++} % das questões  `
   } , 50)
}

// const animateScore = () => {
//     let counter = 0 

//    const intervalID = setInterval(() => {
//     if(counter === score){
//         clearInterval(intervalID)
//     }
//     divBoxTextResult.textContent = `Você acertou ${counter ++} % das questões  `
//    } , 50)
// }

const insertElementIntoDOM = () => {
    divBoxTextResult.classList.add("show")
    form.insertAdjacentElement('beforebegin' , divBoxTextResult)
}

form.addEventListener('submit' , event => {
    event.preventDefault()
    goTopPage()
    const userAnswers = getUserAnswers()
    calculateScoreUser(userAnswers)
    // animateScore()
    insertElementIntoDOM()
})

