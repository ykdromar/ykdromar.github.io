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

(function () {
  var contacts = [];

  var send = document.getElementById("send");
  var Cname = document.getElementById("Cname");
  var Cemail = document.getElementById("Cemail");
  var Cmessage = document.getElementById("Cmessage");

  async function fetchContacts() {
    try {
      var response = await fetch(
        "https://api.jsonbin.io/v3/b/631460a95c146d63ca8de067",
        {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2b$10$wUX124CxqnC0M92bPD8gEuYZ11u6FlqJAXckE3K661S7ghLbnTNVy",
          },
        }
      );
      // console.log(response);
      var bigdata = await response.json();
      // console.log(bigdata);
      var data = bigdata.record;
      contacts = data;
      // renderToDoList();
    } catch (e) {
      console.log(e);
    }
  }

  async function add(contact) {
    if (contact) {
      contacts.push(contact);
      try {
        var response = await fetch(
          "https://api.jsonbin.io/v3/b/631460a95c146d63ca8de067",
          {
            method: "PUT", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key":
                "$2b$10$wUX124CxqnC0M92bPD8gEuYZ11u6FlqJAXckE3K661S7ghLbnTNVy",
            },
            body: JSON.stringify(contacts),
          }
        );
        var bigdata = await response.json();
        var data = bigdata.record;

        // renderToDoList();

        showNotification("Message sent Successfully");
        return;
      } catch (e) {
        showNotification("Failed to sent Message");
        console.log(e);
      }
    }
    showNotification("Message cannot be added");
  }

  function showNotification(info) {
    window.alert(info);
  }
  function handelClick(event) {
    if (!Cname.value) {
      showNotification("Name cannot be Empty !");
      return;
    }
    if (!Cemail.value) {
      showNotification("Email cannot be Empty !");
      return;
    }
    if (!Cmessage.value) {
      showNotification("Message cannot be Empty !");
      return;
    }
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.toLocaleTimeString();
    let currDate = `${day}/${month}/${year}| ${time}`;
    const contact = {
      id: Date.now().toString(),
      date: currDate,
      name: Cname.value,
      email: Cemail.value,
      message: Cmessage.value,
    };
    // console.log(currDate);

    Cname.value = "";
    Cemail.value = "";
    Cmessage.value = "";

    add(contact);
  }
  function handelClickEnter(event) {
    if (event.key == "Enter") {
      if (!Cname.value) {
        showNotification("Name cannot be Empty !");
        return;
      }
      if (!Cemail.value) {
        showNotification("Email cannot be Empty !");
        return;
      }
      if (!Cmessage.value) {
        showNotification("Message cannot be Empty !");
        return;
      }
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let time = date.toLocaleTimeString();
      let currDate = `${day}/${month}/${year}| ${time}`;
      const contact = {
        id: Date.now().toString(),
        date: currDate,
        name: Cname.value,
        email: Cemail.value,
        message: Cmessage.value,
      };
      // console.log(currDate);

      Cname.value = "";
      Cemail.value = "";
      Cmessage.value = "";

      add(contact);
    }
  }

  function initalizeApp() {
    fetchContacts();
    Cmessage.addEventListener("keyup", handelClickEnter);
    send.addEventListener("click", handelClick);
  }
  initalizeApp();
})();
