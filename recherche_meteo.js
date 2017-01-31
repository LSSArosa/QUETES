  'use strict' 
 var monbouton = document.querySelector('#mySubmit');
 monbouton.onclick = function() {

 // <!-- IIFE (Immediately Invoked Function Expression)
 // (function() {
 	// if (#maCity == '') {
 	// 	(alert('veuillez saisir une ville svp!'))
 	// } 

  // Create HttpRequest
	let req = new XMLHttpRequest();

	//req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&&",true);
	// JSON 	 api.openweathermap.org/data/2.5/weather?q=London
	// API call: api.openweathermap.org/data/2.5/weather?q={city name},{country code}
	// metric 	 api.openweathermap.org/data/2.5/find?q=London&units=metric
	// HTML 	 api.openweathermap.org/data/2.5/weather?q=London&mode=html
	// elsa data : 34c87f113d850d45d34ae90495bffe3e
	// 	  http://api.openweathermap.org/v3/uvi/{location}/{datetime}.json?appid={api_key}
	//  langue : &lang={lang}
	let inputCountry = document.getElementById('country'); 
	let keyCountry = inputCountry.value;

	console.log(`${'keyCountry:'}${keyCountry}`);

	let inputCity = document.getElementById("maCity");
	let keyCity = inputCity.value;

	console.log(`${'keyCity:'}${keyCity}`);
	
	let adresse = `http://api.openweathermap.org/data/2.5/weather?q=${keyCity},${keyCountry}&lang=fr&units=metric&APPID=34c87f113d850d45d34ae90495bffe3e`
	console.log(`${'adresse:'}${adresse}`);
		 
	 req.open("GET", adresse, true);

	 // When Request state change
  	req.onreadystatechange = function(event) {
    // 0:UNSENT 1:OPENED 2:HEADERS_RECEIVED 3:LOADING 4:DONE

		// req.addEventListener("load", function (event) {

      // HTTP Status code 200:OK  (complete list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_Informational )
	 	if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
	 		console.log("responseText=");
	 		console.log(req.responseText);
	 		console.log("fin du=");

    // req.responseText: response content | see documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
		let meteo = JSON.parse(req.responseText);

      
	// Récupération de certains résultats
		 let CityJ = meteo.name;
		 let temperature = meteo.main.temp;
		console.log(`${'CityJ:'}${CityJ}`);
		


	// 	var temperature = meteo.current_observation.temp_c;
	 	let humidite = meteo.main.humidity;
	 	console.log(`${'humidite:'}${humidite}`);

	 	let imageUrl = meteo.weather[0].icon;
	 	console.log(`${'imageUrl 2:'}${imageUrl}`);
	 	let imageDescription = meteo.weather[0].description;
	 	 	console.log(`${'imageDescription:'}${imageDescription}`);

	//  Affichage des résultats
	    document.getElementById("cityFound").innerHTML = 'à ' + CityJ;
			console.log(`${'temperature:'}${temperature}`);
	//	console.log(`${'temperature:'}${temperature}`);
	  	var conditionsElt = document.createElement("div"); 

	  	conditionsElt.textContent = "Il fait " + temperature +
	  	"°C et l'humidité est de " + humidite + "%. Conditions météorologiques actuelles: " + imageDescription;

	 	var imageElt = document.createElement("img");

	 	imageElt.src = 'http://openweathermap.org/img/w/' + imageUrl + '.png';

	 		console.log(`${'imageElt.src:'}${imageElt.src}`);

	 	var meteoElt = document.getElementById("cityFound");
	 	meteoElt.appendChild(imageElt);
	 	meteoElt.appendChild(conditionsElt);
	 	
	 		 		 	
	} else {
	// Affichage des informations sur l'échec du traitement de la requête
		console.error(req.status + " " + req.statusText);
		alert("Could not load your weather");
		}
	}
	req.addEventListener("error", function () {
	// La requête n'a pas réussi à atteindre le serveur
		console.error("Erreur réseau");
		});

	req.send();
// })()

 };