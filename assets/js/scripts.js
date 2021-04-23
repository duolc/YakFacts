$.getJSON( "assets/js/yakfacts.json", function( data ) {
	/* Load the initial Fact */
	var numOfFacts = data.length - 1
	var intialRand = Math.floor((Math.random() * numOfFacts) + 0);
	chosenFact = data[ intialRand ];
	$( ".thefact" ).replaceWith( `<h2 class="thefact">${chosenFact.fact}</h2>` );
	$( ".thesource" ).replaceWith( `<h5 class="thesource subheader small">Source: <a href="${chosenFact.source}" target="_blank">${chosenFact.source}</a></h5>` );
	
	/* Load New Fact On Click */
	$( "#yakAttack" ).click(function() {
		var newRand = Math.floor((Math.random() * numOfFacts) + 0);
		newFact = data[ newRand ];
		$( ".thefact" ).replaceWith( `<h2 class="thefact">${newFact.fact}</h2>` );
		$( ".thesource" ).replaceWith( `<h5 class="thesource subheader small">Source: <a href="${newFact.source}" target="_blank">${newFact.source}</a></h5>` );
	});
});