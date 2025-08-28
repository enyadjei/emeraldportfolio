function toggleTheme() {
            const body = document.body;
            const themeBtn = document.getElementById('themeToggle');
            const sunIcon = document.getElementById('sunIcon');
            const moonIcon = document.getElementById('moonIcon');
            
            if (body.style.backgroundColor === 'rgb(17, 24, 39)' || body.style.backgroundColor === '#111827') {
                // Switch to light mode
                body.style.backgroundColor = '#ffffff';
                body.style.color = '#2c2c2c';
                themeBtn.classList.remove('dark-mode');
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                // Switch to dark mode
                body.style.backgroundColor = '#111827';
                body.style.color = '#f9fafb';
                themeBtn.classList.add('dark-mode');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }