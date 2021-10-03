let generateBtn = document.querySelector('#generate');

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
}

function generatePassword() {

    let counter = 0;
    let generatedPasswordHolder = [];

    let userInput = prompt("How many characters for your password (8-128)");
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
    let upperCase = confirm("Would you like to include UpperCase letters?");
    let passNumbers = confirm("Would you like to include Numbers?");
    let passSymb = confirm("Would you like to include Symbols?");

    do {
        let lowerLett = Math.floor(Math.random() * 25) + 0;
        let lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        generatedPasswordHolder.push(lowerAlph[lowerLett]);

        if (upperCase == true) {
            let upperLett = Math.floor(Math.random() * 25) + 0;
            let capsAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            generatedPasswordHolder.push(capsAlph[upperLett]);
        }

        if (passNumbers == true) {
            let passNum = Math.floor(Math.random() * 9) + 0;
            let numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            generatedPasswordHolder.push(numbs[passNum]);
        }

        if (passSymb == true) {
            let passChar = Math.floor(Math.random() * 25) + 0;
            let passSymb = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
            generatedPasswordHolder.push(passSymb[passChar]);
        }

        counter++;
    } while (counter <= userInput);

    let arrayToString = generatedPasswordHolder.toString();

    return arrayToString;

}
generateBtn.addEventListener('click', writePassword);
