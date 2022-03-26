// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var number;
var lowercase;
var uppercase;
var special;
var values = "";

window.alert("Time to generate a new passoword!");

lowerOptions = "abcdefghijklmnopqrstuvwxyz";
upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberOptions = "1234567890";
//double quote worked as functions, so they were omitted from the special options
specialOptions = [" ", "!", "#", "\\", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
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

  if (!number && !lowercase && !uppercase && !special) {
    window.alert("Please choose at least one option.")
  }
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
  //One
  else if (number) {
    values = values.concat(numberOptions);
  }
  else if (lowercase) {
    values = values.concat(lowerOptions);
  }
  else if (uppercase) {
    values = values.concat(upperOptions);
  }
  else if (special) {
    values = values.concat(specialOptions);
  };

  var password = ""; 

  for (var i = 0; i < criteria; i++) {
    password  += test();
  }

  //specify symbols
  //return value of string
  //return values;
  return password;
  //include test function
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
















































/*// Assignment code here
window.alert("Time to generate a new passoword!");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";
//see \ yellow font
var allchar = "";

var lowercase = window.confirm("Lower Case?")
  if (lowercase) {
    
  }
  else {

  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var charlimit = window.prompt("How many characters would you like?")
    if (charlimit < 8 || charlimit > 128 ) {
      window.alert("Please enter a value between 8 and 128.")
    }
    else {
      confirmNumber = window.confirm("Would you like numbers in your password?")
        if (confirmNumber = "yes" || "YES")
/*
        else ()
      confirmLowercase = window.confirm ("Would you like lowercase letters in your password?")
        if
      confirmUppercase = window.confirm ("Would you like uppercase letters in your password?")
        if
      confirmSpecial = window.confirm ("Would you like special characters in your password?")
        if
      confirmAllchar = window.confirm 
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
function generatePassword() {
  // Asks for user input
  window.prompt("How many characters ar erequired?")
    if { 
      
    }
*/