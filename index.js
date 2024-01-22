const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let passwordEl = document.getElementById("password-el")

// return random character (Math.random)
function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// generate password (for loop)
function generatePassword() {
    let password = ""
     for (let i = 0; i < passwordLength; i++) {
        password += randomCharacter()
    }
    passwordEl.textContent = password;
}


console.log(generatePassword())