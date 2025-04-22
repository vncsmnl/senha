const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%&*()_+-=[]{}|;:,.<>?/";

let newPass = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function getSelectedCharset() {
    const includeLowercase = document.querySelector("#includeLowercase").checked;
    const includeUppercase = document.querySelector("#includeUppercase").checked;
    const includeNumbers = document.querySelector("#includeNumbers").checked;
    const includeSpecial = document.querySelector("#includeSpecial").checked;

    let selectedCharset = "";
    if (includeLowercase) selectedCharset += lowercase;
    if (includeUppercase) selectedCharset += uppercase;
    if (includeNumbers) selectedCharset += numbers;
    if (includeSpecial) selectedCharset += special;

    return selectedCharset || lowercase; // Default to lowercase if nothing selected
}

function genPass() {
    const charset = getSelectedCharset();
    let pass = "";

    for (let i = 0; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPass = pass;
}

function copyPass() {
    navigator.clipboard.writeText(newPass);
    alert("Senha copiada com sucesso!")
}
