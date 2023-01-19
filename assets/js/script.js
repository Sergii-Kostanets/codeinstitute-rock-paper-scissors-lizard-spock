const choice = ["rock", "paper", "scissors", "lizard", "spock"]
let result = document.getElementById("result")
let process = document.getElementById("process")

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {

        button.addEventListener("click", function () {

            let weaponType = this.getAttribute("id")

            runGame(weaponType)

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
                    result.innerHTML = "You won,"
                    process.innerHTML = "because rock crushes scissors!"
                    addPlayerScore()
                } else if (computer === "lizard") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because rock crushes lizard!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw,"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = "because Spock vaporizes rock!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "because paper covers rock!"
                        addComputerScore()
                    }

                }

                break;

            case "paper":

                if (computer === "rock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because paper covers rock!"
                    addPlayerScore()
                } else if (computer === "spock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because paper disproves Spock!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "lizard") {
                        process.innerHTML = "because lizard eats paper!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "because scissors cuts paper!"
                        addComputerScore()
                    }

                }

                break;

            case "scissors":

                if (computer === "lizard") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because scissors decapitates lizard!"
                    addPlayerScore()
                } else if (computer === "paper") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because scissors cuts paper!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = "because Spock smashes scissors!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "because rock crushes scissors!"
                        addComputerScore()
                    }

                }

                break;

            case "lizard":

                if (computer === "paper") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because lizard eats paper!"
                    addPlayerScore()
                } else if (computer === "spock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because lizard poisons Spock!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = "because scissors decapitates lizard!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "because rock crushes lizard!"
                        addComputerScore()
                    }

                }

                break;

            case "spock":

                if (computer === "rock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because Spock vaporizes rock!"
                    addPlayerScore()
                } else if (computer === "scissors") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because Spock smashes scissors!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because Spock equal to Spock.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = "because lizard poisons Spock!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "because paper disproves Spock!"
                        addComputerScore()
                    }

                }

                break;

        }

    }, 501)

}

function addPlayerScore() {

    let playerScore = parseInt(document.getElementById("player-score").innerText)
    document.getElementById("player-score").innerText = ++playerScore

    if (playerScore === 10) {
        endPlayerGame()
    }

}

function addComputerScore() {

    let computerScore = parseInt(document.getElementById("computer-score").innerText)
    document.getElementById("computer-score").innerText = ++computerScore

    if (computerScore === 10) {
        endComputerGame()
    }

}

function endPlayerGame() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#d6f4d6"
    document.getElementsByTagName("h2")[0].innerText = "Congratulations, you won the game!"
    document.getElementsByClassName("player-weapon")[0].innerText = "Live long and prosper! New game will start shortly."
    setTimeout(function () {
        location.reload();
    }, 6000);
}

function endComputerGame() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#ffd4d4"
    document.getElementsByTagName("h2")[0].innerText = "You lose the game!"
    document.getElementsByClassName("player-weapon")[0].innerText = "Try again! New game will start shortly."
    setTimeout(function () {
        location.reload();
    }, 6000);
}