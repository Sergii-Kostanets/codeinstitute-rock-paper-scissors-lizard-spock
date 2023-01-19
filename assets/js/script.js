const choice = ["rock", "paper", "scissors", "lizard", "spock"]

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let weaponType = this.getAttribute("id")

            runGame(weaponType)

            checkWinner()

        })
    }

})

function runGame(weaponType) {

    let playerChoice = document.getElementById("player-choice")
    playerChoice.setAttribute("src", `assets/images/${weaponType}.jpeg`)
    playerChoice.setAttribute("alt", `${weaponType}`)

    let ai = Math.floor(Math.random() * 5)
    ai = choice[ai]
    let computerChoice = document.getElementById("computer-choice")

    setTimeout(function () {
        computerChoice.setAttribute("src", `assets/images/${ai}.jpeg`)
        computerChoice.setAttribute("alt", `${ai}`)
    }, 500)

}

function checkWinner() {

    let playerChoice = document.getElementById("player-choice").getAttribute("alt")
    console.log(playerChoice)
    setTimeout(function () {
        let computerChoice = document.getElementById("computer-choice").getAttribute("alt")
        console.log(computerChoice)
    }, 501)


}