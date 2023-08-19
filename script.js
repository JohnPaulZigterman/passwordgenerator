// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var uselower = prompt("Use lowercase characters? Y/N", "Y");
  var useupper = prompt("Use uppercase characters? Y/N", "Y");
  var usenumerals = prompt("Use numeric characters? Y/N", "Y");
  var usespecial = prompt("Use special characters? Y/N", "Y");
  var passlength = prompt("Enter Password Length", "12");

  var allcharacters = "";

  if (uselower == "Y") {
    var allcharacters = allcharacters.concat(lowercase);
  }

  console.log(allcharacters);

}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
