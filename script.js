// header sitemap modal
function siteMapModal() {
  const siteMap = document.querySelector(".site-map");
  const siteMapModal = siteMap.querySelector(".site-map-modal");

  function modalClose() {
    siteMapModal.classList.remove("active");
    siteMap.classList.remove("modalActive");
  }
  function modalOpen() {
    siteMapModal.classList.add("active");
    siteMap.classList.add("modalActive");
  }

  siteMap.addEventListener("click", () => {
    if (siteMap.classList.contains("modalActive")) {
      modalClose();
    } else {
      modalOpen();
    }

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".site-map")) {
        modalClose();
      }
    });
  });
}

// scroll animation triger
function scrollAnimation__init() {
  const target = document.querySelectorAll(
    `
    .section3,
    .section6,
    .section7
    `
  );

  target.forEach((el) => {
    el.classList.add("animate-init");
  });

  const observerInit = function (entries) {
    entries.forEach((entry) => {
      let isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        entry.target.classList.remove("animate-init");
        entry.target.classList.add("animate");
      }
    });
  };

  const observer = new IntersectionObserver(observerInit, {
    root: null,
    threshold: 0,
  });

  target.forEach((el) => {
    observer.observe(el);
  });
}

// function load list
document.addEventListener("DOMContentLoaded", function () {
  siteMapModal();
  scrollAnimation__init();
});
