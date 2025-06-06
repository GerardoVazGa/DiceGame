let randomNum1 = 0
let randomNum2 = 0

randomNum1 = Math.floor(Math.random() * 6 + 1)
randomNum2 = Math.floor(Math.random() * 6 + 1)

let dice1 = document.querySelector(".dice-one")
dice1.setAttribute("src", `./images/dice${randomNum1}.png`)

let dice2 = document.querySelector(".dice-two")
dice2.setAttribute("src", `./images/dice${randomNum2}.png`)