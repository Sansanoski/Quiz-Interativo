const buttonStartQuiz = document.querySelector('button')
const buttonShowResult = document.querySelector('.btnShowResult')
const buttonComeBackMainMenu = document.querySelector('.backMainMenu')
const form = document.querySelector('form')
const introToQuiz = document.querySelector('.quiz-texto')
const boxShowResult = document.querySelector('.box-text-result')
const textOfResult = document.createElement('p') 
const containerQuiz = document.querySelector('.container-quiz')

const startQuiz = () => {
    form.style.display = 'block'
    introToQuiz.style.display ='none'
    buttonShowResult.style.display = 'block'
    buttonComeBackMainMenu.style.display = 'block'
}

const getScore = () => {
    const correctAnswer = ['B' , 'C' ,'A', 'B' ,'B']

    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
        form.question5.value
    ]
    let score = 0 

    userAnswers.forEach(( answer , index) => {
        if(answer === correctAnswer[index]){
            score += 20
        }
    })
    return score
}

const ShowResult = event => {
    event.preventDefault()
    const score = getScore()

    textOfResult.textContent = ` ${score} % de acertos ` 
    textOfResult.setAttribute('class','textInsideTheBox')
    boxShowResult.classList.add('show') 
    boxShowResult.insertAdjacentElement('afterbegin', textOfResult)
}

const buttonBackMenu = () => {
    form.style.display = 'none'
    buttonShowResult.style.display =' none'
    buttonComeBackMainMenu.style.display ='none'
    boxShowResult.classList.remove('show')
    introToQuiz.style.display = 'flex'
}
const removeBoxResult = event => {
    const clickedElement = event.target.tagName

    if(clickedElement === 'DIV'|| clickedElement === 'P' ||clickedElement === 'SPAN' ){
        boxShowResult.classList.remove('show')
        return
    }
}

buttonStartQuiz.addEventListener('click' , startQuiz)
buttonShowResult.addEventListener('click' ,ShowResult)
buttonComeBackMainMenu.addEventListener('click',buttonBackMenu)
containerQuiz.addEventListener('click',removeBoxResult)