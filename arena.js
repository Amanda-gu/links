let channelSlug = 'how-do-we-see-the-world' // The “slug” is just the end of the URL.
let myUsername = 'amanda-guo' // For linking to your profile.



// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (channelData) => {
	// Target some elements in your HTML:
	let channelTitle = document.querySelector('#channel-title')
	let channelDescription = document.querySelector('#channel-description')
	let channelLink = document.querySelector('#channel-link')
	let channelUsers = document.querySelector('#channel-users')

	// Then set their content/attributes to our data (only if elements exist):
	if (channelTitle) channelTitle.innerHTML = channelData.title
	if (channelDescription) channelDescription.innerHTML = channelData.description?.html || ''
	if (channelLink) channelLink.href = `https://www.are.na/channel/${channelSlug}`
	if (channelUsers) channelUsers.innerHTML = channelData.owner.name // Clear any existing content.

	console.log()
}



// Then our big function for specific-block-type rendering:
let renderBlock = (blockData) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.querySelector('#channel-blocks')

	// A little helper for the block description, which we’ll use in multiple places:
	// The `?.` is called “optional chaining” and it’s a way to avoid errors if the description is missing. It says, “if there’s a description, use its HTML; if not, just use an empty string.”
	let blockDescription = blockData.description?.html || ''

	// Links!
	if (blockData.type == 'Link') {
		// Declares a “template literal” of the dynamic HTML we want.
		let linkItem =
			`
			<li>
				<a href="${ blockData.source.url }">
					
						<picture>
							<source media="(width < 500px)" srcset="${ blockData.image.small.src_2x }">
							<source media="(width < 1000px)" srcset="${ blockData.image.medium.src_2x }">
							<img alt="${blockData.image.alt_text}" src="${ blockData.image.large.src_2x }">
						</picture>
					
			
					<h3>
					${blockData.title.plain} 
					<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
							<g clip-path="url(#clip0_145_4524)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M61.9253 10.3263L57.9068 14.3449L53.8883 10.3263L49.8698 14.3449L45.8513 18.3634L41.8328 14.3449L37.8143 18.3634L33.7958 22.3819L29.7773 18.3634L25.7587 22.3819L21.7402 26.4004L25.7587 30.4189L29.7773 34.4374L33.7958 30.4189L37.8143 26.4004L41.8328 22.3819L45.8513 26.4004L49.8698 22.3819L53.8883 26.4004L57.9068 30.4189L53.8883 34.4374L49.8698 38.4559L53.8883 42.4744L49.8698 46.4929L45.8513 50.5115L49.8698 54.53L53.8883 58.5485L57.9068 54.53L61.9253 50.5115L57.9068 46.4929L61.9253 42.4744L65.9439 38.4559L61.9253 34.4374L65.9439 30.4189L69.9624 26.4004L65.9439 22.3819L69.9624 18.3634L65.9439 14.3449L61.9253 10.3263Z"/>
								<path d="M14.2119 58.0391L18.2304 54.0206L22.2489 58.0391L18.2304 62.0576L14.2119 58.0391ZM18.2304 54.0206L22.2489 50.0021L26.2674 54.0206L22.2489 58.0391L18.2304 54.0206ZM22.2489 50.0021L26.2674 45.9836L30.2859 50.0021L26.2674 54.0206L22.2489 50.0021ZM26.2674 45.9836L30.2859 41.9651L34.3044 45.9836L30.2859 50.0021L26.2674 45.9836ZM14.2119 66.0761L18.2304 62.0576L22.2489 66.0761L18.2304 70.0946L14.2119 66.0761ZM18.2304 62.0576L22.2489 58.0391L26.2674 62.0576L22.2489 66.0761L18.2304 62.0576ZM22.2489 58.0391L26.2674 54.0206L30.2859 58.0391L26.2674 62.0576L22.2489 58.0391ZM26.2674 54.0206L30.2859 50.0021L34.3044 54.0206L30.2859 58.0391L26.2674 54.0206ZM30.2859 50.0021L34.3044 45.9836L38.3229 50.0021L34.3044 54.0206L30.2859 50.0021Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 50.0021L34.3044 45.9836L38.3229 41.9651L42.3415 45.9836L38.3229 50.0021Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3044 45.9836L30.2859 41.9651L34.3044 37.9465L38.3229 41.9651L34.3044 45.9836Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 41.9651L34.3044 37.9465L38.3229 33.928L42.3415 37.9465L46.36 41.9651L42.3415 45.9836L38.3229 41.9651Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.3415 37.9465L38.3229 33.928L42.3415 29.9095L46.36 33.928L50.3785 37.9465L46.36 41.9651L42.3415 37.9465Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M46.36 33.928L42.3415 29.9095L46.36 25.891L50.3785 29.9095L54.397 33.928L50.3785 37.9465L46.36 33.928Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M50.3785 29.9095L46.36 25.891L50.3785 21.8725L54.397 25.891L58.4155 29.9095L54.397 33.928L50.3785 29.9095Z"/>
							</g>
						</svg>	
					</h3>
					<section> ${blockDescription}</section>
				</a>
			</li>
			`
		// And puts it into the page!
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)

		// More on template literals:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	}

	// Images!
	else if (blockData.type == 'Image') {
		// …up to you!

		// Declares a “template literal” of the dynamic HTML we want.
		let imageItem =
			`
			<li>

				<figure>
					<picture>
							<source media="(width < 500px)" srcset="${ blockData.image.small.src_2x }">
							<source media="(width < 1000px)" srcset="${ blockData.image.medium.src_2x }">
							<img alt="${blockData.image.alt_text}" src="${ blockData.image.large.src_2x }">
					</picture>
					<h3>
							${ blockData.title }		
					</h3>
					<section> ${blockDescription}</section>
				</figure>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', imageItem)

	}

	// Text!
	else if (blockData.type == 'Text') {
		// …up to you!

		let textItem =
			`
			<li>

			<div>

				<h2>
					${blockData.content.plain}
				</h2>

					${ blockData.title
						? `<h3>${ blockData.title }</h3>`
						: `<h3>Untitled</h3>`
					}
					
					<section> ${blockDescription}</section>
			</div>
					
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', textItem)

	}

	// Uploaded (not linked) media…
	else if (blockData.type == 'Attachment') {
		let contentType = blockData.attachment.content_type // Save us some repetition.
		
		// Uploaded videos!
		if (contentType.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li>

					<figure>
						<video controls src="${ blockData.attachment.url }"></video>
						<h3>
							${ blockData.title }		
						</h3>
						<section> ${blockDescription}</section>
					</figure>
				</li>
				`

			channelBlocks.insertAdjacentHTML('beforeend', videoItem)

		
		}

		// Uploaded PDFs!
		else if (contentType.includes('pdf')) {
			// …up to you!
			let pdfItem =
				`
				<li>
					<figure>
						<iframe src="${ blockData.attachment.url }"></iframe>
						<h3>
							${ blockData.title }		
						</h3>
						<section> ${blockDescription}</section>
					</figure>
				</li>
				`

			channelBlocks.insertAdjacentHTML('beforeend', pdfItem)
		}

		// Uploaded audio!
		else if (contentType.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			let audioItem =
				`
				<li>
					<figure>
						<audio controls src="${blockData.attachment.url}"></audio>
						<h3>
							${ blockData.title }		
						</h3>
						<section> ${blockDescription}</section>
					</figure>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem)

			// More on`audio`:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		}
	}

	// Linked (embedded) media…
	else if (blockData.type == 'Embed') {
		let embedType = blockData.embed.type

		// Linked video!
		if (embedType.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li>
					<a href="${ blockData.source.url }">
						${ blockData.embed.html}
						<h3>
							${blockData.title.plain}	
							<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
								<g clip-path="url(#clip0_145_4524)">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M61.9253 10.3263L57.9068 14.3449L53.8883 10.3263L49.8698 14.3449L45.8513 18.3634L41.8328 14.3449L37.8143 18.3634L33.7958 22.3819L29.7773 18.3634L25.7587 22.3819L21.7402 26.4004L25.7587 30.4189L29.7773 34.4374L33.7958 30.4189L37.8143 26.4004L41.8328 22.3819L45.8513 26.4004L49.8698 22.3819L53.8883 26.4004L57.9068 30.4189L53.8883 34.4374L49.8698 38.4559L53.8883 42.4744L49.8698 46.4929L45.8513 50.5115L49.8698 54.53L53.8883 58.5485L57.9068 54.53L61.9253 50.5115L57.9068 46.4929L61.9253 42.4744L65.9439 38.4559L61.9253 34.4374L65.9439 30.4189L69.9624 26.4004L65.9439 22.3819L69.9624 18.3634L65.9439 14.3449L61.9253 10.3263Z"/>
									<path d="M14.2119 58.0391L18.2304 54.0206L22.2489 58.0391L18.2304 62.0576L14.2119 58.0391ZM18.2304 54.0206L22.2489 50.0021L26.2674 54.0206L22.2489 58.0391L18.2304 54.0206ZM22.2489 50.0021L26.2674 45.9836L30.2859 50.0021L26.2674 54.0206L22.2489 50.0021ZM26.2674 45.9836L30.2859 41.9651L34.3044 45.9836L30.2859 50.0021L26.2674 45.9836ZM14.2119 66.0761L18.2304 62.0576L22.2489 66.0761L18.2304 70.0946L14.2119 66.0761ZM18.2304 62.0576L22.2489 58.0391L26.2674 62.0576L22.2489 66.0761L18.2304 62.0576ZM22.2489 58.0391L26.2674 54.0206L30.2859 58.0391L26.2674 62.0576L22.2489 58.0391ZM26.2674 54.0206L30.2859 50.0021L34.3044 54.0206L30.2859 58.0391L26.2674 54.0206ZM30.2859 50.0021L34.3044 45.9836L38.3229 50.0021L34.3044 54.0206L30.2859 50.0021Z"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 50.0021L34.3044 45.9836L38.3229 41.9651L42.3415 45.9836L38.3229 50.0021Z"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3044 45.9836L30.2859 41.9651L34.3044 37.9465L38.3229 41.9651L34.3044 45.9836Z"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 41.9651L34.3044 37.9465L38.3229 33.928L42.3415 37.9465L46.36 41.9651L42.3415 45.9836L38.3229 41.9651Z"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M42.3415 37.9465L38.3229 33.928L42.3415 29.9095L46.36 33.928L50.3785 37.9465L46.36 41.9651L42.3415 37.9465Z"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M46.36 33.928L42.3415 29.9095L46.36 25.891L50.3785 29.9095L54.397 33.928L50.3785 37.9465L46.36 33.928Z" fill="#1E1E1E"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M50.3785 29.9095L46.36 25.891L50.3785 21.8725L54.397 25.891L58.4155 29.9095L54.397 33.928L50.3785 29.9095Z"/>
								</g>
							</svg>
						</h3>
						<section> ${blockDescription}
						</section>
					</a>	
				</li>
				`

			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)

			// More on `iframe`:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}

		// Linked audio!
		else if (embedType.includes('rich')) {
			// …up to you!
			let linkedAudioItem =
				`
				<li>
					<a href="${ blockData.source.url }">
						${ blockData.embed.html}
						<h3>
							${blockData.title }
							<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
							<g clip-path="url(#clip0_145_4524)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M61.9253 10.3263L57.9068 14.3449L53.8883 10.3263L49.8698 14.3449L45.8513 18.3634L41.8328 14.3449L37.8143 18.3634L33.7958 22.3819L29.7773 18.3634L25.7587 22.3819L21.7402 26.4004L25.7587 30.4189L29.7773 34.4374L33.7958 30.4189L37.8143 26.4004L41.8328 22.3819L45.8513 26.4004L49.8698 22.3819L53.8883 26.4004L57.9068 30.4189L53.8883 34.4374L49.8698 38.4559L53.8883 42.4744L49.8698 46.4929L45.8513 50.5115L49.8698 54.53L53.8883 58.5485L57.9068 54.53L61.9253 50.5115L57.9068 46.4929L61.9253 42.4744L65.9439 38.4559L61.9253 34.4374L65.9439 30.4189L69.9624 26.4004L65.9439 22.3819L69.9624 18.3634L65.9439 14.3449L61.9253 10.3263Z"/>
								<path d="M14.2119 58.0391L18.2304 54.0206L22.2489 58.0391L18.2304 62.0576L14.2119 58.0391ZM18.2304 54.0206L22.2489 50.0021L26.2674 54.0206L22.2489 58.0391L18.2304 54.0206ZM22.2489 50.0021L26.2674 45.9836L30.2859 50.0021L26.2674 54.0206L22.2489 50.0021ZM26.2674 45.9836L30.2859 41.9651L34.3044 45.9836L30.2859 50.0021L26.2674 45.9836ZM14.2119 66.0761L18.2304 62.0576L22.2489 66.0761L18.2304 70.0946L14.2119 66.0761ZM18.2304 62.0576L22.2489 58.0391L26.2674 62.0576L22.2489 66.0761L18.2304 62.0576ZM22.2489 58.0391L26.2674 54.0206L30.2859 58.0391L26.2674 62.0576L22.2489 58.0391ZM26.2674 54.0206L30.2859 50.0021L34.3044 54.0206L30.2859 58.0391L26.2674 54.0206ZM30.2859 50.0021L34.3044 45.9836L38.3229 50.0021L34.3044 54.0206L30.2859 50.0021Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 50.0021L34.3044 45.9836L38.3229 41.9651L42.3415 45.9836L38.3229 50.0021Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3044 45.9836L30.2859 41.9651L34.3044 37.9465L38.3229 41.9651L34.3044 45.9836Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3229 41.9651L34.3044 37.9465L38.3229 33.928L42.3415 37.9465L46.36 41.9651L42.3415 45.9836L38.3229 41.9651Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.3415 37.9465L38.3229 33.928L42.3415 29.9095L46.36 33.928L50.3785 37.9465L46.36 41.9651L42.3415 37.9465Z"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M46.36 33.928L42.3415 29.9095L46.36 25.891L50.3785 29.9095L54.397 33.928L50.3785 37.9465L46.36 33.928Z" fill="#1E1E1E"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M50.3785 29.9095L46.36 25.891L50.3785 21.8725L54.397 25.891L58.4155 29.9095L54.397 33.928L50.3785 29.9095Z"/>
							</g>
						</svg>	
						</h3>
						<section> ${blockDescription}</section>
					</a>
				</li>
				`

			channelBlocks.insertAdjacentHTML('beforeend', linkedAudioItem)
			
		}
	}
}


// Finally, a helper function to fetch data from the API, then run a callback function with it:
let fetchJson = (url, callback) => {
	fetch(url, { cache: 'no-store' })
		.then((response) => response.json())
		.then((json) => callback(json))
}

// More on `fetch`:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch



// Now that we have said all the things we *can* do, go get the channel data:
fetchJson(`https://api.are.na/v3/channels/${channelSlug}`, (json) => {
	console.log(json) // Always good to check your response!

	placeChannelInfo(json) // Pass all the data to the first function, above.
})

// Get your info to put with the owner's:
fetchJson(`https://api.are.na/v3/users/${myUsername}/`, (json) => {
	console.log(json) // See what we get back.
})

// And the data for the blocks:
fetchJson(`https://api.are.na/v3/channels/${channelSlug}/contents?per=100&sort=position_desc`, (json) => {
	console.log(json) // See what we get back.

	// Loop through the nested `.data` array (list).
	json.data.forEach((blockData) => {
		// console.log(blockData) // The data for a single block.

		renderBlock(blockData) // Pass the single block’s data to the render function.
	})
	



//LLM told me to delay the function and put it in the last fetchJson so that it runs after the blocks are rendered. I also added some error handling and logging to make sure it works.

	let container = document.querySelector('#channel-blocks')		
		if (!container) {
			console.error('Container #channel-blocks not found')
			return
		}
			
		// Get the NodeList and convert it to an array so we can use array methods on it.
	let myCards = Array.from(container.querySelectorAll('li'))	
		console.log('Found cards:', myCards.length)

//random hover shuffle
	myCards.forEach(card => {
			card.addEventListener('scroll', () => { 

				container.classList.add('shuffling') // Pause the animation when the mouse leaves the card

				
				// Get fresh list of cards (in case order changed)
				let currentCards = Array.from(container.querySelectorAll('li'))
				let hoveredCard = myCards.currentTarget
				let otherCards = currentCards.filter(card => card !== hoveredCard)
				
				otherCards.sort(() => Math.random() - 0.5)

				// Update DOM need this so that it shows on page!
				otherCards.forEach(card => container.appendChild(card))

				//remove the class after the animation duration so that it can be added again on the next hover
				setTimeout(() => {
					container.classList.remove('shuffling')
				}, 1200)


				console.log('Mouse entered! Shuffling...')

			})
		})
	console.log('Shuffled!', myCards)
		
		
	
//this is for mobile highlight on scroll using loop logic
	let highlightClass = 'highlight' // Set up variables again.
	let highlightBlocks = container.querySelectorAll('li') // Gets all of them.

	// Loop through the list, doing this `forEach` one.
	highlightBlocks.forEach((block) => {
		let sectionObserver = new IntersectionObserver(([entry])=> {
			// When it is intersecting, apply the class; otherwise, remove it.
			if (entry.isIntersecting) {
				block.classList.add(highlightClass)
			} else {
				block.classList.remove(highlightClass)
			}
		}, {
			
			rootMargin: '-40% 0% -20% 0%', // CSS-ish: top/right/bottom/left.
		})

		sectionObserver.observe(block) // Watch each one!
	})


})


