// Function to switch between Vouchers and Ledger tabs
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Remove active class from buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Simulated Authentication Logic
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const statusText = document.getElementById('status');
const adminElements = document.querySelectorAll('.admin-only');

loginBtn.addEventListener('click', () => {
    // In a real app, this would open a password prompt connected to Firebase/Python
    const password = prompt("Enter Admin Password:");
    
    if (password === "admin123") { // DO NOT USE THIS FOR REAL SECURITY
        statusText.innerHTML = "Viewing as: <strong>Admin</strong>";
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        
        // Reveal all admin controls (upload, delete, forms)
        adminElements.forEach(el => el.classList.remove('hidden'));
    } else {
        alert("Incorrect Password.");
    }
});

logoutBtn.addEventListener('click', () => {
    statusText.innerHTML = "Viewing as: <strong>Public</strong>";
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    
    // Hide all admin controls
    adminElements.forEach(el => el.classList.add('hidden'));
});
