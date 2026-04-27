import "./style.css";
const darkBtn = document.getElementById("darkBtn");

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

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {
  navMenu.classList.toggle("hidden");
};