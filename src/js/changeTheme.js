// ICON CHANGE CONSTANT

const switchBtn = document.querySelector('.changetheme')

// CHANGING THEME ON CLICK

const toggleTheme = () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light');
        localStorage.setItem('dark-mode', 'false');
    } else {
        localStorage.setItem('dark-mode', 'true');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light');
    }
};

// FUNCTION THAT SETTING THEME FROM LOCAL STORAGE

const setThemeOnLaunch = () => {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light');
    } else if (savedTheme === 'false') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light');
    }
};

// CHANGING THEME WHEN CLICKING ICON

switchBtn.addEventListener('click', toggleTheme);

// SETTING THEME FROM LOCAL STORAGE

setThemeOnLaunch();
