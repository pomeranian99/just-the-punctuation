document.getElementById("textTheyTyped").value = "Paste in some text here!";

document.getElementById("submit").onclick = e => {
  console.log("I got clicked");
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n]/g;
  // var k = / /g;
  var final = x.replace(n,"");
  // var final = almostFinal.replace(k,"");
  document.getElementById("textTheyTyped").value = final;
};
