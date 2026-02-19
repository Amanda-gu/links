// Set up our variables.
let listClass = 'listview-channel'
let playClass = 'playview-channel'
let indexClass = 'indexview-channel'
let showChannelInfo = 'show-channel-info'

let channelBlocks = document.querySelector('#channel-blocks') // This can use any CSS selector.
let channelInfo = document.querySelector('#channel') // This can use any CSS selector.
let channelDialog = document.querySelector('#channel-dialog') // This can use any CSS selector.

let listButton = document.querySelector('#list-view-button') // But use `id` for a singular thing.
let fieldButton = document.querySelector('#field-view-button')
let playButton = document.querySelector('#play-view-button')
let indexButton = document.querySelector('#index-view-button')
let aboutButton = document.querySelector('#about') 
let closeButton = document.querySelector('#close') 
let randomButton = document.querySelector('#randomize')


listButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(listClass) // add list view class
	channelBlocks.classList.remove(playClass) //switch to field view


	listButton.classList.add('button-clicked') //active state of the button
	fieldButton.classList.remove('button-clicked')
	fieldButton.classList.add('button-remove')//defult state of the button
	playButton.classList.remove('button-clicked')
})

fieldButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.remove(listClass) //switch to field view
	channelBlocks.classList.remove(playClass)


	fieldButton.classList.add('button-remove') //active state of the button. the site opens with field being the defualt view hence the ,unclick'
	fieldButton.classList.add('button-clicked') 
	listButton.classList.remove('button-clicked') //defult state of the button
	playButton.classList.remove('button-clicked')
})


playButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(playClass) //switch to field view
	channelBlocks.classList.remove(listClass) 

	fieldButton.classList.add('button-remove') //active state of the button. the site opens with field being the defualt view hence the ,unclick'
	listButton.classList.remove('button-clicked') //defult state of the button
	playButton.classList.add('button-clicked')

})


indexButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(indexyClass) //switch to field view
	channelBlocks.classList.remove(listClass) 
	channelBlocks.classList.remove(playClass) 

	fieldButton.classList.add('button-remove') //active state of the button. the site opens with field being the defualt view hence the ,unclick'
	listButton.classList.remove('button-clicked') //defult state of the button
	playButton.classList.remove('button-clicked')
	indexButton.classList.add('button-clicked')

})



//for mobile about button


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



randomButton.addEventListener('click', () => {
		

		let myCards = Array.from(channelBlocks.querySelectorAll('li')) 

		myCards.sort(() => Math.random() - 0.5) // Shuffle the array randomly.
		myCards.forEach(card =>  channelBlocks.appendChild(card)) // Update the DOM need this so that it shows on page!
		
		console.log('Shuffled!', myCards)
		}) 
