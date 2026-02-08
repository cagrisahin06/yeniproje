// theme.js

// Function to apply the chosen theme
function applyTheme(theme) {
    document.body.className = theme; // Add the theme class to body
    localStorage.setItem('theme', theme); // Save the theme in localStorage
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Function to set the initial theme on page load
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
    applyTheme(savedTheme);
}

// Event listener for theme toggle button if it exists
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();

    const themeToggleButton = document.getElementById('theme-toggle'); // Assume there's a button for toggling
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
