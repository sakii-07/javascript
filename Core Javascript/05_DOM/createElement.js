var div = document.getElementById("box")

// name label
var label = document.createElement("label");
label.innerHTML = "Name :"
div.appendChild(label);

var input = document.createElement("input");
input.type = "text"
input.placeholder="Enter Name"
div.appendChild(input);


div.appendChild( document.createElement("br"))
div.appendChild( document.createElement("br"))

// password
var label1 = document.createElement("label");
label1.innerHTML = "Password :"
div.appendChild(label1);


var input1 = document.createElement("input");
input1.type = "password"
input1.placeholder="Enter password"
div.appendChild(input1);

div.appendChild(document.createElement("br"))
div.appendChild(document.createElement("br"))

// confirm password
var label3 = document.createElement("label")
label3.innerHTML="Confirm Password :"
div.appendChild(label3)

var input3 = document.createElement("input")
input3.type="password"
input3.placeholder="Confirm password"
div.appendChild(input3)

div.appendChild(document.createElement("br"))
var submit = document.createElement("input")
submit.type="submit"
submit.value="Submit"
div.appendChild(submit)
submit.style.marginTop="20px"
submit.style.border="none"
submit.style.border="2px solid black"
submit.style.padding="10px 20px"
submit.style.marginLeft="150px"
submit.style.borderRadius="10px"