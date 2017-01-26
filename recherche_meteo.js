// IIFE (Immediately Invoked Function Expression)
(function() {
  'use strict'

  // Create HttpRequest
  let req = new XMLHttpRequest();

  req.open('GET', "/students.json", true);

  // When Request state change
  req.onreadystatechange = function(e) {
     // 0:UNSENT 1:OPENED 2:HEADERS_RECEIVED 3:LOADING 4:DONE
    if (req.readyState === 4) { // Do this if request is done

      // HTTP Status code 200:OK  (complete list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_Informational )
      if (req.status === 200 ) { // Do this if HTTP status is OK
        
        console.log(req);
        console.log(req.responseText);

        // req.responseText: response content | see documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
        let students = JSON.parse(req.responseText);

       // console.log(students);
       let totalAge = 0;

        // Get table from DOM
        let table = document.querySelector('#students > tbody');

        // console.log(table);
        
		let ageClickHandler = function(evt){
			// on trie et on charge en mémoire
          
          
                 }
        }

        // add event listener to table
        let columnAge = document.getElementById("age-students");
        columnAge.addEventListener("click", ageClickHandler, true);
		       

	        document.querySelector("#average b").innerHTML = totalAge / students.length;
	        console.log('totalAge / students.length');
	        console.log(totalAge / students.length);


   		// fin de (req.status === 200)
        } else {
        alert("Could not load students.json");
      }
    }
  }

  // Send request
  req.send();

})();