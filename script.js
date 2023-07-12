//Prompt the user to get their answer 
//Transform the user answer to something usable
//Create a function that randomly returns rock paper or scissors for the pc answer
//Create a function that takes the answer of the user and the pc
//This function will return an appropriate answer to the inputs received
//The answer will be displayed to the user in an alert

//1. Prompt the user to get their answer //2. Transform the user answer to something usable
const choices = document.getElementsByClassName("choice");
const chatbox = document.getElementById("chatbox");
const userPoints = document.getElementById("userPoints");
const cpuPoints = document.getElementById("cpuPoints");
const result = document.querySelector(".score p");

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", playRound);
}


//function getUserAns(e){
//    return e.srcElement.innerText.toLowerCase();
//}

//3. Create a function that randomly returns rock paper or scissors for the pc answer
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if(x == 0){
        return "rock";
    } else if (x == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

//Create a function that takes the answer of the user and the pc
function playRound(e) {
    userAns = e.srcElement.innerText.toLowerCase();;
    cpuAns = getComputerChoice();



    if(userAns == cpuAns){
        chatbox.innerText = "It's a Tie!"
    }
    if(userAns == "rock" && cpuAns == "paper"){
        chatbox.innerText = "You Lose! Paper beats Rock"
        cpuUp()
    }
    if(userAns == "rock" && cpuAns == "scissors"){
        chatbox.innerText = "You Win! Rock beats Scissors"
        userUp()
    }
    if(userAns == "paper" && cpuAns == "scissors"){
        chatbox.innerText = "You Lose! Scissors beat Paper"
        cpuUp()
    }
    if(userAns == "paper" && cpuAns == "rock"){
        chatbox.innerText = "You Win! Paper beats Rock"
        userUp()
    }
    if(userAns == "scissors" && cpuAns == "paper"){
        chatbox.innerText = "You Win! Scissors beat Paper"
        userUp()
    }
    if(userAns == "scissors" && cpuAns == "rock"){
        chatbox.innerText = "You Lose! Rock beats Scissors"
        cpuUp()
    }
    checkWinner()
}

function userUp() {
    n = Number(userPoints.innerText);
    userPoints.innerText = ++n
}

function cpuUp() {
    n = Number(cpuPoints.innerText);
    cpuPoints.innerText = ++n
}

function checkWinner() {
    if (userPoints.textContent == 5){
        result.textContent = "You win this match!";
    } else if (cpuPoints.textContent == 5){
        result.textContent = "You lost, the cpu has won this match!";
    }

}