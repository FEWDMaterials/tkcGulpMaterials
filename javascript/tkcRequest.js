export function GETPromise( url ) {
	return new Promise((resolve,reject) => {
		// instantiate a new XMLHttpRequest obj
		let xhr = new XMLHttpRequest();

		// add the load event listener to handle
		// the response when this req comes back
		xhr.addEventListener('load', (evt) => {
			// store the response text from server into `data`
			let data = evt.currentTarget.responseText;
			// the `data` is a string, conver to JSON
			data = JSON.parse( data );

			resolve( data );
		});

		// handle failure
		xhr.addEventListener('error', (err) => {
			reject(err);
		})

		// spec what kind of request we need and to where
		xhr.open('GET', url);

		// send off the req!
		xhr.send();
		});
}

export function GET( url, onSuccess ) {
	console.log( url );

	// instantiate a new XMLHttpRequest obj
	let xhr = new XMLHttpRequest();

	// add the load event listener to handle
	// the response when this req comes back
	xhr.addEventListener('load', (evt) => {
		// store the response text from server into `data`
		let data = evt.currentTarget.responseText;
		// the `data` is a string, conver to JSON
		data = JSON.parse( data );

		onSuccess( data );
	});

	// handle failure
	xhr.addEventListener('error', (err) => {
		console.log(err);
	})

	// spec what kind of request we need and to where
	xhr.open('GET', url);

	// send off the req!
	xhr.send();
}

