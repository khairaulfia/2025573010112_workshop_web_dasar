import "./style.css";

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

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {
  navMenu.classList.toggle("hidden");
};