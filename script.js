const themeToggle = document.querySelector("#theme-toggle");

// Listen for toggle changes
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        // Enable dark mode
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        // Enable light mode
        document.documentElement.setAttribute("data-theme", "light");
    }
});