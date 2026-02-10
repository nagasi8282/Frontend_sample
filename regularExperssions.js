let name = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let nameText = document.getElementById("nameText");
let emailText = document.getElementById("emailText");
let passwordText = document.getElementById("passwordText");

let form = document.getElementById("form");

let nameRegExp = /^[A-Z][a-z]{2,}$/; 
let emailRegExp = /^[a-z]+[0-9]{2,3}@[a-z]{2,5}\.[a-z]{2,3}$/;
let passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{2,4})(?=.*[!@#$%^&*_]).{8,}$/;


name.addEventListener("input", () => {
    if (!nameRegExp.test(name.value)) {
        nameText.innerText = "Invalid name format";
    } else {
        nameText.innerText = "valid name format";
        nameText.style.color="green";
    }
});


email.addEventListener("input", () => {
    if (!emailRegExp.test(email.value)) {
        emailText.innerText = "Invalid email format";
    } else {
        emailText.innerText = "valid email format";
        emailText.style.color = "green";
    }
});


password.addEventListener("input", () => {
    if (!passwordRegExp.test(password.value)) {
        passwordText.innerText =
            "Invalid password format";
    } else {
        passwordText.innerText = "valid password format";
        passwordText.style.color="green";
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        nameRegExp.test(name.value) &&
        emailRegExp.test(email.value) &&
        passwordRegExp.test(password.value)
    ) {
        alert("Form Submitted Successfully ✅");
    } else {
        alert("Please fix the errors ❌");
    }
});
