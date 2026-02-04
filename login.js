document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.querySelector('.remember-me input').checked;
    const role = document.querySelector('.role-btn.active')?.getAttribute('data-role') || 'User';
    
    // Simple validation
    if (email && password) {
        // Extract name from email and format it properly
        const nameFromEmail = email.split('@')[0];
        // Replace dots and dashes with spaces, then capitalize each word
        const formattedName = nameFromEmail
            .replace(/[._-]/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        
        // Store login session
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userName', formattedName);
        sessionStorage.setItem('userRole', role);
        
        // If remember me is checked, store in localStorage
        if (rememberMe) {
            localStorage.setItem('rememberEmail', email);
        }
        
        // Redirect to dashboard
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Auto-fill email if "Remember me" was checked
window.addEventListener('load', function() {
    const rememberEmail = localStorage.getItem('rememberEmail');
    if (rememberEmail) {
        document.getElementById('email').value = rememberEmail;
        document.querySelector('.remember-me input').checked = true;
    }
    // Role toggle click handlers
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});