const defaultUsername = "Trakify";
const defaultPassword = "Trakify";


document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    if (username === defaultUsername && password === defaultPassword) {
       
        window.location.href = "logic.html";
    } else {
     
        alert("Invalid login. Please try again.");
    }
});