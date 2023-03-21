// Assignment code here
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "0123456789";
const specialChar = "!@#$%&*()^)_+=-,./<>?{}[]"

// Function for prompts
function getPasswordCriteria() {
  var length = prompt("Choose a password length (between 8 and 128 characters).")
  while (length < 8 || length > 128 || isNaN(length)) {
    length = prompt("Please choose a valid password length (between 8 and 128 characters).");
  }

  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  var includeUpperCase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecialChars = confirm("Do you want to include special characters?");

  while (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChars)) {
    alert("Please select at least one character type to include in your password.");
    includeLowerCase;
    includeUpperCase;
    includeNumeric;
    includeSpecialChars;
  }

  var passwordCriteria = {
    length: length,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecialChars: includeSpecialChars
  };

  return passwordCriteria;

}

//functions to generate password
function generatePassword() {
  var criteria = getPasswordCriteria();
  var charSet = "";

  if (criteria.includeLowerCase) {
    charSet += lowerCaseChar;
  }
  if (criteria.includeUpperCase) {
    charSet += upperCaseChar;
  }
  if (criteria.includeNumeric) {
    charSet += numericChar;
  }
  if (criteria.includeSpecialChars) {
    charSet += specialChar;
  }

  var password = "";
  for (var i = 0; i < criteria.length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
