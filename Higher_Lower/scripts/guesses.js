let num = Math.floor(Math.random() * max_num) + 1;

console.log(num);
var guesses = [];

function do_guess(){
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
     
    if (isNaN(guess)){
        message.innerHTML = "That is not a number!";
    }
    else if(guess < 1 || guess > max_num){
        message.innerHTML = "That number is not in range, try again.";
    }
    else if(guesses.includes(guess)){
        message.innerHTML = "You have already guessed that number, try again.";
    }
    else if(guess > 0 && guess < num){
        message.innerHTML = "That number is too low, try again.";
        guesses.push(guess);
    }
    else if(guess> num && guess <= max_num){
        message.innerHTML = "That number is too high, try again.";
        guesses.push(guess);
    }
    else{
        guesses.push(guess);
        if(guesses.length > 1){
            message.innerHTML = "You got it! It took you " + (guesses.length) + " guesses and your guesses were " + guesses;
        }
        else{
            message.innerHTML = "You got it! It took you " + (guesses.length) + " guess and your guess was " + guesses;
        }
    }

}