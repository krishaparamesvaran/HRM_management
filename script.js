// Logout button functionality
document.querySelector('.logout-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
});

// Update profile name from login
window.addEventListener('load', function() {
    const userName = sessionStorage.getItem('userName');
    if (userName) {
        document.getElementById('profileName').textContent = userName;
    }
});