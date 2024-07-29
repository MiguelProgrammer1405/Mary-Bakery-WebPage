const toggleBtn = document.querySelector(".toggle-btn");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navBar = document.querySelector(".nav");
const navHeader = document.querySelector(".nav-header");
const header = document.querySelector(".header");
const productsSection = document.querySelector(".products");
console.log();

toggleBtn.addEventListener("click", function () {
  let linksHeight = links.getBoundingClientRect().height;
  let navHeaderHeight = navHeader.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener("scroll", function () {
  let pageScroll = scrollY;
  let headerHeight = header.getBoundingClientRect().height;
  let navHeaderHeight = navHeader.getBoundingClientRect().height;
  if (pageScroll > headerHeight) {
    navBar.classList.add("nav-fixed");
  } else {
    navBar.classList.remove("nav-fixed");
  }
  if (navBar.classList.contains("nav-fixed")) {
    productsSection.style.marginTop = `${navHeaderHeight}px`;
  } else {
    productsSection.style.marginTop = 0;
  }
});
