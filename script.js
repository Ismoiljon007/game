const btnRoll = document.querySelector('.btn--roll')
const dice = document.querySelector('.dice')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')

let cruentScore = 0
let activePlayer = 0
let score = [0,0]
let gameOver = true
const switchPlayer = () => {
    cruentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = cruentScore
    activePlayer = activePlayer == 0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}


btnRoll.addEventListener('click', () => {
    if (gameOver) {
    const random = Math.floor(Math.random() * 6 + 1)
    dice.classList.remove('hidden')
    dice.src = `dice-${random}.png` 

    if (random !== 1) {
        cruentScore += random
        document.getElementById(`current--${activePlayer}`).textContent = cruentScore
    } else {
        switchPlayer()
    }
}

})

holdBtn.addEventListener('click', () => {
    if (gameOver) {
        score[activePlayer] += cruentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

        if (score[activePlayer] >= 20) {
            document.querySelector('.player--0').classList.remove('player--active')
            document.querySelector('.player--1').classList.remove('player--active')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            gameOver = false
        } else {
            switchPlayer()
        }
    }
})


newBtn.addEventListener('click', () => {
    window.location.reload()
})

    // console.log(1);
    // cruentScore = 0
    // activePlayer = 0
    // score = [0,0]
    // dice.classList.add('hidden')
    // score[activePlayer] += cruentScore
    // document.getElementById(`score--0`).textContent = score[activePlayer]
    // document.getElementById(`score--1`).textContent = score[activePlayer]
    // document.querySelector(`.player--0`).classList.remove('player--winner')
    // document.querySelector(`.player--1`).classList.remove('player--winner')
    // document.querySelector(`.player--0`).classList.add('player--active')
    // document.getElementById(`current--${activePlayer}`).textContent = cruentScore