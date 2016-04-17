import {
	GET,
	POST,
} from './tkcRequest';

GET( 
	'http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json',
	( data ) => {
		let HTML = `
<div class="card">
	<div class="blurring dimmable image">
	  <img src="${data.Poster}">
	</div>
	<div class="content">
	  <a class="header">${data.Title}</a>
	</div>
</div>
		`;

		document.querySelector('.react-container').innerHTML = HTML;
		GET(
			'http://www.omdbapi.com/?t=the+godfather+II&y=&plot=short&r=json',
			( data ) => {
		let HTML = `
<div class="card">
	<div class="blurring dimmable image">
	  <img src="${data.Poster}">
	</div>
	<div class="content">
	  <a class="header">${data.Title}</a>
	</div>
</div>
		`;

		document.querySelector('.react-container').innerHTML += HTML;
			}
		);
	}
);