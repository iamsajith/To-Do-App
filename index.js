const form = document.getElementById("smt");
const username = document.getElementById("username");
const password = document.getElementById("password");
var count = 0;

var checkInputs = (callback) => {
  const userValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (userValue === "") {
    console.log("no-blank");
    setErrorFor1("Username cannot be blank");
  } else if (userValue != "admin") {
    console.log("not-valid");
    setErrorFor1("Username is not found");
  } else {
    setSuccessFor1();
    count = 0;
    count += 1;
  }
  if (passwordValue === "") {
    setErrorFor2("Password cannot be blank");
  } else if (passwordValue != "12345") {
    setErrorFor2("Not a valid password");
  } else {
    setSuccessFor2();
    count += 1;
    console.log(count);
  }
  var out = callback();
  return out;
};
var redirect = () => {
  if (count == 2) {
    return true;
  } else {
    return false;
  }
};

var setErrorFor1 = (message) => {
  const formControl = document.getElementsByTagName("small")[0];
  formControl.classList.add("error");
  formControl.innerHTML = message;
};
var setErrorFor2 = (message) => {
  const formControl = document.getElementsByTagName("small")[1];
  formControl.className = "error";
  formControl.innerHTML = message;
};
var setSuccessFor1 = () => {
  document.getElementsByTagName("small")[0].className = "success";
};
var setSuccessFor2 = () => {
  document.getElementsByTagName("small")[1].className = "success";
};
