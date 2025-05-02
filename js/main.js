const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    removeBorder();
    removeShow();
    this.classList.add("tab-border");

    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
  })
);

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  console.log("remove Show function");
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
