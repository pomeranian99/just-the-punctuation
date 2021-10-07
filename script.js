
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
  
  // NOW, what I need to do is ...
  // 1) iterate through the array, and ...
  // 2) if the number is less than 128 ...
  // 3) push into the array the html for that number (i.e. "&#34;"). But ..
  // 4) ... if it's larger than 127 (and thus is UNICODE) ... 
  // 5) .. translate it to ASCII 
  // 3) push into a new array
  var finalArray = [];
  for (let b = 0; b < charArray.length; b++) {
    if (charArray[b] < 128) {
      finalArray.push(charArray[b]);
    }
    if (charArray[b] > 127) {
      finalArray.push(uniToHTML(charArray[b]));
    }
  }
  // change the text in the box 
  document.getElementById("textTheyTyped").value = "Working on it!";
  
};

function uniToHTML (y) {
  let x = "";
  switch (y) {
    case 8220: // double quotes
      x = "&#34;";
      break;
    case 8221: // double quotes 
      x = "&#34;";
      break;
    case 8217: // single quotes
      x = "&#39;"
      break;
      
  }
}


/* 
- 8220 -- use it to generate the HTML for curly left quotes 




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

