let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")
let passLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

document.getElementById("press").onclick = function() {
 let randomPassword = ""
 let randomPassword2 = ""
 for (let i = 0; i < passLength; i++) {
    randomPassword += getRandomCharacter()
    randomPassword2 += getRandomCharacter()
 }
    pass1.textContent = randomPassword
    pass2.textContent = randomPassword2
};

document.getElementById("clear").onclick = function() {
    pass1.textContent = ""
    pass2.textContent = ""
}