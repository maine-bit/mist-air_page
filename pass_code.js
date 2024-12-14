// JavaScript to check the password
function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var correctPassword = "urloved8"; // Set the correct password here
    
    if (password === correctPassword) {
      document.getElementById("passwordOverlay").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    } else {
      document.getElementById("errorMessage").style.display = "block";
    }
  }
