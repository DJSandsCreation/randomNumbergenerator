// Collect input from a user
alert('Hello, thanks for trying the random number generator. When you are ready to begin, hit ok');
const randomChoiceHigh = prompt('Hi, Please give me the highest number?');
const randomChoiceLow = prompt('Hi, Please give me the lowest number?');

// Convert the input to a number
const randomNumberHigh = parseInt(randomChoiceHigh);
const randomNumberLow = parseInt(randomChoiceLow);

// if (randomNumber) {

// Use Math.random() and the user's number to generate a random number
const returnRandom = Math.floor(Math.random() * (randomChoiceHigh - randomChoiceLow)) + 1;

// Create a message displaying the random number
const main = document.querySelector('main');
main.innerHTML = `You chose ${randomChoiceHigh} and ${randomChoiceLow}, the algorithim ran and this is your randomly generated number ${returnRandom}. <h1 class="mt-5 text-white">Thanks for using my JavaScript Random Number Generator</h1>`;