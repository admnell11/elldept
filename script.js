// Student data
const students = [
    { id: "2019-3-11-004", name: "Fabliha Faiza", curriculum: "BA (Non-OBE)" },
    { id: "2019-3-11-017", name: "Sahara Bibi Afrin", curriculum: "BA (Non-OBE)" },
    // ... Add all other students here
];

// Time display
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
}

// Login validation
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation - replace with proper authentication in production
    if (username === "admin" && password === "admin123") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        populateTable();
        showTime();
        setInterval(showTime, 1000);
    } else {
        alert("Invalid credentials");
    }
}

// Populate table with student data
function populateTable() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.curriculum}</td>
        </tr>
    `).join('');
}