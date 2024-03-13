
var selectedRole = ''; 

function selectRole(role) {
    selectedRole = role;
}

function logIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (selectedRole === 'student') {
        if(email ==="" || password ===""){
            alert("Please enter email or password.");
        }
        else if (email === 'longnhbd00361@fpt.edu.vn' && password === 'student123') {
            alert('Student login successful. Redirecting...');
            window.location.href = "./homepage.html";
        } else {
            alert('Pheo nhaa. Please try again!');
        }
    } else if (selectedRole === 'lecturer') {
        if(email ==="" || password ===""){
            alert("Please enter email or password.");
        }
        else if (email === 'lecturer@gmail.com' && password === 'lecturer123') {
            alert('Lecturer login successful. Redirecting...');
            window.location.href = "./homepage.html";
        } else {
            alert('Pheo nhaa. Please try again!');
        }
    } else {
        alert('Please select a role before logging in.');
    }
}

function signIn() {
    alert("Sign In successful as a admin!");
    window.location.href = "./homepage.html";
}







