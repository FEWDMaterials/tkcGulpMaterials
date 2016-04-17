import {
	GETPromise,
} from './tkcRequest';

GETPromise(
	'http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json'
).then((data)=>{
	console.log( data );

	return GETPromise('http://www.omdbapi.com/?t=the+godfather+II&y=&plot=short&r=json')
}).then((data)=> {
	console.log( data );

	return 2;
}).then(( val )=> {
	console.log(val);
}).catch((e)=>{
	console.log(e);
});

var gets = [
	GETPromise('http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json'),
	GETPromise('http://www.omdbapi.com/?t=the+godfathe+IIr&y=&plot=short&r=json'),
];

Promise.all( gets ).then(()=>{
	console.log('******');
	console.log(arguments)
})