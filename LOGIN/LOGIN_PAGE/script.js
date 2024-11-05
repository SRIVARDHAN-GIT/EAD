document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    alert(`Name: ${name}\nPassword: ${password}\nEmail: ${email}\nGender: ${gender.value}`);
    
    // Here you could send the data to a server or perform other actions
});
