// Set up our variables.
let indexClass = 'indexview-channel'
let showChannelInfo = 'show-channel-info'

let channelBlocks = document.querySelector('#channel-blocks') // This can use any CSS selector.
let channelInfo = document.querySelector('#channel') 
let channelDialog = document.querySelector('#channel-dialog') 

let fieldButton = document.querySelector('#field-view-button')
let indexButton = document.querySelector('#index-view-button')
let aboutButton = document.querySelector('#about') 
let closeButton = document.querySelector('#close') 
let randomButton = document.querySelector('#randomize')


fieldButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.remove(indexClass)

	fieldButton.classList.add('button-clicked') 
	indexButton.classList.remove('button-clicked') 
})


indexButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(indexClass)
	fieldButton.classList.remove('button-clicked')
	fieldButton.classList.add('button-unclicked') 
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
	
	// Get the NodeList and convert it to an array so we can use array methods on it.
	let myCards = Array.from(channelBlocks.querySelectorAll('li')) 

		myCards.sort(() => Math.random() - 0.5) // Shuffle the array randomly.
		myCards.forEach(card =>  channelBlocks.appendChild(card)) // Update the DOM need this so that it shows on page!
		
		console.log('Shuffled!', myCards)
}) 


//i want to add a trail for the cursor. used google gemini here.

//mousemove event. 
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
window.addEventListener('mousemove', (e) => {
  // 1.Create a new div everytime it moves so there is a trail
  	let particle = document.createElement('div')
  //assign them class in css
	particle.className = 'trail-particle'

  // 2.Position it at the mouse coordinates

  // target the mouse position. ${e.screenX}  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
  //note: Use e.clientX/Y if you want viewport coordinates (no page scroll); e.pageX/Y includes scroll.
  	particle.style.left = `${e.pageX}px`
  	particle.style.top = `${e.pageY}px`
  //px as the units here since it gets coordinates from the user's device
  //add css left and top properties to the particle 
  //add the new shape to page
  	document.body.appendChild(particle)
});