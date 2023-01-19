const choice = ["rock", "paper", "scissors", "lizard", "spock"]

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let weaponType = this.getAttribute("id")

            runGame(weaponType)

            computerMove()



        })
    }

})

function runGame(weaponType) {

    let playerChoice = document.getElementById("player-choice")
    playerChoice.setAttribute("src", `assets/images/${weaponType}.jpeg`)

}

function computerMove() {

    let ai = Math.floor(Math.random() * 5)
    ai = choice[ai]
    let computerChoice = document.getElementById("computer-choice")
    computerChoice.setAttribute("src", `assets/images/${ai}.jpeg`)

}