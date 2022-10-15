// When the user scrolls down 100px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	let el = document.getElementById("top");

	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		el.classList.remove('header_tp');
		el.classList.add('header_sm');
	} else {
		el.classList.add('header_tp');
		el.classList.remove('header_sm');
	}
}