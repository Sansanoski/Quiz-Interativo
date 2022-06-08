const buttonToStartGame = document.querySelector('button')
const form = document.querySelector('form')
const div = document.querySelector('.quiz-texto')
const buttonResult = document.querySelector('.btnShowResult')
const boxShowResult = document.querySelector('.box-text-result')
const p = document.createElement('p') 
const closeButtonInboxResult = document.querySelector('span')
const buttonToComeBackMainMenu = document.querySelector('.backMainMenu')
const link = document.querySelector('a')

let score = 0 


const correctAnswer = ['B' , 'C' ,'A', 'B' ,'B']

buttonToStartGame.addEventListener('click' , () => {
    form.style.display = 'block'
    div.style.display ='none'
    buttonResult.style.display = 'block'
    buttonToComeBackMainMenu.style.display = 'block'
})

buttonResult.addEventListener('click' , event => {
    event.preventDefault()
    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
        form.question5.value
    ]
    userAnswers.forEach(( answer , index) => {
        if(answer === correctAnswer[index]){
            score += 20
        }
    })
    p.textContent = ` ${score} % de acertos ` 
    boxShowResult.insertAdjacentElement('afterbegin' , p)
    p.setAttribute('class' , 'textInsideTheBox')
    boxShowResult.classList.add('show')
    score = 0 

})
closeButtonInboxResult.addEventListener('click' , () => {
    boxShowResult.classList.remove('show')
})
buttonToComeBackMainMenu.addEventListener('click' , () => {
    form.style.display = 'none'
    buttonResult.style.display =' none'
    buttonToComeBackMainMenu.style.display ='none'
    boxShowResult.classList.remove('show')
    div.style.display = 'flex'
})
