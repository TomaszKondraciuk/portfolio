//Część JS menu z https://github.com/functionite/responsive-web-design-tutorial

var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
      var isExpanded = hamburger.getAttribute("aria-expanded");
      console.log(isExpanded);
      if (isExpanded === "false") {
        document.querySelector(".page-header").classList.add("nav-opened");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        document.querySelector(".page-header").classList.remove("nav-opened");
        hamburger.setAttribute("aria-expanded", "false");
      }
    }, false);
    hamburger.setAttribute("role", "button"); 
    hamburger.setAttribute("aria-controls", "navigation");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.add("js");

(function() {

var openEmailBox = document.querySelector(".email-box");
document.querySelector(".push-icon").addEventListener("click", function() {
    openEmailBox.classList.toggle("opened-email-box");
}, false);
})();

