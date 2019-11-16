var generatePassword = document.querySelector(".generatepassword");
var yourSecurePassword = document.querySelector(".yoursecurepassword.value");
var specialCheck = /[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/;
var numbCheck = /[0123456789]/;
var lAlCheck = /[abcdefghijklmnopqrstuvwxyz]/;
var uAlCheck = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
var specialChar;
var numb;
var lAlpha;
var uAlpha;
var passwordArray =[];


function checkSpecial() {
  specialChar = prompt('Check your Special Charater and try again');
  sc = specialCheck.test(specialChar);
  if (sc === false) {
    checkSpecial();
  }
  else {
    passwordArray.push(specialChar);
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
    passwordArray.push(numb);
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
    passwordArray.push(lAlpha);
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
    passwordArray.push(uAlpha);
    return;
  }
}

function showPassword(){
  var addPassword = specialChar + numb + lAlpha + uAlpha;
  document.inputform.txt.value = addPassword;
  event.preventDefault();
}

generatePassword.addEventListener("click", function () {
  // var text = document.inputform.txt.value;
  //    document.write(text);
    alert("length of your password must b between 8 and 128");
    specialChar = prompt('Enter any special characters');
     if (specialChar === null){
       return;
    }
    var sc = specialCheck.test(specialChar);
       if (sc === false) {
      checkSpecial();
    }
    else {
      passwordArray.push(specialChar);
    }

    numb = prompt('Enter any numbers');
    if (numb === null){
      return;
    }
    var nc = numbCheck.test(numb);
    if (nc === false) {
      checkNumb();
    }
    else {
      passwordArray.push(numb);
    }

   lAlpha = prompt('Enter any lower case alpabet');
    if (lAlpha === null){
      return;
    }
    var lac = lAlCheck.test(lAlpha);
    if (lac === false) {
      checkLalpha();
    }
    else {
      passwordArray.push(lAlpha);
    }

   uAlpha = prompt('Enter any uppercase alphabet');
   passwordArray.push(uAlpha);
    if (uAlpha === null){
      return;
    }
    if (uac === false) {
      checkUalpha();
    }
    else {
      var uac = uAlCheck.test(uAlpha);
    }
    document.write (passwordArray);
showPassword();
})

// showPassword();
  