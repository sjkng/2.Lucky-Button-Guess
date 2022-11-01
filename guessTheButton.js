	var randomCounter = 0;

	function Random() {
		++randomCounter;
		var randomNrGenerator = Math.floor(Math.random() * 1000);
		document.getElementById('boxNr').value = randomNrGenerator;
		document.getElementById('boxNr').innerHTML = randomNrGenerator;
		for (let i = 1; i <= 3; ++i) {
			document.getElementById('Button' + i).value = -1;
		}
		var guessButton = Math.floor(Math.random() * (4-1)) + 1;
		document.getElementById('Button' + guessButton).value = randomNrGenerator;
		document.getElementById('result').innerHTML = "";
		return 0;
	}

	function Alert(buttonId) {
		if (document.getElementById(buttonId).value == document.getElementById('boxNr').value) {
            		document.getElementById('result').innerHTML = "JackPot! " + buttonId + " is the Lucky button.";
           		return 0;
		} 
		if (randomCounter == 0) {
			document.getElementById('result').innerHTML = "Please click on 'Number Randomizer' first!";
			return 0;
		}
		document.getElementById('result').innerHTML = 'Try Again!';
		return 0;
	}
