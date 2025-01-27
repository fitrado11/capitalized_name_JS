// var name = "Jadid Fitrado";
// name = name.toUpperCase();
// name = name.toLowerCase();

// capitalize the front Name
var name = prompt("What is your name ?");
// isolate first character 
var firstChar = name.slice(0,1);
// capitalize first letter 
var capfirstChar = firstChar.toUpperCase();
// isolate the rest of the name
var restChar = name.slice(1,name.length);
// concatenate the whole letter 
restChar = restChar.toLowerCase();
var capitalizedName = capfirstChar + restChar;
alert("hello, " + capitalizedName);
