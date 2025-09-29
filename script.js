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
    .section6
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
function dayNightAni__init() {
  const target = document.querySelectorAll(
    `
    .section7
    `
  );

  target.forEach((el) => {
    el.classList.add("animate-init");
  });

  const observer2Init = function (entries) {
    entries.forEach((entry) => {
      let isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        entry.target.classList.remove("animate-init");
        entry.target.classList.add("animate");
      }
    });
  };

  const observer2 = new IntersectionObserver(observer2Init, {
    root: null,
    threshold: 0.5,
  });

  target.forEach((el) => {
    observer2.observe(el);
  });
}

function section8swiper() {
  const target = document.querySelector(".section8 .card-swiper");
  const prevBtn = document.querySelector(".section8 .prev-btn");
  const nextBtn = document.querySelector(".section8 .next-btn");

  const swiper = new Swiper(target, {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 400,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,

    // Navigation arrows
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
}

// function load list
document.addEventListener("DOMContentLoaded", function () {
  siteMapModal();
  scrollAnimation__init();
  dayNightAni__init();
  section8swiper();
});
