console.log("Executing Sindy's ufret plugin");

var SHEET_ID = "my-chord-data"
var CHORD_CLASS = "krijcheug"
var LYRIC_CLASS = "mejiowvnz"

function isNodeToKeep(node) {
  return (node.localName === "style"
    && node.innerHTML.includes("musical-sheet"));
}

function removeAllSiblings(node) {
  var parent = node.parentNode;
  var curr = node;
  while (curr.previousSibling) {
    if (isNodeToKeep(curr.previousSibling)) {
      curr = curr.previousSibling;
    } else {
      parent.removeChild(curr.previousSibling);
    }
  }
  curr = node;
  while (curr.nextSibling) {
    if (isNodeToKeep(curr.nextSibling)) {
      curr = curr.nextSibling;
    } else {
      parent.removeChild(curr.nextSibling);
    }
  }
}

function removeAllAncestorsSiblings(node) {
  var curr = node.parentNode;
  while (curr.parentNode.localName !== "html") {
    removeAllSiblings(curr);
    curr = curr.parentNode;
  }
}

var sheet = document.getElementById(SHEET_ID);
removeAllAncestorsSiblings(sheet);
removeAllSiblings(sheet);
sheet.style['column-count'] = 3;