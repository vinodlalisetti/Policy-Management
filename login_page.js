const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vinod" && password === "password") {
        alert("You have successfully logged in.");
        location.replace("admin_operations.HTML");
    } else
        alert("Invalid username or password");
    
})