document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  const validUsername = "mirandasteve@123";
  const validPassword = "steve123";

  if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "Store.html";
  } else {
      errorMessage.textContent = "Invalid username or password. Please try again.";
      errorMessage.style.color = "red";
  }
});
