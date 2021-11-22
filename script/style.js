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

const actual_sources = Array(
  "images/objective-1.mp4",
  "images/objective-2.mp4",
  "images/objective-3.mp4",
  "images/objective-4.mp4"
);
const targetted_videos = document.getElementsByTagName("video");
var counter = 0;

for (counter = 0; counter < targetted_videos.length; counter++) {
  const random = document.createElement("video");
  const random_source = document.createElement("source");
  random_source.setAttribute("src", actual_sources[counter]);
  random_source.setAttribute("type", "video/mp4");
  random.appendChild(random_source);
  random.addEventListener("load", (event) => {
    targetted_videos[counter].firstElementChild.setAttribute(
      "src",
      actual_sources[counter]
    );
    targetted_videos[counter].load();
    targetted_videos[counter].play();
  });
}

var path = window.location.pathname;
var page = path.split("/").pop();
function extract_first_four() {
  new_string = "";
  for (i = 0; i < 4; i++) {
    new_string = new_string + page.charAt(i);
  }
  return new_string;
}
function extract_first_six() {
  new_string = "";
  for (i = 0; i < 6; i++) {
    new_string = new_string + page.charAt(i);
  }
  return new_string;
}

var elements = document.getElementsByClassName("logo");
console.log(page);
for (counter = 0; counter < elements.length; counter++) {
  elements[counter].addEventListener("click", function () {
    if (page == "index.html") {
      location.href = "#";
    } else if (
      extract_first_four() == "blog" ||
      extract_first_six() == "recent"
    ) {
      location.href = "../index.html";
    } else {
      location.href = "index.html";
    }
  });
}
