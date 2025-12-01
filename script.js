document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Sprawdź, czy użytkownik miał już zapisany tryb w pamięci
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Zmieńikonę na słońce
    }

    // 2. Obsługa kliknięcia
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Zmień ikonkę i zapisz wybór
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});