var grayscale = false;
document.getElementById("pwat-grayscale-toggle").addEventListener('click', function (e) {
	var docStyle = document.documentElement.style;
	docStyle.minHeight = "100%";
	docStyle.filter = (grayscale) ? "grayscale(0)" : "grayscale(1)";
	e.target.setAttribute('aria-pressed', !grayscale);
	grayscale = !grayscale;
});