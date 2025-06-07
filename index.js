let randomNum1 = 0
let randomNum2 = 0
let principalTitle = document.querySelector(".game-intruction")

randomNum1 = Math.floor(Math.random() * 6 + 1)
randomNum2 = Math.floor(Math.random() * 6 + 1)

let imageDice1 = document.querySelector(".dice-one")
imageDice1.setAttribute("src", `./images/dice${randomNum1}.png`)

let imageDice2 = document.querySelector(".dice-two")
imageDice2.setAttribute("src", `./images/dice${randomNum2}.png`)

if(randomNum1 === randomNum2){
    principalTitle.textContent = "🚩 DRAW! 🚩"
} else if(randomNum1 < randomNum2){
    principalTitle.textContent = "PLAYER 2 WINS! 🚩"
} else{
    principalTitle.textContent = "🚩 PLAYER 1 WINS!"
}