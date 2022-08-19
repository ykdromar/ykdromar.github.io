//smooth scroll

var nav = document.querySelectorAll(".nav a");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectioId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectioId);
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();

      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}
