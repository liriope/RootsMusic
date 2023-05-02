$(window).scroll(function() {
  if ($(this).scrollTop() >= $('.banner').outerHeight()) {
    $('#video')[0].pause();
  } else {
    $('#video')[0].play();
  }
});

window.addEventListener('scroll', function() {
  const video = document.querySelector('video');
  const videoTop = video.offsetTop;
  const videoBottom = videoTop + video.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  if (scrollPosition > videoTop && scrollPosition < videoBottom) {
    const opacity = 1 - ((scrollPosition - videoTop) / video.offsetHeight);
    video.style.opacity = opacity;
  } else {
    video.style.opacity = 1;
  }
});
