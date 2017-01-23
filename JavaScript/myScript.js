function keyPressed(e) {
	var keyCodePressed = e.keyCode;
	var divPressed = document.querySelector(`.key[data-key="${keyCodePressed}"]`);
	var audio = document.getElementById(keyCodePressed);
	
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	divPressed.classList.add('enlarge');
	document.getElementById("soundText").innerHTML = divPressed.dataset.sound;
	document.body.style.backgroundColor = getRandColor();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('enlarge');
}

function getRandColor() {
	var possibleCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
	var color = "#"
	for (var i = 0; i < 6; i++) {
		var randNum = Math.floor((Math.random() * 15) + 1)
		color += possibleCharacters[randNum]
	}

	return color
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', keyPressed);