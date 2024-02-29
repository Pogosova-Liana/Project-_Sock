const btnStart = document.querySelector(".btn_start");

if (btnStart) {
  btnStart.addEventListener("click", () => {
    window.location.assign("/sock-generator");
  });
}
