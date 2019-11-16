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

function checkLalpha() {
  lAlpha = prompt('Please check the lower case entry and try again');
  var lac = lAlCheck.test(lAlpha);
  if (lac === false) {
    checkLalpha();
  }
  else {
    return;
  }
}

function checkUalpha() {
  uAlpha = prompt('Please check the Upper case entry and try again');
  var uac = uAlCheck.test(uAlpha);
  if (uac === false) {
    checkUalpha();
  }
  else {
    return;
  }
}


generatePassword.addEventListener("click", function () {
  // var text = document.inputform.txt.value;
 
    alert("length of your password must b between 8 and 128");
    var specialChar = prompt('Enter any special characters');
    if (specialChar === null){
      return;
    }
    var sc = specialCheck.test(specialChar);
    if (sc === false) {
      checkSpecial();
    }

    var numb = prompt('Enter any numbers');
    if (numb === null){
      return;
    }
    var nc = numbCheck.test(numb);
    if (nc === false) {
      checkNumb();
    }

    var lAlpha = prompt('Enter any lower case alpabet');
    if (lAlpha === null){
      return;
    }
    var lac = lAlCheck.test(lAlpha);
    if (lac === false) {
      checkLalpha();
    }

    var uAlpha = prompt('Enter any uppercase alphabet');
    if (uAlpha === null){
      return;
    }
    var uac = uAlCheck.test(uAlpha);
    if (uac === false) {
      checkUalpha();
    }
})

