document.getElementById("textTheyTyped").value = "Paste in some text here!";


document.getElementById("submit").onclick = e => {
  e.preventDefault();
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]/g;
  var almostFinal = x.replace(n,"");
  // for some reason I seem to need to run this substitution again, I have no idea why lol
  var k = /[\r\n]|[0-9]/g;
  var final = almostFinal.replace(k,"");
  // the "final" string winds up having some mystery line-breaks thrown in. Can't figure out how to get 'em out! So, here's my super-hacky way to get rid of them: i) push the charcode of each character in "final" into an array, ii) iterate through that array and add each charcode to a new string
  var charArray = [];
  for (let c = 0; c < final.length; c++) {
    charArray.push(final.charCodeAt(c));
  }
  console.log("The array I got is ... ")
  console.log(charArray);
  var result = "";
  
  
  document.getElementById("textTheyTyped").value = "Working on it!";
  
};

/* 
- 8220 -- is  




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

