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
document.addEventListener("DOMContentLoaded", function () {
  siteMapModal();
});
