const target = new Date("2027-01-03T00:00:00+05:30").getTime();
const fields = ["days", "hours", "minutes", "seconds"].map((id) => document.getElementById(id));

function updateCountdown() {
  let remaining = Math.max(0, target - Date.now());
  const days = Math.floor(remaining / 86400000); remaining %= 86400000;
  const hours = Math.floor(remaining / 3600000); remaining %= 3600000;
  const minutes = Math.floor(remaining / 60000); remaining %= 60000;
  const seconds = Math.floor(remaining / 1000);
  [days, hours, minutes, seconds].forEach((value, index) => {
    fields[index].textContent = String(value).padStart(index === 0 ? 3 : 2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const petals = document.querySelector(".petals");
const colors = ["#7a1f36", "#ad6075", "#e8d8d4", "#fffaf2"];
for (let index = 0; index < 11; index++) {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty("--petal", colors[index % colors.length]);
  petal.style.setProperty("--duration", `${18 + Math.random() * 16}s`);
  petal.style.setProperty("--delay", `${-Math.random() * 28}s`);
  petal.style.setProperty("--drift", `${-45 + Math.random() * 90}px`);
  petals.appendChild(petal);
}
