// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordCriteria();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getPasswordCriteria() {
  var length = getLength();
  var needsSpecialChars = confirmSpecialChars();
  var needsUpperCase = confirmUpperCase();
  var needsLowerCase = confirmLowerCase();
  var needsNumbers = confirmNumbers();

  var password = createPasswordUsingCriteria(
    length,
    needsSpecialChars,
    needsUpperCase,
    needsLowerCase,
    needsNumbers
  );
  return password;
}

function getLength() {
  //prompt user to input a password length and and return their answer
  var passwordLength = prompt(
    "How long would you like your password to be? (minimum 8 characters, max 128"
  );
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Password length must be a number between 8-128 characters");
    return false;
  }

  return passwordLength;
}

function confirmSpecialChars() {
  //prompt user to say if they need special characters or not and return their answer
  var trueOrFalse = confirm("Does this password need special charcters?");
  return trueOrFalse;
}

function confirmUpperCase() {
  //prompt user to say if they need uperCase letters and return their answer
  var trueOrFalse = confirm(
    "Does this password need to contain upper case letters? "
  );
  return trueOrFalse;
}

function confirmLowerCase() {
  //prompt user to say if they need uperCase letters and return their answer
  var trueOrFalse = confirm(
    "Does this password need to contain lower case letters? "
  );
  return trueOrFalse;
}

function confirmNumbers() {
  //prompt user to say if they needs numbers or not and return their answer
  var trueOrFalse = confirm("Does this password need to contain numbers?");
  return trueOrFalse;
}

function createPasswordUsingCriteria(
  length,
  needsSpecialChars,
  needsUpperCase,
  needsLowerCase,
  needsNumbers
) {
  //use the info from generatePassword to actually create a password
  var password = "";

  for (var i = 1; password.length < length; i++) {
    if (needsSpecialChars) {
      //give password a special character
      password = password + "$";
    }
    if (needsUpperCase) {
      // give password an uppercase letter
      password = password + "A";
    }
    if (needsLowerCase) {
      //give password a lowercase letter
      password = password + "b";
    }
    if (needsNumbers) {
      //give password a number
      password = password + "2";
    }
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
