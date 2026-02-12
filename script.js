// Get references to the form elements
const attendanceForm = document.getElementById('attendanceForm');
const attendanceSelect = document.getElementById('attendance');
const extraInfoDiv = document.getElementById('extraInfo');
const topicInput = document.getElementById('topic');
const reasonInput = document.getElementById('reason');

// Event listener to toggle additional fields based on attendance status
attendanceSelect.addEventListener('change', function() {
    if (attendanceSelect.value === 'present') {
        // Show the "Today's Topic" field and hide the "Reason for Absence" field
        extraInfoDiv.style.display = 'block';
        topicInput.style.display = 'inline-block';
        reasonInput.style.display = 'none';
    } else if (attendanceSelect.value === 'absent') {
        // Show the "Reason for Absence" field and hide the "Today's Topic" field
        extraInfoDiv.style.display = 'block';
        reasonInput.style.display = 'inline-block';
        topicInput.style.display = 'none';
    } else {
        // Hide the additional fields if no attendance option is selected
        extraInfoDiv.style.display = 'none';
    }
});

// Form submission handler
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;
    const attendance = attendanceSelect.value;
    const topic = topicInput.value;
    const reason = reasonInput.value;

    // Validation checks
    if (!name || !code || !attendance) {
        alert("Please fill in all the required fields.");
        return;
    }

    if (attendance === 'present' && !topic) {
        alert("Please provide the topic if you are present.");
        return;
    }

    if (attendance === 'absent' && !reason) {
        alert("Please provide a reason for your absence.");
        return;
    }

    // If all checks pass, log the form data to the console (or you can send it to a server)
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Code/Roll No:", code);
    console.log("Attendance:", attendance);
    if (attendance === 'present') {
        console.log("Today's Topic:", topic);
    } else {
        console.log("Reason for Absence:", reason);
    }

    // Clear the form after submission (optional)
    attendanceForm.reset();
    extraInfoDiv.style.display = 'none';
});
