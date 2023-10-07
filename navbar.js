// Enable Bootstrap Navbar functionality
var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  var target = document.querySelector(
    navbarToggler.getAttribute("data-bs-target")
  );
  if (target.classList.contains("show")) {
    target.classList.remove("show");
  } else {
    target.classList.add("show");
  }
});
