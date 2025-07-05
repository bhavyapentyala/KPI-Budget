function showSection(id) {
    document.querySelectorAll('.tool-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// Complaint Handling
document.getElementById('complaintForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this[0].value;
    const email = this[1].value;
    const complaint = this[2].value;

    const div = document.createElement('div');
    div.innerHTML = `<p><strong>${name}</strong> (${email}): ${complaint}</p>`;
    document.getElementById('complaintList').appendChild(div);
    this.reset();
});

// Incident Logging
document.getElementById('incidentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const system = this[0].value;
    const issue = this[1].value;

    const div = document.createElement('div');
    div.innerHTML = `<p><strong>${system}</strong> issue: ${issue}</p>`;
    document.getElementById('incidentList').appendChild(div);
    this.reset();
});

// Escalation Tracking
document.getElementById('escalationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const reason = this[0].value;
    const dept = this[1].value;

    const div = document.createElement('div');
    div.innerHTML = `<p>Escalation to <strong>${dept}</strong>: ${reason}</p>`;
    document.getElementById('escalationList').appendChild(div);
    this.reset();
});
