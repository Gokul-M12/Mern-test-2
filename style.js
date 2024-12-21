document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "admin123") {
        alert("Welcome Admin!");
        window.location.href = "admin.html";
    } else if (email && password) {
        alert("Login Successful!");
        window.location.href = "user.html";
    } else {
        alert("Invalid Credentials!");
    }
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration Successful!");
});