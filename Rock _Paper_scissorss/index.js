let computerMove ="";

const score = {
    Win: 0,
    Tie: 0,
    Loss: 0
}
const brain = () => {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        computerMove = "Rock";
    } else if (randomNumber < 2/3) {
        computerMove = "paper";
    } else {
        computerMove = "Scissors";
    }
}

function moveRock() {
    brain();
    if(computerMove === "Rock") {
        console.log("Tie");
        document.getElementById("result").innerHTML = "You Tie";
   
    } else if (computerMove === "paper") {
        console.log("You lose");
        document.getElementById("result").innerHTML = "You Lose";

    } else if (computerMove === "Scissors") {
        console.log("You Won");
        document.getElementById("result").innerHTML = "You Won";
    }
    document.getElementById("computerMove").innerHTML = `Computer Picked: ${computerMove}`;
    p();
}
function movePaper() {
    brain();
    if(computerMove === "Rock") {
        console.log("You Won");
        document.getElementById("result").innerHTML = "You Won";
   
    } else if (computerMove === "paper") {
        console.log("Tie");
        document.getElementById("result").innerHTML = "You Tie";

    } else if (computerMove === "Scissors") {
        console.log("You lose");
        document.getElementById("result").innerHTML = "You Lose";
    }
    document.getElementById("computerMove").innerHTML = `Computer Picked: ${computerMove}`;
    p();
}
function moveScissors() {
    brain();
    if(computerMove === "Rock") {
        console.log("You lose");
        document.getElementById("result").innerHTML = "You Lose";
    } else if (computerMove === "paper") {
        console.log("You Won");
        document.getElementById("result").innerHTML = "You Won";

    } else if (computerMove === "Scissors") {
        console.log("Tie");
        document.getElementById("result").innerHTML = "You Tie";
    }
    document.getElementById("computerMove").innerHTML = `Computer Picked: ${computerMove}`;
    p();
}
function p() {
    const result = document.getElementById("result").innerHTML;

    if(result === "You Won") {
        score.Win+= 1;
        document.getElementById("Won").innerHTML= `Win: ${score.Win}`;

    } else if (result === "You Tie") {
        score.Tie+= 1;
        document.getElementById("Tie").innerHTML= `Tie: ${score.Tie}`;

    } else if (result === "You Lose") {
        score.Loss+= 1;
        document.getElementById("Loss").innerHTML= `Loss: ${score.Loss}`;

    }
    
}
function zero() {
    score.Win = 0; score.Tie = 0; score.Loss = 0;
    document.getElementById("Won").innerHTML= "Win: "+score.Win;
    document.getElementById("Tie").innerHTML= "Tie: "+score.Tie;
    document.getElementById("Loss").innerHTML= "Loss: "+score.Loss;
}