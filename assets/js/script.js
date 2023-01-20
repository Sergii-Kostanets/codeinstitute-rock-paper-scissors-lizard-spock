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

    }, 300)

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
                    result.innerHTML = "You won!"
                    process.innerHTML = "Rock crushes scissors!"
                    addPlayerScore()
                } else if (computer === "lizard") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Rock crushes lizard!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `Rock equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = `Spock vaporizes ${player}!`
                        addComputerScore()
                    } else {
                        process.innerHTML = `Paper covers ${player}!`
                        addComputerScore()
                    }

                }

                break;

            case "paper":

                if (computer === "rock") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Paper covers rock!"
                    addPlayerScore()
                } else if (computer === "spock") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Paper disproves Spock!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `Paper equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "lizard") {
                        process.innerHTML = `Lizard eats ${player}!`
                        addComputerScore()
                    } else {
                        process.innerHTML = `Scissors cuts ${player}!`
                        addComputerScore()
                    }

                }

                break;

            case "scissors":

                if (computer === "lizard") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Scissors decapitates lizard!"
                    addPlayerScore()
                } else if (computer === "paper") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Scissors cuts paper!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `Scissors equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = `Spock smashes ${player}!`
                        addComputerScore()
                    } else {
                        process.innerHTML = `Rock crushes ${player}!`
                        addComputerScore()
                    }

                }

                break;

            case "lizard":

                if (computer === "paper") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Lizard eats paper!"
                    addPlayerScore()
                } else if (computer === "spock") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Lizard poisons Spock!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `Lizard equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = `Scissors decapitates ${player}!`
                        addComputerScore()
                    } else {
                        process.innerHTML = `Rock crushes ${player}!`
                        addComputerScore()
                    }

                }

                break;

            case "spock":

                if (computer === "rock") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Spock vaporizes rock!"
                    addPlayerScore()
                } else if (computer === "scissors") {
                    result.innerHTML = "You won!"
                    process.innerHTML = "Spock smashes scissors!"
                    addPlayerScore()
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `Spock equal to Spock.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = "Lizard poisons Spock!"
                        addComputerScore()
                    } else {
                        process.innerHTML = "Paper disproves Spock!"
                        addComputerScore()
                    }

                }

                break;

        }

    }, 301)

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
    document.getElementsByTagName("h2")[0].innerHTML = "<h2>Congratulations, you won the game!</h2>"
    document.getElementsByClassName("player-weapon")[0].innerHTML = "Live long and prosper!<br>New game will start shortly."
    setTimeout(function () {
        location.reload();
    }, 6000);
}

function endComputerGame() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#ffd4d4"
    document.getElementsByTagName("h2")[0].innerHTML = "<h2>You lose the game!</h2>"
    document.getElementsByClassName("player-weapon")[0].innerHTML = "Try again!<br>New game will start shortly."
    setTimeout(function () {
        location.reload();
    }, 6000);
}