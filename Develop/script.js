// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//defining variables
var number;
var lowercase;
var uppercase;
var special;
var values = "";

//startup alert to show code is running (may change to console.log??)
window.alert("Time to generate a new password!");

//options for variables
lowerOptions = ["abcdefghijklmnopqrstuvwxyz"];
upperOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
numberOptions = ["1234567890"];
//double quote worked as functions, so they were omitted from the special options
specialOptions = [" ", "!", "#", "\\", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];

//function is represented as = to password in the writePassword function
function generatePassword() {
  //character limit if's
  var criteria = window.prompt("How many characters would you like?");
  if (criteria > 128 || criteria < 8) {
    window.alert("Password must be between 8 and 128 characters!");
  }
  else {
    number = window.confirm("Would you like numbers included?");
    lowercase = window.confirm("Would you like lowercase characters included?");
    uppercase = window.confirm("Would you like upper case characters included?");
    special = window.confirm("Would you like special characters included?");
  };
  console.log(criteria);

  //variable if's
  if (!number && !lowercase && !uppercase && !special) {
    window.alert("Please choose at least one option.")
  }
  if (number) {
    values = values.concat(numberOptions);
  }
  if (lowercase) {
    values = values.concat(lowerOptions);
  }
  if (uppercase) {
    values = values.concat(upperOptions);
  }
  if (special) {
    values = values.concat(specialOptions);
  };

  //empty string for password
  var password = []; 

  //for loop will extend passowrd limit to criteria length
  for (var i = 0; i < criteria; i++) {
    password  += test();
  }

  return password;
};

//moved this randomized function into the generate passoword function
function test() {
  var valueToUse = values[Math.floor(Math.random() * values.length)];
  // do something with the selected value
  //alert(valueToUse);
  return valueToUse;

} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert("Press 'ok' to view your new password! Please refresh the page if you want to create another password. Thanks for using my password generator ❤️");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();




  //Originally used all possible combination in an else if statement. Changed to if statements for indidivual vairables to make code shorter
  /* 
  //All
  else if (number && lowercase && uppercase && special) {
    values = values.concat(numberOptions, lowerOptions, upperOptions, specialOptions.join(""));
  }
  //All but one
  else if (number && lowercase && special) {
    values = values.concat(numberOptions, lowerOptions, specialOptions.join(""));
  }
  else if (number && lowercase && uppercase) {
    values = values.concat(numberOptions, lowerOptions, upperOptions);
  }
  else if (number && uppercase && special) {
    values = values.concat(numberOptions, upperOptions, specialOptions.join(""));
  }
  else if (uppercase && lowercase && special) {
    values = values.concat(upperOptions, lowerOptions, specialOptions.join(""));
  }
  //Only two
  else if (number && lowercase) {
    values = values.concat(numberOptions, lowerOptions);
  }
  else if (number && uppercase) {
    values = values.concat(numberOptions, upperOptions);
  }
  else if (number && special) {
    values = values.concat(numberOptions, specialOptions.join(""));
  }
  else if (uppercase && lowercase) {
    values = values.concat(upperOptions, lowerOptions);
  }
  else if (uppercase && special) {
    values = values.concat(upperOptions, specialOptions.join(""));
  }
  else if (lowercase && special) {
    values = values.concat(lowerOptions, specialOptions.join(""));
  }
  */
  //One
