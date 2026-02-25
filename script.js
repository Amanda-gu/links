// Set up our variables.
// let seekClass = 'seekview-channel'
let indexClass = 'indexview-channel'
let showChannelInfo = 'show-channel-info'

let channelBlocks = document.querySelector('#channel-blocks') // This can use any CSS selector.
let channelInfo = document.querySelector('#channel') // This can use any CSS selector.
let channelDialog = document.querySelector('#channel-dialog') // This can use any CSS selector.

// let seekButton = document.querySelector('#seek-view-button')
let fieldButton = document.querySelector('#field-view-button')
let indexButton = document.querySelector('#index-view-button')
let aboutButton = document.querySelector('#about') 
let closeButton = document.querySelector('#close') 
let randomButton = document.querySelector('#randomize')


// seekButton.addEventListener('click', () => { 
// 	channelBlocks.classList.remove(indexClass) //switch to field view
// 	// channelBlocks.classList.add(seekClass)


// 	fieldButton.classList.remove('button-clicked')
// 	fieldButton.classList.add('button-remove')
// 	indexButton.classList.remove('button-clicked') 
// 	// seekButton.classList.add('button-clicked')
// })

fieldButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.remove(indexClass)
	// channelBlocks.classList.remove(seekClass) 

	fieldButton.classList.add('button-clicked') 
	indexButton.classList.remove('button-clicked') 
	// seekButton.classList.remove('button-clicked') 
})



indexButton.addEventListener('click', () => { // “Listen” for clicks.
	channelBlocks.classList.add(indexClass)
	// channelBlocks.classList.remove(seekClass) 

	fieldButton.classList.add('button-remove') //active state of the button. the site opens with field being the defualt view hence the ,unclick'
	indexButton.classList.add('button-clicked')
	// seekButton.classList.remove('button-clicked')

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


// Get the NodeList and convert it to an array so we can use array methods on it.

randomButton.addEventListener('click', () => {
	
	let myCards = Array.from(channelBlocks.querySelectorAll('li')) 

		myCards.sort(() => Math.random() - 0.5) // Shuffle the array randomly.
		myCards.forEach(card =>  channelBlocks.appendChild(card)) // Update the DOM need this so that it shows on page!
		
		console.log('Shuffled!', myCards)
}) 



//i want to create a trace for the cursor.
//using mousemove eventlistener. https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
window.addEventListener('mousemove', (e) => {
  // 1. Create the element that the trace graphic is goign to be
  	let particle = document.createElement('div');
  //class in css
	particle.className = 'trail-particle';
  
  // 2. Position it at the mouse coordinates
  // target the mouse position. ${e.screenX}  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
  	particle.style.left = `${e.pageX}`;
  	particle.style.top = `${e.pageY}`;
  
  	document.body.appendChild(particle);
  
  // remove the trace after set time
  	setTimeout(() => {
		particle.remove();
	}, 3000);

});