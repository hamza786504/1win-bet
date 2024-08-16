document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('languageButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const currentLanguage = document.getElementById('currentLanguage');
    const currentFlag = document.getElementById('currentFlag');

    // Toggle dropdown menu
    languageButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });

    // Handle language selection
    dropdownMenu.addEventListener('click', function (event) {
        if (event.target.closest('.language-option')) {
            const selectedOption = event.target.closest('.language-option');
            const lang = selectedOption.getAttribute('data-lang');
            const url = selectedOption.getAttribute('data-url');
            const flagSrc = selectedOption.querySelector('img').src;

            // Update the current language and flag
            currentLanguage.textContent = lang;
            currentFlag.src = flagSrc;

            // Redirect to the new URL
            window.location.href = url;
        }
    });

    // Close the dropdown menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!languageButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });


    // sidebar code
    const hamburger = document.getElementById('hamburger');
    const closeSidebar = document.getElementById('close_sidebar');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
    });

    // Optional: close sidebar if clicking outside
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
        }
    });
});