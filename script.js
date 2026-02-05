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

// Leave approval and rejection functionality
document.addEventListener('DOMContentLoaded', function() {
    const approveButtons = document.querySelectorAll('.card-body button[style*="background: #4ade80"]');
    const rejectButtons = document.querySelectorAll('.card-body button[style*="background: #ef4444"]');

    const pendingStat = document.querySelector('.stat-card.orange .stat-info h3');
    const approvedStat = document.querySelector('.stat-card.green .stat-info h3');

    approveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requestDiv = this.closest('div[style*="padding: 15px"]');
            if (requestDiv) {
                requestDiv.remove();
                // Update stats: decrease pending, increase approved
                let pendingCount = parseInt(pendingStat.textContent);
                let approvedCount = parseInt(approvedStat.textContent);
                pendingStat.textContent = pendingCount - 1;
                approvedStat.textContent = approvedCount + 1;
            }
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const requestDiv = this.closest('div[style*="padding: 15px"]');
            if (requestDiv) {
                requestDiv.remove();
                // Update stats: decrease pending
                let pendingCount = parseInt(pendingStat.textContent);
                pendingStat.textContent = pendingCount - 1;
            }
        });
    });
});
