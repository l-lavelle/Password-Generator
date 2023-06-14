// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var char = window.prompt(
    "How many characters needed in password?\nEnter number between 8-128",
    "123"
  );
  var lowerCase = window.confirm("Do you want to include lowercase letters?");
  var upperCase = window.confirm("Do you want to include uppercase letters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var specialCharcters = window.confirm(
    "Do you want to include special characters?"
  );
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(specialCharcters);

  passwordText.value = password;
}
// Imput validated and at least one character type selected
// password generated and matches selected criteria
// passowrd is displayed

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
