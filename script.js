// These are the special characters you can use to generate password
  var specialCharacters = [" ","@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
  
// Here are the numbers that can be used to create password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
// I present to you the lower case letters to produce a new password
  var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
// I give you the form of upper case letters that can be included in the inception of this password
  var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
// This function will hopefully ask the user about password length
  function getPasswordOptions() {
    var length = parseInt(prompt(
      " 🤖 How many characters would you like in your password? 🌈 "
    ));
  
// if statement cause this needs to be placed as number, if not, this message will appear
    if (isNaN(length) === true) {
      alert(" 🤖 Password length information must be given with the mathematical object known as number, no letters please 🐸🍵");
      return;
    }
  
// if statement to make sure password has at least 8 characters
    if (length < 8) {
      alert("What is this a password for ants? 🐜 Please use least 8 characters");
      return;
    }
  
// if statement to make sure password is not too damn long
    if (length > 128) {
      alert("👏Password 👏 is 👏 TOO 👏 DAMN 👏 LONG, please make it less than 129 characters 🐳");
      return;
    }
  
// Variable to ask if person wants special characters
      var hasSpecialCharacters = confirm(
        "Do you want special characters? 🔮 Click OK for yes, CANCEL for no."
      );
    
// Variable to ask if person needs numbers in password and his life
    var hasNumericCharacters = confirm(
      "Do you want numbers? 🤓 Click OK for yes, CANCEL for no."
    );
  
// Variable to ask about lowercase letter goodness 
    var hasLowerCasedCharacters = confirm(
      "Do you want lowercase letters? 🐛 Click OK for yes, CANCEL for no."
    );
  
// Variable to ask about UPPERCASE!! I like to yell. 
    var hasUpperCasedCharacters = confirm(
      "Do you want UPPERCASE letters? 🦖 Click OK for yes, CANCEL for no."
    );
  
// if statement to make sure user chooses at least one of the variables given above, cause we need something to work with.
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert("We cannot compute 🤖. Please select at least one of the options 🥳");
      return;
    }

 // hopefully this gets to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
  }
  
  // Function that gets random elements
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  // Function to create password
  function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
  
    var possibleCharacters = [];
  
    var guaranteedCharacters = [];
  
// if statements to make sure that the arrays of numbers,characters and letters are added based on the decisions the user made, I rewrote this like 100 times. 
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
 
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
  
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
  

    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
// This passes the string into writePassword and hopefully this thriatlon will be over soon.
    return result.join("");
  }
  

  var copyBtn = document.querySelector("#copy");
  var generateBtn = document.querySelector("#generate");
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
  }
  
  function copyToClipboard() {
    var passwordText = document.querySelector("#password");
  
    passwordText.select();
    document.execCommand("copy");
  
    alert(
      "🤖 Password " + passwordText.value + " was successfully placed in clipboard with success 📝💻 "
    );
  }
  

  generateBtn.addEventListener("click", writePassword);
  
  copyBtn.addEventListener("click", copyToClipboard);