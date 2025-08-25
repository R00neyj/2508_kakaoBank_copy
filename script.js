function siteMapModal() {
  const siteMap = document.querySelector(".site-map");
  const siteMapModal = siteMap.querySelector(".site-map-modal");

  siteMap.addEventListener("click", () => {
    if (siteMapModal.classList.contains("active")) {
      siteMapModal.classList.remove("active");
    } else {
      siteMapModal.classList.add("active");
    }
  });
}

siteMapModal();
