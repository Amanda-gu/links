let channelSlug = 'how-do-we-see-the-world' // The “slug” is just the end of the URL.
let myUsername = 'amanda-guo' // For linking to your profile.



// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (channelData) => {
	// Target some elements in your HTML:
	let channelTitle = document.querySelector('#channel-title')
	let channelDescription = document.querySelector('#channel-description')
	let channelCount = document.querySelector('#channel-count')
	let channelLink = document.querySelector('#channel-link')

	// Then set their content/attributes to our data (only if elements exist):
	if (channelTitle) channelTitle.innerHTML = channelData.title
	if (channelDescription) channelDescription.innerHTML = channelData.description?.html || ''
	if (channelCount) channelCount.innerHTML = channelData.counts.blocks
	if (channelLink) channelLink.href = `https://www.are.na/channel/${channelSlug}`
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
					<figure>
						<picture>
							<source media="(width < 500px)" srcset="${ blockData.image.small.src_2x }">
							<source media="(width < 1000px)" srcset="${ blockData.image.medium.src_2x }">
							<img alt="${blockData.image.alt_text}" src="${ blockData.image.large.src_2x }">
						</picture>
						
					</figure>						
				</a>
				<h3>
						${blockData.title }		
				</h3>
				${ blockDescription}
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
				<picture>
						<source media="(width < 500px)" srcset="${ blockData.image.small.src_2x }">
						<source media="(width < 1000px)" srcset="${ blockData.image.medium.src_2x }">
						<img alt="${blockData.image.alt_text}" src="${ blockData.image.large.src_2x }">
				</picture>
				<h3>
						${ blockData.title }		
				</h3>
				${ blockDescription}
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
				<h2>${blockData.content.plain}</h2>

					${ blockData.title
						? `<h3>${ blockData.title }</h3>`
						: `<p>Untitled</p>`
					}
					${ blockDescription}
					
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
					<video controls src="${ blockData.attachment.url }"></video>
					<h3>
						${ blockData.title }		
					</h3>
					${ blockDescription}
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
					<iframe src="${ blockData.attachment.url }"></iframe>
					<h3>
						${ blockData.title }		
					</h3>
					${ blockDescription}
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
					<audio controls src="${blockData.attachment.url}"></audio>
					<h3>
						${ blockData.title }		
					</h3>
					${blockDescription}
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
				${ blockData.embed.html}
					<h3>
						${ blockData.title }		
					</h3>
					${ blockDescription}
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
				${ blockData.embed.html}
					<h3>
						${ blockData.title }		
					</h3>
					${ blockDescription}
				</li>
				`

			channelBlocks.insertAdjacentHTML('beforeend', linkedAudioItem)
			
		}
	}
}



// A function to display the owner/collaborator info:
let renderUser = (userData) => {
	let channelUsers = document.querySelector('#channel-users') // Container.
	if (!channelUsers) return; // Exit if element doesn't exist
    
	let userAddress =
		`
		<address>
			<img src="${ userData.avatar }">
			<h3>${ userData.name }</h3>
			<p><a href="https://are.na/${ userData.slug }">Are.na profile ↗</a></p>
		</address>
		`

	channelUsers.insertAdjacentHTML('beforeend', userAddress)
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
	renderUser(json.owner) // Pass just the nested object `.owner`.
})

// Get your info to put with the owner's:
fetchJson(`https://api.are.na/v3/users/${myUsername}/`, (json) => {
	console.log(json) // See what we get back.

	renderUser(json) // Pass this to the same function, no nesting.
})

// And the data for the blocks:
fetchJson(`https://api.are.na/v3/channels/${channelSlug}/contents?per=100&sort=position_desc`, (json) => {
	console.log(json) // See what we get back.

	// Loop through the nested `.data` array (list).
	json.data.forEach((blockData) => {
		// console.log(blockData) // The data for a single block.

		renderBlock(blockData) // Pass the single block’s data to the render function.
	})
})
