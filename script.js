function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomIndex = Math.floor(Math.random() * choices.length);
	let computerChoice = choices[randomIndex];
	return computerChoice;
}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (playerSelection === computerSelection) {
			return "tie";
	} else if (
			(playerSelection === "rock" && computerSelection === "scissors") ||
			(playerSelection === "paper" && computerSelection === "rock") ||
			(playerSelection === "scissors" && computerSelection === "paper")
	) {
			return "win! " + playerSelection + " beats " + computerSelection;
	} else {
			return "lose! " + computerSelection + " beats " + playerSelection;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
			const playerSelection =  prompt("make your choice");
			const computerSelection = getComputerChoice();
			const result = playRound(playerSelection, computerSelection);
			console.log(result);

			if (result.includes("win")) {
					playerScore++;
			} else if (result.includes("lose")) {
					computerScore++;
			}
	}

	if (playerScore > computerScore) {
			console.log("you win");
	} else if(playerScore < computerScore) {
			console.log("you lose");
	} else {
			console.log("draw");
	}
}
game();