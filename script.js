// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
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
  console.log(char);

  // doesnt cancel out runs loop code 
  if (char !== null) {
    while (char !== null && (char < 8 || char >= 129 || isNaN(char))) {
      char = window.prompt("Please enter valid number between 8-128");
      console.log(char);
    }
  }

  var lowerCase;
  var upperCase;
  var numbers;
  var specialCharcters;

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

  while (
    lowerCase === false &&
    upperCase === false &&
    numbers === false &&
    specialCharcters === false
  ) {
    window.alert("Please select yes for at least one of the following prompts");
    confirmPrompts();
  }

  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(specialCharcters);


  var numberArray = "1234567890";
  var lowerArray= "abcdefghijklmnopqrstuvwxyz"
  var upperArray= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialArray= "@#$%^&*()_+=~|{}[]<>?/-"

  var trialPassword = "";
  trialPassword+= numberArray[Math.floor(Math.random()*numberArray.length)];
  trialPassword+= lowerArray[Math.floor(Math.random()*lowerArray.length)];
  trialPassword+= upperArray[Math.floor(Math.random()*upperArray.length)];
  trialPassword+= specialArray[Math.floor(Math.random()*specialArray.length)];

  while(char> trialPassword.length){
    trialPassword+= upperArray[Math.floor(Math.random()*upperArray.length)]
  }
  console.log(trialPassword)
  console.log(trialPassword.length)


  // var numberPassword= numberArray[Math.floor(Math.random()*numberArray.length)]
  // console.log(numberPassword)
  
  // var ppppp
  // for (var i=0; i<=char; i++){
  //   var trial=[Math.floor(Math.random()*numberArray.length)]
  //   ppppp+=numberArray.substring(trial,trial+1)
  // };
  // console.log("trial is " + ppppp)

  
  return char;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Resources:
// https://www.w3schools.com/js/js_validation_api.asp
// https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function



// https://www.youtube.com/watch?v=Xrsb9SiF3a8 best youtube
// https://www.kirupa.com/html5/picking_random_item_from_array.htm 