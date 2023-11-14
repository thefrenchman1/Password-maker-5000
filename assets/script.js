// Assignment code here
var generatePassword = function() {
    // Ask user for password length
    var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
    // Check if input is a number
    if (isNaN(passwordLength)) {
        window.alert("Try again...this time with a number.");
        return generatePassword();
    }
  
    // Check if password is at least 8 characters
    if (passwordLength < 8) {
        window.alert("I'm gonna need a little bit more than that.");
        return generatePassword();
    }
  
    // Check if password is not more than 128 characters
    if (passwordLength > 128) {
        window.alert("Ok, now you're asking too much.");
        return generatePassword();
    }
  
    // Ask user for character types to include
    var includeLowercase = confirm("Might you want lowercase characters?");
    var includeUppercase = confirm("How about some big ones?");
    var includeNumbers = confirm("Want some digits?");
    var includeSpecial = confirm("And lastly how about some special characters?");
  
    // Check if user selected at least one character type
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        window.alert("You must select at least one character type.");
    }
  
    // Create array of character types to include
    var characterTypes = [];
    if (includeLowercase) {
        characterTypes.push("lowercase");
    }
    if (includeUppercase) {
        characterTypes.push("uppercase");
    }
    if (includeNumbers) {
        characterTypes.push("numbers");
    }
    if (includeSpecial) {
        characterTypes.push("special");
    }
  
    // Create object of character types and their corresponding character sets
    var characterSets = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        special: " !$%&'()*+,-./:;<=>?@[]^_`{|}~"
        };
  
    // Generate the password
    var generatedPassword = '';
    for (var i = 0; i < passwordLength; i++) {
        // Randomly select a character type
        var randomType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
  
        // Randomly select a character from the chosen character set
        var randomChar = characterSets[randomType][Math.floor(Math.random() * characterSets[randomType].length)];
  
        // Append the character to the generated password
        generatedPassword += randomChar;
    }
  
    return generatedPassword;
    };
  
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
  