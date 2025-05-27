// Student data
const students = [
    { id: "2019-3-11-004", name: "Fabliha Faiza", curriculum: "BA (Non-OBE)" },
    { id: "2019-3-11-017", name: "Sahara Bibi Afrin", curriculum: "BA (Non-OBE)" },
    { id: "2020-1-11-016", name: "Sadia Islam Shova", curriculum: "BA (Non-OBE)" },
    { id: "2020-1-11-039", name: "Jannatul Ferdous Busra", curriculum: "BA (Non-OBE)" },
    { id: "2020-1-11-043", name: "Mariam Rahman Sinha", curriculum: "BA (Non-OBE)" },
    { id: "2020-1-11-053", name: "Tamanna Akter Ankhi", curriculum: "BA (Non-OBE)" },
    { id: "2020-3-11-006", name: "Sabiha Ivnat", curriculum: "BA (Non-OBE)" },
    { id: "2021-1-11-009", name: "Ummay Lulu Mista", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-001", name: "Omme Salma", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-002", name: "Shaharin Hossain", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-003", name: "Oishe Islam", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-004", name: "Mahfuza Hossain Anamika", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-005", name: "Sabrina Jaman Meem", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-006", name: "Mahfuza Akter Samina", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-008", name: "Nusrat Kabir Neha", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-009", name: "Sadia Islam Meherun", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-010", name: "Anika Hossain", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-011", name: "Samira Rahman Eva", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-015", name: "Amena Khatun Liha", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-016", name: "Khadiza Akter", curriculum: "BA (Non-OBE)" },
    { id: "2021-3-11-017", name: "Jannatul Ferthous Jakia", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-001", name: "Mst.Jeba Akter", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-005", name: "Mst. Muskan Akter", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-006", name: "Maria Akter Moni", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-012", name: "Nusrat Jahan Ilmi", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-013", name: "Joya Dabi Sretry", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-014", name: "Raidah Haque", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-015", name: "Eshrat Jahan Ananna", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-017", name: "Vabna Akther", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-018", name: "Sumaiya Alam", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-020", name: "Shanta Islam Choity", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-022", name: "Nasrin Akther Mysha", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-023", name: "Nirupama Gosh Priya", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-026", name: "Abanti Saha", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-027", name: "Tamanna Islam", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-028", name: "Sumaia Islam", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-031", name: "Tahmina Akter", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-032", name: "Sayema Hasan", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-033", name: "Fatema Tuj Johora Prome", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-035", name: "Ruhina Rahman", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-037", name: "Layla Naznin Eva", curriculum: "BA (Non-OBE)" },
    { id: "2022-1-11-039", name: "Afsana Mimi", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-001", name: "Kamrun Nesha Kuasha Kashfi", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-003", name: "Jakiya Sultan Tasin", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-006", name: "Sumaiya Tabassum Ana", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-008", name: "Shariqa Saifullah", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-009", name: "Tanzina Hossain Paban", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-010", name: "Marzia Akter Lubna", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-012", name: "Sanjida Islam", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-013", name: "Maria Chowdhury Nujha", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-014", name: "Tahsin Rahman", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-015", name: "Faria Rahman Mim", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-017", name: "Shorna Akter Supti", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-022", name: "Mohima Islam Puspo", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-023", name: "Deba Goswami", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-025", name: "Jannatul Ferdous", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-026", name: "Shahara Khatun", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-030", name: "Marzia Zannat", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-032", name: "Fahamida Akter Lubna", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-033", name: "Fabiha Jannat", curriculum: "BA (Non-OBE)" },
    { id: "2022-3-11-035", name: "Lamiya Hossain", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-003", name: "Tamanna Tabassum Oyshi", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-004", name: "Mahima Akter", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-005", name: "Aysha Siddika Alve", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-007", name: "Sumaiya Amrin", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-009", name: "Nadia Afrin", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-010", name: "Sadia Farhana", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-011", name: "Sayka Zerin Khusbu", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-013", name: "Sharmin Akter", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-014", name: "Fiha Ahmed", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-016", name: "Anwara Gazi Noha", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-017", name: "Sumaiya Tasnim", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-018", name: "Nisa Akter", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-019", name: "Umme Labiba", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-022", name: "Bijorita Abedeen", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-024", name: "Khadija Akter Munni", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-027", name: "Humyra Bin Jannatara", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-030", name: "Nafisa Amir Esha", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-031", name: "Ummay Hany Safa", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-032", name: "Mili Akter", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-033", name: "Mehjabeen Rizwan", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-035", name: "Tamanna Islam Sadia", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-037", name: "Nusrat Jahan Labiba", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-038", name: "Anindita Bhadra", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-040", name: "Jannatul Ferdaus Fatema", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-044", name: "Momena Bagum", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-046", name: "Papiya Rahman Mim", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-048", name: "Afia Anzum Hafsa", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-050", name: "Senthya Khan Mumu", curriculum: "BA (Non-OBE)" },
    { id: "2023-1-11-052", name: "Anika Tabassum", curriculum: "BA (Non-OBE)" }
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