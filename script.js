var generatePassword = document.querySelector(".generatepassword");
var yourSecurePassword = document.querySelector(".yoursecurepassword.value");
var specialCheck = /[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/;
var numbCheck = /[0123456789]/;
var lAlCheck = /[abcdefghijklmnopqrstuvwxyz]/;
var uAlCheck = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

function checkSpecial() {
  specialChar = prompt('Check your Special Charater and try again');
  sc = specialCheck.test(specialChar);
  if (sc === false) {
    checkSpecial();
  }
  else {
    return;
  }
}

function checkNumb() {
  numb = prompt('Check your Number entry and try again');
  nc = numbCheck.test(numb);
  if (nc === false) {
    checkNumb();
  }
  else {
    return;
  }
}

function checkLapha() {
  lAlpha = prompt('Please check the lower case entry and try again');
  var lac = lAlCheck.test(lAlpha);
  if (lac === false) {
    checkLapha();
  }
  else {
    return;
  }
}


generatePassword.addEventListener("click", function () {
  var text = document.inputform.txt.value;
  confirm('length of your password must b between 8 and 128');
  var specialChar = prompt('Enter any special characters');
  var sc = specialCheck.test(specialChar);
  if (sc === false) {
    checkSpecial();
  }

  var numb = prompt('Enter any numbers');
  var nc = numbCheck.test(numb);
  if (nc === false) {
    checkNumb();
  }

  var lAlpha = prompt('Enter any lower case alpabet');
  var lac = lAlCheck.test(lAlpha);
  if (lac === false) {
    checkLapha();
  }

  var uAlpha = prompt('Enter any uppercase alphabet');
})

