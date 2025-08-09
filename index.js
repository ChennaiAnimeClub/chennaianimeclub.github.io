window.onload = function () {
	let counter = 0;
	const main_logo = document.getElementById('main-logo');
	main_logo.addEventListener('click', () => {
			counter = counter + 1;
			if(counter == 1) {
				alert('hello there!');
			}
	});
}