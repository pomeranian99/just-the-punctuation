document.getElementById("textTheyTyped").value = "Paste in some text here!";


document.getElementById("submit").onclick = e => {
  e.preventDefault();
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]/g;
  var almostFinal = x.replace(n,"");
  // for some reason I seem to need to run this substitution again, I have no idea why lol
  var k = /[\r\n]|[0-9]/g;
  var final = almostFinal.replace(k,"");
  // the "final" string winds up having some mystery line-breaks thrown in. Can't figure out how to get 'em out! So, here's my super-hacky way to get rid of them: i) put the charcode of each "final" string as an element into and 
  
  document.getElementById("textTheyTyped").value = final;
  
};


/* 
document.getElementById("submit").onclick = e => {
  e.preventDefault();
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]/g;
  var almostFinal = x.replace(n,"");
  var k = /[\r\n]|[0-9]/g;
  var final = almostFinal.replace(k,"");
  document.getElementById("textTheyTyped").value = final;
  
};

*/

