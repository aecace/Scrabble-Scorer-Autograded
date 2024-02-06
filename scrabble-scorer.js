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
	//let letterPoints = "";
   let letterPoints = 0;

 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         letterPoints += Number(pointValue);
      }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   // console.log(oldScrabbleScorer(word));
   return word;
};

// Define a function that takes a word as a parameter and returns a numerical score.
// Each letter within the word is worth 1 point.
function simpleScrabbleScorer(word) {
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
function vowelBonusScrabbleScorer(word) {
   let score = 0;
   let upperCaseWord = word.toUpperCase();

   for (let i = 0; i < word.length; i++) {
      if (upperCaseWord[i].includes('A')) {
         score += 3;
      } else if (upperCaseWord[i].includes('E')) {
         score += 3;
      } else if (upperCaseWord[i].includes('I')) {
         score += 3;
      } else if (upperCaseWord[i].includes('O')) {
         score += 3;
      } else if (upperCaseWord[i].includes('U')) {
         score += 3;
      } else {
         score += 1;
      }
   }
   
   // console.log(`The word ${word} is worth ${score} points.`);
   return Number(score);
};
// console.log(vowelBonusScorer("Bananas"));


// OBJECTS
let simpleScorer = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScrabbleScorer
};

let vowelBonusScorer = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScrabbleScorer
};

let scrabbleScorer = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

// Prompts user for scoring algorithm
function scorerPrompt(word) {
   console.log(`Which scoring algorithm would you like to use?\n\n`);
   // `${scoringAlgorithms[0]}\n${scoringAlgorithms[1]}\n${scoringAlgorithms[2]}`
   let algorithm = input.question(`Enter 0, 1, or 2: `);
   if (algorithm === '0' || algorithm === '1' || algorithm === '2') {
      //console.log(scoringAlgorithms[Number(algorithm)]);
      return scoringAlgorithms[Number(algorithm)];
   } else {
      console.log(`Error! Enter 0, 1, or 2: `);
      scorerPrompt(word);
   }
};

function transform(oldPointStructure) {
   // a: 1,
   // e: 1,
   // i: 1,
   // o: 1,
   // u: 1,
   // l: 1,
   // n: 1,
   // r: 1,
   // s: 1,
   // t: 1,
   // d: 2,
   // g: 2,
   // b: 3,
   // c: 3,
   // m: 3,
   // p: 3,
   // f: 4,
   // h: 4,
   // v: 4,
   // w: 4,
   // y: 4,
   // k: 5,
   // j: 8,
   // x: 8,
   // q: 10,
   // z: 10
};

let newPointStructure //= transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scoringAlg = scorerPrompt(word);
   console.log(`Score for '${word}': ${scoringAlg.scorerFunction(word)}`);
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
