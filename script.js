document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodGroup = document.getElementById('blood-group').value;
    const phone = document.getElementById('phone').value;
    const disease = document.getElementById('disease').value;

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // You can handle the form data here, for example, sending it to a server
    alert(`Thank you for your donation!\nName: ${name}\nAge: ${age}\nBlood Group: ${bloodGroup}\nPhone: ${phone}\nDisease Info: ${disease}`);
});
