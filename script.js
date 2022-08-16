let pRound = 0
let cRound = 0
let choices = ["rock", "paper", "scissors"]
const btnPaper = document.querySelector('#btnPaper')
const btnRock = document.querySelector('#btnRock')
const btnScissors = document.querySelector('#btnScissors')
const gameRound = document.querySelector('#round')
const gameResult = document.querySelector('#result')
const btn = document.querySelectorAll("button")
function getCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function winGame() {
        result.textContent = "You win! Congratulations!"
        document.getElementById("btnScissors").style.display = "none"
        document.getElementById("btnPaper").style.display = "none"
        document.getElementById("btnRock").style.display = "none"
}
function loseGame() {
        result.textContent = "Aww, you lose! Try again next time!"
        document.getElementById("btnScissors").style.display = "none"
        document.getElementById("btnPaper").style.display = "none"
        document.getElementById("btnRock").style.display = "none"
}

function roundWin() {        
    ++pRound
}

function roundLose() {
    ++cRound
}

function paperRound() {
    cPick = getCompChoice()
    displayChoice("paper", cPick);
    if (cPick == "rock") {
        roundWin();                   
    }
    else if (cPick == "scissors") {
        roundLose();                    
    }
    gameRound.textContent = "You threw paper! Opponent threw " + cPick +
            "! Player's point total: " + pRound + ". Opponent's point total: " + cRound
            endGame();
}

function displayChoice(ppick, cpick) {
    $("#Img1").attr("src", ""+ppick+".png");
    $("#Img2").attr("src", ""+cpick+".png");  
}

function rockRound() {
    cPick = getCompChoice();
    displayChoice("rock", cPick);
    if (cPick == "scissors") {
        roundWin();
    }
    else if (cPick == "paper") {
        roundLose();     
    }
    gameRound.textContent = "You threw rock! Opponent threw " + cPick +
            "! Player's point total: " + pRound + ". Opponent's point total: " + cRound
            endGame()
}

function scissorsRound() {
    cPick = getCompChoice()
    displayChoice("scissors", cPick);
    if (cPick == "paper") {
        roundWin();
    }
    else if (cPick == "rock") {
        roundLose();                    
    }
    gameRound.textContent = "You threw scissors! Opponent threw " + cPick +
            "! Player's point total: " + pRound + ". Opponent's point total: " + cRound
            endGame();
}

function endGame() {
    if (pRound == 5) {
        winGame()
} else if (cRound == 5) {
        loseGame()
} else {};
}

btnPaper.addEventListener('click', paperRound);
btnRock.addEventListener('click', rockRound);
btnScissors.addEventListener('click', scissorsRound);