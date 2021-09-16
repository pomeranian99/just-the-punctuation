
document.getElementById("textTheyTyped").value = "Paste in some text here!";

document.getElementById("submit").onclick = (e) => {
  console.log("I got clicked");
  var x = document.getElementById("textTheyTyped").value;

};
