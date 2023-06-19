// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to prompt for password length
function generatePassword() {
  var char = window.prompt(
    "How many characters needed in password?\nEnter number between 8-128"
  );
  char = parseInt(char);

  if (char !== null) {
    while (char !== null && (char < 8 || char >= 129 || isNaN(char))) {
      char = window.prompt("Please enter valid number between 8-128");
    }
  }

  var lowerCase;
  var upperCase;
  var numbers;
  var specialCharcters;

  // function to prompt for password criteria
  function confirmPrompts() {
    lowerCase = window.confirm("Do you want to include lowercase letters?");
    upperCase = window.confirm("Do you want to include uppercase letters?");
    numbers = window.confirm("Do you want to include numbers?");
    specialCharcters = window.confirm(
      "Do you want to include special characters?"
    );
  }

  if (char !== null) {
    confirmPrompts();
  }

  // Check that at least one criteria is selected 
  while (
    lowerCase === false &&
    upperCase === false &&
    numbers === false &&
    specialCharcters === false
  ) {
    window.alert("Please select yes for at least one of the following prompts");
    confirmPrompts();
  }

  // Input strings for password
  var allnumbers = "1234567890";
  var lowerArray= "abcdefghijklmnopqrstuvwxyz"
  var upperArray= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialArray= "@#$%^&*()_+=~|{}[]<>?/-"
  var passwordCriteria=""

  if (lowerCase===true){
    passwordCriteria+=lowerArray
  }
  if (upperCase===true){
    passwordCriteria+=upperArray
  }
  if (numbers===true){
    passwordCriteria+=allnumbers
  }
  if (specialCharcters===true){
    passwordCriteria+=specialArray
  }
  
  // Randomly select value from passwordCriteria 
  var userPassword = "";
  while(char> userPassword.length){
    userPassword+= passwordCriteria[Math.floor(Math.random()*passwordCriteria.length)]
  }

  return userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
