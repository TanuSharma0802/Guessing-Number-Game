let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);


function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    console.log(guessNumber);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Sorry...Too High! Please Try Again...!!!";
        gameResult.style.backgroundColor = "#1e217c";

    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Sorry...Too Low! Please Try Again...!!!";
        gameResult.style.backgroundColor = "#1e217c";

    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it Right..!!!";
        gameResult.style.backgroundColor = "green";

    } else {
        gameResult.textContent = "Please Provide a Valid Input..!!";
        gameResult.style.backgroundColor = "red";
    }
}