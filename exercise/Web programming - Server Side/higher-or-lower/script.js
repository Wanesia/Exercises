/* ▪ Using if else and loops, create a javascript application that will
1. Randomly select a number between 1 and 100.
2. Ask the user for a quess (between 1 and 100)
3. Let the user know if the quess is higher or lower than the randomly selected
number, and ask for a new quess, if the quess was not correct.
4. Let the user know that they guessed correctly and how many guesses they used,
if the guess correctly.
*/

const max = 101
const min = 1
let guesses = 0;
let randomNumber = Math.floor(Math.random() * (max-min)+min);

document.getElementById("submitBtn").addEventListener("click", function(){
    console.log(randomNumber);
    const numberInput = document.getElementById("numberInput").value;
    guesses++;
    if (numberInput < 1 || numberInput > 100) {
        alert("Please enter a number between 1 and 100.");
        event.preventDefault();
        return;
    }
    if (numberInput == randomNumber) {
        alert(`Congratulations! You have guessed the number after ${guesses} guesses`)
        guesses=0;
        randomNumber=Math.floor(Math.random() * (max-min)+min);
        console.log(randomNumber);

    }
    else if (numberInput > randomNumber){
        alert("Your number is too high");
    }
    else{
        alert("Your number is too low");
    }
});

