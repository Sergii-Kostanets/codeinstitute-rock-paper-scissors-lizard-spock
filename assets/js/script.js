const choice = ["rock", "paper", "scissors", "lizard", "spock"]

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let weaponType = this.getAttribute("id")

            runGame(weaponType)

            // checkWinner()

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

    let result = checkWinner(playerChoice, computerChoice)

}

function checkWinner(pChoice, cChoice) {

    let player = pChoice.getAttribute("alt")
    console.log("You chose: ", player)
    setTimeout(function () {
        let computer = cChoice.getAttribute("alt")
        console.log("AI chose: ", computer)

        switch (player) {
            case "rock":

                if (computer === "scissors") {
                    document.getElementById("result").innerHTML = "You WON!"

                } else {

                }

                break;

            default:
                break;
        }
    }, 501)


}