document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard loaded.");
    // Fetch and display data from APIs
    fetch('/api/dashboard')
        .then(response => response.json())
        .then(data => {
            console.log("Dashboard data:", data);
            // Update UI with data
        })
        .catch(error => console.error("Error loading dashboard data:", error));
});

document.getElementById('recent-orders').addEventListener('click', function() {
    window.location.href = 'orders.html'; // Navigate to orders page
});

document.getElementById('inventory-alerts').addEventListener('click', function() {
    window.location.href = 'inventory.html'; // Navigate to inventory page
});

document.getElementById('suppliers-alerts').addEventListener('click', function() {
    window.location.href = 'suppliers.html'; // Navigate to inventory page
});