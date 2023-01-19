const choice = ["rock", "paper", "scissors", "lizard", "spock"]
let result = document.getElementById("result")
let process = document.getElementById("process")

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
                    result.innerHTML = "You won,"
                    process.innerHTML = "because rock crushes scissors!"
                } else if (computer === "lizard") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because rock crushes lizard!"
                } else if (computer === player) {
                    result.innerHTML = "Draw,"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = "because Spock vaporizes rock!"
                    } else {
                        process.innerHTML = "because paper covers rock!"
                    }

                }

                break;

            case "paper":

                if (computer === "rock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because paper covers rock!"
                } else if (computer === "spock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because paper disproves Spock!"
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "lizard") {
                        process.innerHTML = "because lizard eats paper!"
                    } else {
                        process.innerHTML = "because scissors cuts paper!"
                    }

                }

                break;

            case "scissors":

                if (computer === "lizard") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because scissors decapitates lizard!"
                } else if (computer === "paper") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because scissors cuts paper!"
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "spock") {
                        process.innerHTML = "because Spock smashes scissors!"
                    } else {
                        process.innerHTML = "because rock crushes scissors!"
                    }

                }

                break;


            case "lizard":

                if (computer === "paper") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because lizard eats paper!"
                } else if (computer === "spock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because lizard poisons Spock!"
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because ${computer} equal to ${player}.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = "because scissors decapitates lizard!"
                    } else {
                        process.innerHTML = "because rock crushes lizard!"
                    }

                }

                break;


            case "spock":

                if (computer === "rock") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because Spock vaporizes rock!"
                } else if (computer === "scissors") {
                    result.innerHTML = "You won,"
                    process.innerHTML = "because Spock smashes scissors!"
                } else if (computer === player) {
                    result.innerHTML = "Draw"
                    process.innerHTML = `because Spock equal to Spock.`
                } else {
                    result.innerHTML = "You lose!"

                    if (computer === "scissors") {
                        process.innerHTML = "because lizard poisons Spock!"
                    } else {
                        process.innerHTML = "because paper disproves Spock!"
                    }

                }

                break;

        }
    }, 501)

}