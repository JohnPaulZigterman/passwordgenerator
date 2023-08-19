// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercase = {
    library: "abcdefghijklmnopqrstuvwxyz",
    use: "N",
  }

  var uppercase = {
    library: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    use: "N",
  }
  
  var numerals = {
    library: "0123456789",
    use: "N",
  }

  var special = {
    library: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    use: "N",
}

  var allchars = "";

  var passgen = "";

  lowercase.use = prompt("Use lowercase characters? Y/N", "Y");

  if (lowercase.use == "Y") {
    allchars = allchars.concat(lowercase.library);
  }
    
  uppercase.use = prompt("Use uppercase characters? Y/N", "Y");

  if (uppercase.use == "Y") {
    allchars = allchars.concat(uppercase.library);
  }
  
  numerals.use = prompt("Use numeric characters? Y/N", "Y");

  if (numerals.use == "Y") {
    allchars = allchars.concat(numerals.library);
  }
  
  special.use = prompt("Use special characters? Y/N", "Y");

  if (special.use == "Y") {
    allchars = allchars.concat(special.library);
  }

  var passlength = prompt("Enter Password Length, 8-128", 12);

  while (passlength > passgen.length) {
    passgen += allchars[Math.floor(Math.random() * allchars.length)];
  }

  return passgen;

}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
