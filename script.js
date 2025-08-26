function siteMapModal() {
  const siteMap = document.querySelector(".site-map");
  const siteMapModal = siteMap.querySelector(".site-map-modal");

  siteMap.addEventListener("click", () => {
    if (siteMap.classList.contains("modalActive")) {
      siteMapModal.classList.remove("active");
      siteMap.classList.remove("modalActive");
    } else {
      siteMapModal.classList.add("active");
      siteMap.classList.add("modalActive");
    }
  });
}

siteMapModal();
