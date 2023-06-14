// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var char = window.prompt(
    "How many characters needed in password?\nEnter number between 8-128",
    "123"
  );
  var lowerCase = alert("Do you want to include lower case letters?");
  console.log(lowerCase);
  passwordText.value = password;
}
// Add in exceptions-
// add if choose certain elements

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
