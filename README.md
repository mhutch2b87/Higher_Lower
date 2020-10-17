# Higher_Lower
Introduction
For your final assessment, please make the following enhancements to the Higher-Lower game from the JavaScript exercises. You may start with the solution attached below or utilize your own solution to the practice exercise.

1. Prompt for Max Number
Instead of locking the game into a number between 1 and 20, use the prompt() method to ask the user what the maximum number should be. The prompt should be in a loop with validation as demonstrated previously in the course making sure that the inputted value is a positive number. If the user inputs a decimal, simply round it.

When a valid number is inputted, change the content of the instructions to specify guesses between 1 and N.

2. Validate the Guess
When the user presses the guess button, validate the input:

If the guess is not a number, display a message: "That is not a number!"
If the guess is out of range (1 to N), display a message: "That number is not in range, try again."


3. Bonus: Track the Guesses
Using an array, keep track of each guess by the user. When the user wins the game by guessing correctly, add the number of guesses and the list of guesses to the victory message. For example:

"You got it! It took you 5 tries and your guesses were 3, 14, 7, 9, 5"

Do not count invalid guesses (not numbers or out of range)

4. Bonus: Prevent Duplicate Guesses
Since you are tracking the guesses, add validation to check if a number has already been guessed. If it has, display a message and do not count it as a guess.
