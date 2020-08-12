let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === 'r') return 'Rock' 
    if (letter === 'p') return 'Paper' 
    if (letter === 's') return 'Scissor' 
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}! Win!` //es6
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convert(userChoice) + " loses to " + convert(computerChoice) + "! Lose!"
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow");}, 500);
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = convert(userChoice) + " draws " + convert(computerChoice) + "! Draw!"
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow");}, 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();