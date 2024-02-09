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


// Not used in final assignment
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


// ANON FUNCTIONS
let simpleScorer = function(word) {
   let i = 0;

   while (i < word.length) {
      i++;
   }
   
   // console.log(`The word ${word} is worth ${i} points.`);
   return i;
};

let vowelBonusScorer = function(word) {
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

let scrabbleScorer = function(word, newPointStructure) {
   let letterPoints = 0;
   console.log(newPointStructure);
 
	for (let i = 0; i < word.length; i++) {
      console.log(word[i]); 
	   for (const letter in newPointStructure) {
         // console.log(word[i]);
         // console.log(letter);
         if (word[i] === letter) {
            letterPoints += newPointStructure[letter];
         }
	  }
	}
	return letterPoints;
 }

const scoringAlgorithms = [
   {name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer},
   {name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer},
   {name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer}];

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

// Task 4
function transform(oldPointStructure) {
   let newObject = {};

   for (const key in oldPointStructure) {
      for (let i=0; i < oldPointStructure[key].length; i++) {
         let letter = String(oldPointStructure[key][i]);
         letter = letter.toLowerCase(letter);
         newObject[letter] = Number(key);
      }
   }
   return newObject;
};
// console.log("Letters with score '4':", oldPointStructure['4']);
// console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

// let letters = oldPointStructure['8'];
// console.log("Letters with score '8':", letters);
// console.log("2nd letter within the key '8' array:", letters[1]);

let newPointStructure = transform(oldPointStructure);
// console.log(newPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scoringAlg = scorerPrompt(word);
   console.log(`Score for '${word}': ${scoringAlg.scorerFunction(word)}`);
   transform(oldPointStructure);
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
