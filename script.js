document.getElementById("textTheyTyped").value = "Paste in some text here!";

document.getElementById("submit").onclick = e => {
  console.log("I got clicked");
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]$/g;
  var almostFinal = x.replace(n,"");
  var k = /[\r\n]$/g;
  var final = almostFinal.replace(k,"");
  document.getElementById("textTheyTyped").value = final;
};
