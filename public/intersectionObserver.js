const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".heroSection");
const home = document.querySelector(".home");

// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

let sectionOneOptions = {
  rootMargin: "-650px 0px 0px 0px",
};
let sectionOneObserver = new IntersectionObserver(function (entries, sectionOneobserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("navbarScrolled");
    } else {
      header.classList.remove("navbarScrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// const appearoptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -150px 0px",
// };

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       entry.target.classList.remove("appear");
//     } else {
//       entry.target.classList.add("appear");
//       // appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearoptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });
