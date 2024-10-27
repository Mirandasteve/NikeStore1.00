document.addEventListener("DOMContentLoaded", function () {
    const authBtn = document.getElementById("auth-btn");

    // Check login status and update button text
    function updateAuthButton() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            authBtn.textContent = "Logout";
        } else {
            authBtn.textContent = "Login";
        }
    }

    // Initialize button state
    updateAuthButton();

    // Toggle login/logout action
    authBtn.addEventListener("click", function () {
        if (localStorage.getItem("isLoggedIn") === "true") {
            localStorage.removeItem("isLoggedIn");
            alert("You have been logged out.");
            updateAuthButton();
            window.location.href = "login.html"; // Redirect to login page after alert
        } else {
            window.location.href = "login.html"; // Redirect to login page
        }
    });      
});


