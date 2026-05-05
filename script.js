document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple logic for demonstration
    if ((user === "admin" && pass === "1234") ||
        (user === "admin2" && pass === "123") ||
        (user === "sopnendu" && pass === "sopnendu2002")) {
        message.style.color = "blue";
        message.textContent = "Login successful! Redirecting...";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}); document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple logic for demonstration
    if ((user === "admin" && pass === "1234") ||
        (user === "admin2" && pass === "123") ||
        (user === "sopnendu" && pass === "sopnendu2002")) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});