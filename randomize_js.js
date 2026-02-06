// Lil’ helper function to randomly sort a list (array):
let shuffleArray = (array) => {
	array.sort(() => Math.random() - 0.5)
}

// More on `.sort()` and `Math.random`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let someArray = [1, 2, 3, 4, 5] // Think of these as your blocks (`json.data`)…

shuffleArray(someArray) // Shuffle the list!

console.log(someArray) // Ex: [2, 1, 4, 5, 3]