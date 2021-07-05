// Hide Menu on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0"; // show
  } else {
    document.getElementById("navbar").style.top = "-80px"; // hide
  }
  prevScrollpos = currentScrollPos;
};

// toggle menu
function toggleMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " navbar-phone";
  } else {
    x.className = "navbar";
  }
}
