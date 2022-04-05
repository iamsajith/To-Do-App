var apiData=()=>{
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = () => {
if (xhttp.readyState === 4 && xhttp.status === 200){
 var response = JSON.parse(xhttp.responseText);
 var output = "";
 for(var i = 0; i <response.length; i++){
  var fetch = response[i].title
  output += `<div class="d-flex justify-content-start align-items-center p-3" id="todo-cont"><input type="checkbox" id="check" class="form-check-input mx-3" onclick="myFunction()">${fetch}
</div>`;
  document.getElementById("todo-list").innerHTML = output;
 }
 
}
 }
 xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
 xhttp.send();
}
var check = document.getElementById('check');
var count = 0
var myFunction = ()=>{
if (check.checked==true){
count += 1
console.log(count)
}
}