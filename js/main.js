// contact button
$(".button").click(function () {
  let contact = $("#contact").offset().top;
  $("body , html").animate({ scrollTop: contact - 50 }, 1000);
});

// slideUp button

$(window).on("scroll", function () {
  let services = $("#services").offset().top;
  let wScroll = $(window).scrollTop();

  if (wScroll >= services - 100) {
    $("#slideUp").fadeIn(500);
  } else {
    $("#slideUp").fadeOut(500);
  }
});

$("#slideUp").click(function () {
  $("html , body").animate({ scrollTop: 0 }, 2000);
});

// link scroll to section
$(".nav-link").click(function (e) {
  let section = $(e.target).attr("href");
  let secOffset = $(section).offset().top;

  $("body , html").animate({ scrollTop: secOffset - 50 }, 1000);
});

//   animation of sections

$(window).on("scroll", function () {
  let services = $("#services").offset().top;
  let portfolio = $("#projects").offset().top;
  let wScroll = $(window).scrollTop();

  if (wScroll >= services - 600) {
    $("#services .row").addClass([" animate__animated", "animate__fadeInUp"]);
  }
});

$(window).on("scroll", function () {
  let portfolio = $("#projects").offset().top;
  let wScroll = $(window).scrollTop();

  if (wScroll >= portfolio - 600) {
    $("#projects .row").addClass([" animate__animated", "animate__fadeInUp"]);
  }
});

//  horizontal scroller
let scroller = document.getElementById("scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
  let scrollTop = this.document.documentElement.scrollTop;

  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// portfolio links

let projectsLinks = document.querySelectorAll(".portfolio ul li");
let carts = document.querySelectorAll(".portfolio .col-md-3");

projectsLinks.forEach((projectLink) => {
  projectLink.addEventListener("click", function (eventInfo) {
    // remove active class from all links and add it to clicked link
    projectsLinks.forEach((link) => {
      link.classList.remove("active");
      eventInfo.target.classList.add("active");

      // disappear all carts and display only one which belong to specific category
      carts.forEach((cart) => {
        cart.style.display = "none";

        if (cart.getAttribute("id") === eventInfo.target.getAttribute("id")) {
          cart.style.display = "block";
          cart.style.opacity = "1";
        } else if (eventInfo.target.getAttribute("id") === "all") {
          cart.style.display = "block";
        }
      });
    });
  });
});
