// Assignment Code

//assigns button variable to #generate ID from HTML file
var generateBtn = document.querySelector("#generate");

//sets the generatePassword() function

function generatePassword() {

  //Establishes four variables for character libraries, including objects detailing their libraries and whether they will be used

  var lowercase = {
    library: "abcdefghijklmnopqrstuvwxyz",
    use: "",
  }

  var uppercase = {
    library: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    use: "",
  }
  
  var numerals = {
    library: "0123456789",
    use: "",
  }

  var special = {
    library: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    use: "",
}

  //establishes a variable into which to concatenate relevant character libraries

  var allchars = "";

  //establishes a variable into which to randomly add characters from the concatenated character libraries

  var passgen = "";

  //prompts whether to use the four character libraries and concatenates them sequentially based on their .use object value
  //All four libraries are selected to be used by default

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

  //sets the getpasslength() function

  function getpasslength() {

    //prompts for the digits variable to establish password length
    var digits = prompt("Enter Password Length, 8-128", 12);

    //checks that digits variable is a number between 8-128
    if (typeof digits != Number) {
      getpasslength;
    } else if (digits < 8) {
      getpasslength();
    } else if (digits > 128) {
      getpasslength();
    }

    //returns the digits variable's numerical value to the getpasslength() function
    return digits;
  }

  //sets passlength variable to the value kicked up by getpasslength() function
  var passlength = getpasslength();

  //checks that passgen variable is shorter than requested password length
  //if it is shorter, it adds a random value to passgen variable from the concatenated character libraries
  while (passlength > passgen.length) {
    passgen += allchars[Math.floor(Math.random() * allchars.length)];
  }

  return passgen;

}

// Writes generatePassword() output data to password variable and then from there to the #password ID
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, triggers writePassword function when button is clicked
generateBtn.addEventListener("click", writePassword);
