var generatePassword = document.querySelector(".generatepassword");
var yourSecurePassword = document.querySelector(".yoursecurepassword.value");
var specialCheck = /[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/;
var numbCheck = /[0123456789]/;
var lAlCheck =/[abcdefghijklmnopqrstuvwxyz]/;
var uAlCheck =/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

function check() {
      if (x = 'false') {
        specialCheck = prompt('Enter any special charaters ');
        // document.write(x);
    }}


generatePassword.addEventListener("click", function(){
var text = document.inputform.txt.value;
confirm ('length of your password must b between 8 and 128');
var specialChar = prompt ('Enter any special characters');
var x = specialCheck.test(specialChar);
check();


var numb = prompt ('Enter any numbers');
var lAlpha = prompt ('Enter any lower case alpabet');
var uAlpha = prompt ('Enter any uppercase alphabet');
})

