window.onload = function () {
	let counter = 0;
	const main_logo = document.getElementById('main-logo');
	main_logo.addEventListener('click', () => {
			counter = counter + 1;
			if(counter == 1) {
				showAlertBox('Hello there !!');
			}

			if(counter == 4) {
				showAlertBox('Persistent are we :)');
			}

			if(counter == 9) {
				showAlertBox('Just one more click, hurry !!!');
			}

			if(counter >= 10) {
				showAlertBox(`<p>You have found the PAX Chennai 2025 easter egg!!</p><p>Show this to a CAC Admin and get a cool prize!!</p><img id="easter-egg" src="assets/sakamoto.gif">`);
			}
	});

	setInterval(() => {
  if (counter > 0) {
    counter--;
  }
}, 30000);

	function showAlertBox(text) {
  document.getElementById("alert-box").style.display = "block";
  document.getElementById("alert-box-text").innerHTML = text;
}

document.getElementById("alert-box-close").addEventListener('click', () => {
	document.getElementById("alert-box").style.display = "none";
	document.getElementById("alert-box-text").innerHTML = '';
});

}