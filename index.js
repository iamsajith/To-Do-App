const form = document.getElementById('smt');
const email = document.getElementById('email');
const password = document.getElementById('password');
var count = 0

function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();


if(emailValue === '') { 
 console.log('no-blank')
 setErrorFor1('Email cannot be blank');
} else if (!isEmail(emailValue)) {
 console.log('not-valid')
 setErrorFor1('Not a valid email');
} else {
 setSuccessFor1();
 count = 0
 count += 1
}
if(passwordValue === '') {
 setErrorFor2('Password cannot be blank');
}
 else if(!isPassword(passwordValue)){ 
   setErrorFor2('Not a valid password');
 }
 else{
 setSuccessFor2();
 count += 1
 console.log(count)
}
if (count == 2){
 alert('You are logged in')
 return true
}
else{
 return false
}

}

function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function isPassword(password){
 return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)
}
var setErrorFor1 = (message)=>{
 const formControl = document.getElementsByTagName('small')[0];
	formControl.classList.add('error');
	formControl.innerHTML = message;
}
var setErrorFor2 = (message)=>{
 const formControl = document.getElementsByTagName('small')[1];
	formControl.className ="error";
	formControl.innerHTML = message;
}
var setSuccessFor1 = ()=>{
 document.getElementsByTagName('small')[0].className = "success"
}
var setSuccessFor2 = ()=>{
 document.getElementsByTagName('small')[1].className = "success"
}
