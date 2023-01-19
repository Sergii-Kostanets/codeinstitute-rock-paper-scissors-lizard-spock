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
}

