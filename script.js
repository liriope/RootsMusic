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
  if (window.matchMedia('(max-width: 768px)').matches) {
    return; // Exit the function and skip execution
  }

  var element = document.getElementById('navMenu');
  var elementHeight = element.offsetHeight;
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var viewportHeight = window.innerHeight;
  var scrollThreshold = distanceToTop + (0.75 * viewportHeight);

  var scrollTop = document.documentElement.scrollTop;
  var opacity = 0;

  if (scrollTop > scrollThreshold) {
    opacity = 1;
  } else if (scrollTop > distanceToTop) {
    opacity = (scrollTop - distanceToTop) / (elementHeight * 6);
  }

  element.style.opacity = opacity;
}

window.addEventListener('scroll', fadeInMenu);

// Fade in Menu on scroll
function fadeInPage() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return; // Exit the function and skip execution
  }

  var element = document.getElementById('fadeInPage');
  var elementHeight = element.offsetHeight;
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var viewportHeight = window.innerHeight;
  var scrollThreshold = distanceToTop + (0.75 * viewportHeight);

  var scrollTop = document.documentElement.scrollTop;
  var opacity = 0;

  if (scrollTop > scrollThreshold) {
    opacity = 1;
  } else if (scrollTop > distanceToTop) {
    opacity = (scrollTop - distanceToTop) / (elementHeight);
  }

  element.style.opacity = opacity;

}

window.addEventListener('scroll', fadeInPage);
