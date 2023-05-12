// Fade out Video on scroll
function fadeOut() {
	// this runs every time the user scrolls
  var element = document.getElementById('introVideo');

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / (elementHeight / 3);
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', fadeOut);

// Fade in Menu on scroll
function fadeInMenu() {
	// this runs every time the user scrolls
  if (window.matchMedia('(max-width: 768px)').matches) {
    return; // Exit the function and skip execution
  }
  var element = document.getElementById('navMenu');
  // Calculates the vertical distance from the top of the document to the top edge of the specified element.
  //window.pageYOffset retrieves the current vertical scroll position of the document. It represents the number of pixels that the document has been scrolled vertically from the top.
  //element.getBoundingClientRect().top returns the distance between the top edge of the element and the top edge of the viewport, measured in pixels.
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  // Retrieves the vertical scroll position of the document relative to the top of the viewport.
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 0;

	if (scrollTop < distanceToTop) {
		opacity = 1 + (scrollTop - distanceToTop) / (elementHeight * 6);
	}

  if (scrollTop > distanceToTop) {
    opacity = 1
  }

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', fadeInMenu);

// Fade in Page on scroll
function fadeInPage() {
	// this runs every time the user scrolls
  if (window.matchMedia('(max-width: 768px)').matches) {
    return; // Exit the function and skip execution
  }
  var element = document.getElementById('indexPageStart');
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 0;

	if (scrollTop < distanceToTop) {
		opacity = 2 + (scrollTop - distanceToTop) / (elementHeight / 15);
	}

  if (scrollTop > distanceToTop) {
    opacity = 1
  }

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

window.addEventListener('scroll', fadeInPage);
