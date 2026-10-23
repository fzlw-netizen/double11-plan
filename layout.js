const openToH5 = document.querySelector("#openToH5");
const h5Layout = document.querySelector("#h5Layout");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

openToH5.addEventListener("click", () => {
  h5Layout.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("已跳转到 H5 布局占位");
});

document.querySelectorAll(".live-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const reserved = button.classList.toggle("reserved");
    button.textContent = reserved ? "已预约" : "预约";
    button.setAttribute("aria-pressed", String(reserved));
  });
});
