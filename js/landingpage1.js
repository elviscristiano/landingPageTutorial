// Wow library instantiation
new WOW().init();

// Ajax call
const apiBaseUrl = 'http://data.fixer.io/api/';
const apiEndpointLatest = 'latest';
const apiKey = 'c8677000c691a4096bd268ad7cf61e2a';
const btnRate = document.getElementById('btnRate');

// Consuming the API
btnRate.addEventListener('click', () => {
  	let xhttp = new XMLHttpRequest();
  	xhttp.open('GET', apiBaseUrl + apiEndpointLatest + '?access_key=' + apiKey, true);
  	xhttp.send();
  	xhttp.onreadystatechange = () => {
  		let reqDone = 4;
  		let statusOk = 200;
    	if (xhttp.readyState == reqDone) {
    		if (xhttp.status == statusOk) {
    			let data = JSON.parse(xhttp.responseText);
				document.getElementById('lastRate').innerHTML = '&euro;	1 = CAD ' + data.rates.CAD.toFixed(4);
    		} else {
    			console.log('Error: ' + xhttp.status);
    		}
    	}
  	};
});
