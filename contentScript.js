console.log("Executing Sindy's ufret plugin");

var SHEET_ID = "blyodnijb"
var LINE_CLASS = "atfolhyds"
var CHORD_CLASS = "krijcheug"
var LYRIC_CLASS = "mejiowvnz"

function removeAllSiblings(node) {
  var parent = node.parentNode;
  while (node.previousSibling) {
    parent.removeChild(node.previousSibling);
  }
  while (node.nextSibling) {
    parent.removeChild(node.nextSibling);
  }
}

function removeAllAncestorsSiblings(node) {
  var curr = node;
  while (curr.parentNode) {
    removeAllSiblings(curr);
    curr = curr.parentNode;
  }
}

var sheet = document.getElementById(SHEET_ID);
removeAllAncestorsSiblings(sheet);
while (sheet.childNodes[0].className !== LINE_CLASS) {
  sheet.removeChild(sheet.childNodes[0]);
}
sheet.style['column-count'] = 4;

var lines = sheet.getElementsByClassName(LINE_CLASS);
var prevHasLyrics = false;
var currHasLyrics = false;
for (var i = 0; i < lines.length; i++) {
  var line = lines[i];

  var lyrics = line.getElementsByClassName(LYRIC_CLASS);
  for (var j = 0; j < lyrics.length; j++) {
    var lyric = lyrics[j];
    if (lyric.innerText !== "　" && lyric.innerText !== "") {
      currHasLyrics = true;
    }
  }

  line.style.marginTop="0em";
  line.style.marginBottom="0em";
  if (!currHasLyrics) {
    line.style["line-height"] = "0px";
  }

  prevHasLyrics = currHasLyrics;
  currHasLyrics = false;
}