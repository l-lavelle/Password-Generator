// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); /* function that doesnt exist yet*/

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Imput validated and at least one character type selected
// password generated and matches selected criteria
// passowrd is displayed

function generatePassword() {
  var char = window.prompt(
    "How many characters needed in password?\nEnter number between 8-128"
  );
  console.log(char);
  char = parseInt(char);

  // cant cancel in while loop
  while (char !== null && (char < 8 || char >= 129 || isNaN(char))) {
    char = window.prompt("Please enter valid number between 8-128");
    console.log(char);
  }

  // function confirmPrompts() {
  //   var lowerCase = window.confirm("Do you want to include lowercase letters?");
  //   var upperCase = window.confirm("Do you want to include uppercase letters?");
  //   var numbers = window.confirm("Do you want to include numbers?");
  //   var specialCharcters = window.confirm(
  //     "Do you want to include special characters?"
  //   );
  // }

  var lowerCase = window.confirm("Do you want to include lowercase letters?");
  var upperCase = window.confirm("Do you want to include uppercase letters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var specialCharcters = window.confirm(
    "Do you want to include special characters?"
  );
  // confirmPrompts();

  while (
    lowerCase === false &&
    upperCase === false &&
    numbers === false &&
    specialCharcters === false
  ) {
    window.alert("Please select yes for at least one of the following prompts");
    var lowerCase = window.confirm("Do you want to include lowercase letters?");
    var upperCase = window.confirm("Do you want to include uppercase letters?");
    var numbers = window.confirm("Do you want to include numbers?");
    var specialCharcters = window.confirm(
      "Do you want to include special characters?"
    );
    // confirmPrompts();
  }

  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(specialCharcters);

  return char;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var char = window.prompt(
//   "How many characters needed in password?\nEnter number between 8-128",
//   "123"
// );
// if (typeof char === "string") {
//   window.alert("Enter a number");
// }
// var lowerCase = window.confirm("Do you want to include lowercase letters?");
// var upperCase = window.confirm("Do you want to include uppercase letters?");
// var numbers = window.confirm("Do you want to include numbers?");
// var specialCharcters = window.confirm(
//   "Do you want to include special characters?"
// );

// console.log(lowerCase);
// console.log(upperCase);
// console.log(numbers);
// console.log(specialCharcters);

// https://www.w3schools.com/js/js_validation_api.asp
// https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function
