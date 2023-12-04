const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=";
let newPass = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function genPass() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPass = pass;

}

function copyPass() {
    navigator.clipboard.writeText(newPass);
    alert("Senha copiada com sucesso!")
}
