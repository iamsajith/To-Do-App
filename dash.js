var l = 0;
var apiData = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var response = JSON.parse(xhttp.responseText);
      var output = "";
      for (var i = 0; i < response.length; i++) {
        l = response.length;
        var fetch = response[i].title;
        output += `<div class="d-flex justify-content-start align-items-center p-3" id="todo-cont"><input type="checkbox" id="check" class="form-check-input m-3 p-2" onclick="myFunction();">${fetch}
        </div>`;
        document.getElementById("todo-list").innerHTML = output;
      }
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
};
var count = 0;
var myFunction = () => {
  let p = new Promise((resolve) => {
    var check = document.getElementsByTagName("input");
    count = 0;
    for (let i = 0; i < l; i++) {
      if (check[i].checked == true) {
        count += 1;
      }
    }
    if (count == 5) {
      resolve("Five Tasks have been Successfully Completed");
    } else {
      count -= 1;
    }
  });
  p.then((message) => {
    alert(message);
  });
};
