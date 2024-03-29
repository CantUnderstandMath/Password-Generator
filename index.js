const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")
let passEl = document.getElementById("pass-el")

function addCopyFunctionality() {
    const passwordEl = document.getElementById("password-el");

    passwordEl.addEventListener("click", function() {
        const password = passwordEl.textContent;
        navigator.clipboard.writeText(password).then(function() {
            passwordEl.textContent = "Copied!";
        });
    });
}

function addCopyFunctionality2() {
    const passEl = document.getElementById("pass-el");

    passEl.addEventListener("click", function() {
        const password = passEl.textContent;
        navigator.clipboard.writeText(password).then(function() {
            passEl.textContent = "Copied!";
        });
    });
}

window.addEventListener("load", function() {
    addCopyFunctionality();
});

// return random character (Math.random)
function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// generate password (for loop)
function generatePassword() {
    let passwordLength = document.getElementById("password-length").value
    let password = ""
    let passwordTwo = ""
     for (let i = 0; i < passwordLength; i++) {
        password += randomCharacter()
        passwordTwo += randomCharacter()
    }
    passwordEl.textContent = password;
    passEl.textContent = passwordTwo;
}