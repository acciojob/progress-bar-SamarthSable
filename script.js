//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

let current = 1;

update();

next.addEventListener("click", () => {
  if (current < circles.length) {
    current++;
    update();
  }
});

prev.addEventListener("click", () => {
  if (current > 1) {
    current--;
    update();
  }
});

function update() {
  circles.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCount = document.querySelectorAll(".circle.active").length;
  progress.style.width =
    ((activeCount - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = current === 1;
  next.disabled = current === circles.length;
}
