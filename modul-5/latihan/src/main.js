import "./style.css";

const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    topBtn.classList.toggle("hidden", document.documentElement.scrollTop < 200);
};

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// DARK MODE
const darkBtn = document.getElementById("toggleDark");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  darkBtn.textContent = "☀️";
}

darkBtn.onclick = () => {
  document.documentElement.classList.toggle("dark");

  const isDark = document.documentElement.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  darkBtn.textContent = isDark ? "☀️" : "🌙";
};

// like
document.querySelectorAll(".like").forEach(btn => {
    btn.onclick = () => btn.classList.toggle("text-red-500");
});

// search
document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        let nama = card.querySelector(".nama").textContent.toLowerCase();
        card.style.display = nama.includes(value) ? "block" : "none";
    });
});

