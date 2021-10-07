document.getElementById("textTheyTyped").value = "Paste in some text here, then hit 'submit' to strip out everything but the punctuation! \n\nRefresh the site to do another.";

var uniToAscii = [
  [8201, 45], // hyphen
  [8209, 45], // hyphen
  [8210, 150], // n-dash
  [8211, 150], // n-dash
  [8212, 151], // m-dash
  [8212, 151], // m-dash
  [8216, 39], // single quote
  [8217, 39], // single quote
  [8219, 39], // single quote
  [8220, 34], // double quotes
  [8221, 34], // double quotes
  [8224, 34], // double quotes
  [8228, 46], // period
  [8230, 133], // ellipses
  [8242, 39], // single quotes
  [8245, 39], // single quotes
  [8243, 34], // double quotes
  [8246, 34], // double quotes
  [8248, 94], // caret
  [8249, 139], // single left-pointing angle quotation
  [8250, 155], // single right-pointing angle quotation
  [8259, 45], // hyphen
  [8260, 47], // forward slash
  [8267, 182], // pilcrow, paragraph sign
  [8270, 42], // asterisk
  [8274, 37], // percent sign
  [8275, 126], // wavy sign
  [8277, 42], // asterisk
  [8353, 128], // euro
  [8364, 128] // euro
];

document.getElementById("submit").onclick = e => {
  e.preventDefault();
  var x = document.getElementById("textTheyTyped").value;
  var n = / |[a-zA-Z]|[\r\n][0-9]/g;
  var almostFinal = x.replace(n, "");
  // for some reason I seem to need to run this substitution again, I have no idea why lol
  var k = /[\r\n]|[0-9]/g;
  var final = almostFinal.replace(k, "");
  // the "final" string winds up having some mystery line-breaks thrown in. Can't figure out how to get 'em out! So, here's my super-hacky way to get rid of them: go character by character ...
  var charArray = [];
  for (let c = 0; c < final.length; c++) {
    charArray.push(final.charCodeAt(c));
  }

  var finalArray = [];
  for (let b = 0; b < charArray.length; b++) {
    // if it's ASCII, just push the value into finalArray
    if (charArray[b] < 128) {
      finalArray.push(charArray[b]);
    }
    // otherwise, check and see if it's one of the special characters I
    // specced out in my array
    for (let c = 0; c < uniToAscii.length; c++) {
      if (charArray[b] === uniToAscii[c][0]) {
        finalArray.push(uniToAscii[c][1]);  
      }
    }
  }
  // change the text in the box
  var resultHTML = "";
  for (let i = 0; i < finalArray.length; i++) {
    resultHTML+= "&#" + finalArray[i] + ";" + " ";
  }
  document.getElementById('container').innerHTML = "<div class='row'><div class='col-sm-2'></div><div class='col-sm-8'><div id='final'>"  + resultHTML + "</div><div class='col-sm-2'></div></div></div>";
};
