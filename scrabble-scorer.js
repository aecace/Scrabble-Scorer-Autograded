// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   console.log(oldScrabbleScorer(word));
   return word;
};

// Define a function that takes a word as a parameter and returns a numerical score.
// Each letter within the word is worth 1 point.
let simpleScorer = function(word) {
   let i = 0;

   while (i < word.length) {
      i++;
   }
   
   // console.log(`The word ${word} is worth ${i} points.`);
   return i;
};
// console.log(simpleScorer("Oranges"));

// Define a function that takes a word as a parameter and returns a score.
// Each vowel within the word is worth 3 points.
// Each consonant is worth 1 point.
let vowelBonusScorer = function(word) {
   let score = 0;
   let upperCaseWord = word.toUpperCase();

   for (let i = 0; i < word.length; i++) {
      if (upperCaseWord[i].includes('A' || 'E' || 'I' || 'O' || 'U')) {
         score += 3;
      } else {
         score += 1;
      }
   }
   
   // console.log(`The word ${word} is worth ${score} points.`);
   return score;
};
// console.log(vowelBonusScorer("Bananas"));


// STOPPED HERE; CLASS ON OBJECTS
let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
