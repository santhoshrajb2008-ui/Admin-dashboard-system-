let userCount = 125;

function addUser() {
    userCount++;
    document.getElementById("users").textContent = userCount;
    alert("New user added!");
}