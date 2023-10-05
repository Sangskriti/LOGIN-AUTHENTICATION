document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "user" && password === "password") {
        // Successful login
        document.getElementById("message").innerHTML = "Login successful!";
    } 
    else {
        // Failed login
        document.getElementById("message").innerHTML = "Invalid username or password.";
    }
});
