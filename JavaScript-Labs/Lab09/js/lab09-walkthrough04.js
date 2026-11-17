/* code goes here */
var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");
var content = document.getElementById("content");
var transitionTimer;

function simpleHandler() {
  clearTimeout(transitionTimer);

  if (btn.textContent === "Hide") {
    btn.textContent = "Show";
    content.className = "makeItDisappear";

    transitionTimer = setTimeout(function () {
      content.style.display = "none";
    }, 1000);
  } else {
    btn.textContent = "Hide";
    content.style.display = "block";

    transitionTimer = setTimeout(function () {
      content.className = "makeItNormal";
    }, 500);
  }
}

btn.addEventListener("click", simpleHandler);

img.addEventListener("mouseover", function () {
  img.className = "makeItGray";
});

img.addEventListener("mouseout", function () {
  img.className = "makeItNormal";
});