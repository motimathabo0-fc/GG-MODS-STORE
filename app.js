const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const themeSelect = document.getElementById("themeSelect");
const year = document.getElementById("year");

// Mobile navigation menu
if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  sidebar.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");

      sidebar.querySelectorAll(".nav-link").forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
}

// Footer year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Theme selector
const allowedThemes = ["neon", "blue", "red", "green", "white"];

function applyTheme(theme) {
  const selectedTheme = allowedThemes.includes(theme) ? theme : "neon";

  document.body.classList.remove(
    "theme-neon",
    "theme-blue",
    "theme-red",
    "theme-green",
    "theme-white"
  );

  document.body.classList.add(`theme-${selectedTheme}`);

  if (themeSelect) {
    themeSelect.value = selectedTheme;
  }

  try {
    localStorage.setItem("ggmods-theme", selectedTheme);
  } catch (error) {
    // The theme still works if browser storage is unavailable.
  }
}

let savedTheme = "neon";

try {
  savedTheme = localStorage.getItem("ggmods-theme") || "neon";
} catch (error) {
  // Use the default theme.
}

applyTheme(savedTheme);

if (themeSelect) {
  themeSelect.addEventListener("change", () => {
    applyTheme(themeSelect.value);
  });
}

// Update the browser tab theme colour when the theme changes.
if (themeSelect) {
  themeSelect.addEventListener("change", () => {
    const themeColors = {
      neon: "#00e5ff",
      blue: "#3987ff",
      red: "#ff435d",
      green: "#43e68a",
      white: "#ffffff"
    };

    const themeColor = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColor) {
      themeColor.setAttribute(
        "content",
        themeColors[themeSelect.value] || themeColors.neon
      );
    }
  });
}

console.log("GG MODS website loaded successfully!");
 // GG MODS — Supabase connection
const GG_SUPABASE_URL = "https://wqtdprjcuonlgalmlemu.supabase.co";
const GG_SUPABASE_KEY = "sb_publishable_5VAxMFL0uuvOqkZMZ-I1Yg_YsVMAQMQ";

const ggSupabase = window.supabase.createClient(
  GG_SUPABASE_URL,
  GG_SUPABASE_KEY
);

console.log("GG MODS database connection initialized!"); 
