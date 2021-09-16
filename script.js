document.getElementById("textTheyTyped").value = "Paste in some text here!";

document.getElementById("submit").onclick = e => {
  e.preventDefault();
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]/g;
  var almostFinal = x.replace(n,"");
  var k = /[\r\n]|[0-9]/g;
  var final = almostFinal.replace(k,"");
  document.getElementById("textTheyTyped").value = final;
  
};





/*
  var listOfChars = [];
  for (var a = 0; a < final.length - 1; a++) {
    listOfChars.push(final.charCodeAt(a));
  };
  var recon = "";
  for (var b = 0; b < listOfChars.length - 1; b++) {
    recon += String.fromCharCode(listOfChars[b]);
  }
  document.getElementById("textTheyTyped").value = recon;
  // console.log(listOfChars);
  */
