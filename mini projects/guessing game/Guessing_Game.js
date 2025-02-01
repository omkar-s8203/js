console.log("-------Guessing Game-------");
console.log("Type 'start' to begin the game or 'quit' to exit.");

let cont = prompt("Please enter 'start' to start the game or 'quit' to quit the game:");
let score = 0;

if (cont.toLowerCase() === "start") {
    const maxNum = parseInt(prompt("Enter the maximum number for the game (e.g., 10):"), 10);
    if (isNaN(maxNum) || maxNum < 1) {
        console.log("Invalid input. Please refresh and start the game again with a valid number.");
    } else {
        const randomNumber = Math.floor(Math.random() * maxNum) + 1;
        console.log(`A random number between 1 and ${maxNum} has been generated. Start guessing!`);

        let guessedCorrectly = false;

        while (!guessedCorrectly) {
            const userNum = parseInt(prompt(`Enter your guess (1 to ${maxNum}):`), 10);

            if (isNaN(userNum) || userNum < 1 || userNum > maxNum) {
                console.log(`Please enter a valid number between 1 and ${maxNum}.`);
                continue;
            }

            score++;

            if (userNum === randomNumber) {
                guessedCorrectly = true;
                console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${score} attempts.`);
            } else if (userNum < randomNumber) {
                console.log("Too low! Try again.");
            } else {
                console.log("Too high! Try again.");
            }
        }
    }
} else if (cont.toLowerCase() === "quit") {
    console.log("You chose to quit the game. Goodbye!");
} else {
    console.log("Invalid input. Please refresh and enter 'start' or 'quit'.");
}
