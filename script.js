// Set up our variables.
let listClass = 'listview-channel'
let showChannelInfo = 'show-channel-info'

let channelBlocks = document.querySelector('#channel-blocks') // This can use any CSS selector.
let channelInfo = document.querySelector('#channel') // This can use any CSS selector.
let channelDialog = document.querySelector('#channel-dialog') // This can use any CSS selector.

let listButton = document.querySelector('#list-view-button') // But use `id` for a singular thing.
let fieldButton = document.querySelector('#field-view-button') // But use `id` for a singular thing.
let aboutButton = document.querySelector('#about') // But use `id` for a singular thing.
let closeButton = document.querySelector('#close') // But use `id` for a singular thing.


listButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(listClass) // Toggle the class!
	listButton.classList.add('button-clicked')
	fieldButton.classList.remove('button-clicked')
	fieldButton.classList.add('button-unclicked')
})

fieldButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.remove(listClass)
	fieldButton.classList.add('button-unclicked')
	listButton.classList.remove('button-clicked')
	 // Toggle the class!
})


// aboutButton.addEventListener('click', () => { // “Listen” for clicks.
	
// 	channelInfo.classList.toggle(showChannelInfo)
// 	 // Toggle the class!
// })


aboutButton.addEventListener('click', () => { // “Listen” for clicks.
	channelDialog.showModal() // This opens it up.
})

closeButton.addEventListener('click', () => {
	channelDialog.close() // And this closes it!
})

// Listen to *all* clicks, now including the `event` parameter…
document.addEventListener('click', (event) => {
	// Only clicks on the page itself behind the `dialog`.
	if (event.target == document.documentElement) {
		channelDialog.close() // Close it too then.
	}
})












//from michael
//will do later
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