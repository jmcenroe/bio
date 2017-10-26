$(document).ready(function() {
console.log('testing...testing');
	// Storing variables for later use in functions
	var generateRandomNumber = function (min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	
	var blue = generateRandomNumber(1, 12);
	var green = generateRandomNumber(1, 12);
	var pink = generateRandomNumber(1, 12);
	var yellow = generateRandomNumber(1, 12);
	var userTotal = 0;
	var wins = 0;
	var losses = 0;
	var randomNumber = generateRandomNumber(19, 120);

	// Appending random number to the randomNumber id in the html doc
	$('#randomNumber').html(randomNumber);

	//  Decaring variables for scoreboard
	$('#numWins').html(wins);
	$('#numLosses').html(losses);

	// Resets the game
	function reset() {
		 $('#randomNumber').html(generateRandomNumber(19, 120));
		 blue = generateRandomNumber(1, 12);
		 green = generateRandomNumber(1, 12);
		 pink = generateRandomNumber(1, 12);
		 yellow = generateRandomNumber(1, 12);
		 userTotal = 0;
		 $('#numWins').html(userTotal);
		 $('#totalScore').html(userTotal);
	}

	// Adds the wins to the userTotal
	function huzzah() {
		 wins++;
		 $('#numWins').html(wins);
		 reset();
		 setTimeout(function () {
				alert("You won!");
		 }, 100);
		 return;
	}
	
	// Adds the losses to the userTotal
	function loser() {
		 losses++;
		 $('#numLosses').html(losses);
		 reset();
		 setTimeout(function () {
				alert("You lose!");
		 }, 100);
		 return;
	}

	//sets win/lose conditions
	function endGame() {
	if (userTotal === randomNumber) {
				 huzzah();
		 } else if (userTotal > randomNumber) {
				 loser();
		 }
	}

	// Sets up click for jewels
	$('#blue').on('click', function() {
		 userTotal = userTotal + blue;
		 console.log("New userTotal= " + userTotal);
		 $('#totalScore').html(userTotal);
			
			endGame();
	})

	$('#green').on('click', function() {
		 userTotal = userTotal + green;
		 console.log("New userTotal= " + userTotal);
		 $('#totalScore').html(userTotal);

		 endGame();
	})

	$('#pink').on('click', function() {
		 userTotal = userTotal + pink;
		 console.log("New userTotal= " + userTotal);
		 $('#totalScore').html(userTotal);

		 endGame();
	})

	$('#yellow').on('click', function() {
		 userTotal = userTotal + yellow;
		 console.log("New userTotal= " + userTotal);
		 $('#totalScore').html(userTotal);

		 endGame();

	});
	
});