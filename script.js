(() => {
  const target = new Date("2027-01-03T00:00:00+05:30").getTime();
  const pads = { days: 3, hours: 2, minutes: 2, seconds: 2 };
  function updateCountdown() {
    let remaining = Math.max(0, target - Date.now());
    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000)
    };
    Object.entries(values).forEach(([unit, value]) => {
      document.querySelector(`[data-unit="${unit}"]`).textContent = String(value).padStart(pads[unit], "0");
    });
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.scroll-reveal').forEach((element) => revealObserver.observe(element));

  const petals = document.querySelector('.petals');
  const colors = ['#7a1f36', '#a85b68', '#ede3d7'];
  for (let i = 0; i < 12; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty('--size', `${3 + Math.random() * 4}px`);
    petal.style.setProperty('--drift', `${-35 + Math.random() * 70}px`);
    petal.style.setProperty('--duration', `${17 + Math.random() * 15}s`);
    petal.style.setProperty('--delay', `${-Math.random() * 28}s`);
    petal.style.setProperty('--petal-color', colors[i % colors.length]);
    petals.appendChild(petal);
  }
})();
