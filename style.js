//smooth scroll
(function () {
  var nav = document.querySelectorAll(".nav a");
  for (let i = 0; i < nav.length; i++) {
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
})();

// skills bar autofill Animation
(function () {
  var skillBars = document.querySelectorAll(".progress");
  // console.log(skillBars);
  var skillContainer = document.getElementsByClassName("skills-display");
  var isAnimationDone = false;
  window.addEventListener("scroll", checkScroll);

  function initialBarWidth() {
    for (let i = 0; i < skillBars.length; i++) {
      skillBars[i].style.width = 0 + "%";
    }
  }
  initialBarWidth();
  function fireAnimation() {
    for (let bar of skillBars) {
      let targetWidth = bar.getAttribute("data-bar-width");

      // bar.style.width = targetWidth;
      // console.log(targetWidth);
      let currWidth = 0;
      let widthInterval = setInterval(function () {
        if (currWidth > targetWidth) {
          clearInterval(widthInterval);
          return;
        }
        bar.style.width = currWidth + "%";
        currWidth++;
      }, 5);
    }
  }

  function checkScroll() {
    var skillsCoordi = skillContainer[0].getBoundingClientRect();
    if (!isAnimationDone && skillsCoordi.top <= window.innerHeight) {
      isAnimationDone = true;
      // console.log("skill");
      fireAnimation();
    } else if (skillsCoordi.top > window.innerHeight) {
      isAnimationDone = false;
      initialBarWidth();
    }
  }
})();
