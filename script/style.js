(function navBehavior() {
  const navElem = document.querySelector("#nav-bar nav");
  const hamButton = document.querySelector("#nav-bar .hamburger-icon");

  hamButton.addEventListener("click", function (e) {
    e.stopPropagation();

    if (hamButton.classList.contains("active")) {
      hideNav();
    } else {
      displayNav();
    }
  });

  function hideNav() {
    hamButton.classList.remove("active");
    navElem.classList.add("hidden");
    window.removeEventListener("click", handler);
  }
  function displayNav() {
    hamButton.classList.add("active");
    navElem.classList.remove("hidden");
    window.addEventListener("click", handler);
  }
  function handler(e) {
    if (!e.path.some((e) => e === navElem)) {
      hideNav();
    }
  }
})();
(function hideNavOnScroll() {
  const navBar = document.getElementById("nav-bar");
  var top = 0;
  var diff;
  var prevYOffset = 0;
  var currYOffset;
  window.addEventListener("scroll", function (e) {
    currYOffset = window.pageYOffset;
    diff = currYOffset - prevYOffset;
    prevYOffset = currYOffset;
    top -= diff;
    if (top > 0) {
      top = 0;
    } else {
      let height = navBar.offsetHeight;
      if (top < -height) {
        top = -height;
      }
    }
    navBar.style.top = top + "px";
  });
})();

// document.querySelectorAll(".logo").forEach(
//   addEventListener("click", function () {
//     location.href = "index.html";
//   })
// );
