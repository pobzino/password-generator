const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")
let password = ""
let newPassword = ""
createdPassword = false

function generatePassword() {
    if (createdPassword === false) {
        for (i = 0; i < 15; i++) {
            let randomiser = Math.floor(Math.random() * characters.length)
            password += characters[randomiser]
        }
        passwordOne.textContent += password
        password = ''
        for (i = 0; i < 15; i++) {
            let randomiser = Math.floor(Math.random() * characters.length)
            password += characters[randomiser]
        }
        passwordTwo.textContent += password
        createdPassword = true
    }
    else {
        clearPassword()
        passwordOne.textContent = password
        passwordTwo.textContent = password
        for (i = 0; i < 15; i++) {
            let randomiser = Math.floor(Math.random() * characters.length)
            password += characters[randomiser]
        }
        passwordOne.textContent += password
        password = ''
        for (i = 0; i < 15; i++) {
            let randomiser = Math.floor(Math.random() * characters.length)
            password += characters[randomiser]
        }
        passwordTwo.textContent += password


    }
}

function clearPassword() {
    password = ""
}