const btnStart = document.querySelector(".btn_start");
const sockSelect = document.querySelector(".sock-select");

if (btnStart) {
  btnStart.addEventListener("click", () => {
    window.location.assign("/sock-generator");
  });
}

if (sockSelect) {
  sockSelect.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { color, design, photo } = e.target;

    const data = {
      color: color.value,
      design: design.value,
      photo: photo.value,
    };
    const response = await fetch("/api/sock-generator", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
    if (res.message === "success") {
      document.querySelector(".sock-card").remove();
      document
        .querySelector(".sock-container")
        .insertAdjacentHTML("beforeend", res.html);
    }
  });
}
